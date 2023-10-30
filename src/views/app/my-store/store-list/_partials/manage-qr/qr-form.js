import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { qrCustomizedFields, qrMainFieldsAddMessage, qrMainFieldsPageStructure, qrMainFieldsPay, qrMainFieldsTransaction } from "containers/form-fields/my-store/qr-form-fields";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import CardWrapper from "containers/wrapper/card-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import { listGroupItem, stringToJson } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Button, Form,
  FormGroup, Row
} from "reactstrap";
import apiClient from "services/axios";

const QRForm = (props) => {
  let { stid } = useParams();
  let { id } = useParams();
  let history = useHistory();

  const [store, setStore] = useState({});
  const [subscription, setSubscription] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [bannerFile, setBannerFile] = useState(null);
  const [isCustomizeFieldEnable, setIsCustomizeFieldEnable] = useState(false);

  useEffect(() => {
    getSubscriptionFormData();
  }, []);

  const getSubscriptionFormData = async () => {
    setIsLoading(true);
    if (props.action === "ADD") {
      await getStore();
    } else if (props.action === "UPDATE") {
      await getSubscription();
    }
    setIsLoading(false);
  };

  const getStore = async () => {
    let params = {};
    let body = { stid: stid };

    try {
      await apiClient("getStore", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setStore(response.data.data.store_info || {});
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSubscription = async () => {
    let params = {};
    let body = { id: id };

    try {
      await apiClient("getSubscription", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setSubscription(response.data.data.subscription || {});
          if(stringToJson(response.data.data.subscription?.t_fields, 'arr')?.length){
            setIsCustomizeFieldEnable(true);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addSubscription = async (data) => {
    setIsFormLoading(true)
    let params = {};
    let body = data;

    try {
      await apiClient("addSubscription", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          NotificationManager.success(
            response.data.message || "Subscription successfully created.",
            "Success!"
          );
          // document.getElementById("createForm").reset();
          history.push(`/app/my-store/subscription/${stid}`);
        } else {
          NotificationManager.error(
            response.data.message || "Subscription couldn't be created.",
            "Error!"
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
    setIsFormLoading(false)
  };

  const updateSubscription = async (data) => {
    setIsFormLoading(true);
    let params = {};
    let body = data;

    try {
      await apiClient("updateSubscription", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          NotificationManager.success(
            response.data.message || "Subscription successfully updated.",
            "Success!"
          );
          // document.getElementById('createForm').reset();
          history.push(`/app/my-store/subscription/${subscription.store_id}`);
        } else {
          NotificationManager.error(
            response.data.message || "Subscription couldn't be updated.",
            "Error!"
          );
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsFormLoading(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    let form = document.getElementById("createForm");
    let formData = prepareFormFields(form);
    //formData.stid = stid;
    // console.log("form data ", formData);
    // this.props.onSubmitHandler(formData);
    let data = new FormData();
    for (let key in formData) {
      if (key !== "banner_rul") {
        data.append(key, formData[key]);
      }
    }
    data.append("banner_rul", bannerFile);
    data.append("store_id", stid || subscription.store_id);
    //console.log("form data ", data.getAll());

    // Field which is not preset
    data.append("cycle", formData.max_cycle);
    data.append("invoice_ref", formData.invoice_ref);
    data.append("cc_ops_email", "dummy@sslwireless.com");
    data.append("amount_list", formData.amount_list || formData.amount);
    data.append("week", "is_sat");

    if (props.action === "ADD") {
      addSubscription(data);
    } else {
      data.append("id", id);
      updateSubscription(data);
    }
  };

  const fileChangeHandler = (e, fieldName) => {
    if (fieldName === "banner_rul") {
      console.log(e.target.files[0]);
      setBannerFile(e.target.files[0] || null);
    }
  };

  const customizedFields = (sectionTitle, name) => {
    return (
      <React.Fragment>
        <Colxx md="12">
          <h5 className="mt-4 mb-2">{sectionTitle}</h5>
          <hr />
          <FormWrapper
            fields = {qrCustomizedFields(name, stringToJson(subscription?.t_fields || "", "arr"))}
          />
        </Colxx>
      </React.Fragment>
    );
  };

  const mainFieldsTitle = (sectionTitle, marginTop='mt-4') => {
    return(
      <>
        <Row>
          <Colxx md='12'>
            <h5 className = {`${marginTop} mb-2`} >{sectionTitle}</h5>
            <hr />
          </Colxx>
        </Row>
      </>
    )
  }

  const mainFields = () => {
    return (
      <>
        {mainFieldsTitle('Pay or Subscription','')}
        <FormWrapper
          fields = {qrMainFieldsPay(subscription || null)}
        />

        {mainFieldsTitle('Transaction Information')}
        <FormWrapper
          fields = {qrMainFieldsTransaction(subscription || null)}
        />

        {mainFieldsTitle('Additional Message')}
        <FormWrapper
          fields = {qrMainFieldsAddMessage(subscription || null)}
        />

        {mainFieldsTitle('Page Structure')}
        <FormWrapper
          fields = {qrMainFieldsPageStructure(subscription || null, fileChangeHandler)}
        />
      </>
    )
  }

  const getCustomizedFieldsDOM = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12 d-flex align-items-center mt-4 mb-4">
            <Switch
              className="custom-switch custom-switch-primary"
              checked={isCustomizeFieldEnable}
              onChange={() =>
                setIsCustomizeFieldEnable(!isCustomizeFieldEnable)
              }
            />
            <label className="mb-0 ml-2">
              <span>Click to add customize fields</span>
            </label>
          </div>
        </div>

        <div className="row">
          {isCustomizeFieldEnable ? (
            <>
              {customizedFields("Customer Name", "cus_name")}
              {customizedFields("Customer Address Line 1", "cus_add1")}
              {customizedFields("Customer Address Line 2", "cus_add2")}
              {customizedFields("Customer City", "cus_city")}
              {customizedFields("Customer State", "cus_state")}
              {customizedFields("Customer Postcode", "cus_postcode")}
              {customizedFields("Customer Country", "cus_country")}
              {customizedFields("Customer Email", "cus_email")}
              {customizedFields("Customer Phone", "cus_phone")}
              {customizedFields("Customer Fax", "cus_fax")}
              {customizedFields("Shipment Name", "ship_name")}
              {customizedFields("Shipment Address 1", "ship_add1")}
              {customizedFields("Shipment Address 2", "ship_add2")}
              {customizedFields("Shipment City", "ship_city")}
              {customizedFields("Shipment State", "ship_state")}
              {customizedFields("Shipment Postcode", "ship_postcode")}
              {customizedFields("Shipment Country", "ship_country")}
              {customizedFields("Product Amount", "product_amount")}
              {customizedFields("VAT", "vat")}
              {customizedFields("TDS", "tds")}
              {customizedFields("Discount Amount", "discount_amount")}
              {customizedFields("Convenience Fee", "convenience_fee")}
              {customizedFields("Additional Field A", "value_a")}
              {customizedFields("Additional Field B", "value_b")}
              {customizedFields("Additional Field C", "value_c")}
              {customizedFields("Additional Field D", "value_d")}
            </>
          ) : (
            ""
          )}
        </div>
      </React.Fragment>
    );
  };

  const bodyContent = () => {
    return (
      <>
        <Form onSubmit={onFormSubmit} id="createForm">
          {mainFields()}
          {getCustomizedFieldsDOM()}

          <Row>
            <div className="col-md-12 text-left">
              <FormGroup className="mb-0 text-left">
                <Button
                  type="submit"
                  color="primary"
                  className="with_icon_btn mb-2 mr-2 btn-sm"
                  disabled={isFormLoading}
                >
                  <span>
                    {props.action === "ADD" ? "Create New" : "Update"}
                  </span>
                </Button>
              </FormGroup>
            </div>
          </Row>
        </Form>
      </>
    );
  };

  return (
    <React.Fragment>
      <Row>
        <BreadcrumbWrapper
          heading={
            props.action === "ADD"
              ? "menu.new-subscription"
              : "menu.update-subscription"
          }
          match={props.urlMatch}
        />
      </Row>
      <Row>
      <Colxx md="12" xxs="12">
        <CardWrapper
          headerTitle="Store Information"
          toggleOn={true}
          isOpen={true}
          isDefaultHeader={true}
          footerEnabled={false}
          isLoading={isLoading}
          bodyContent={() => (
            <Row>
              <div className="col-md-6">
                <div className="list-group transaction-list">
                  {listGroupItem(
                    "Store Name",
                    store?.store_name || subscription?.store_name,3,9
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="list-group transaction-list">
                  {listGroupItem("Store ID", store?.strid || subscription?.strid,3,9)}
                </div>
              </div>
            </Row>
          )}
        />
        </Colxx>
      </Row>
      <Row>
        <Colxx md="12" xxs="12">
          <Row className="">
            <Colxx xxs="12">
              <CardWrapper
                headerDisabled={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={isLoading}
                bodyContent={bodyContent}
              />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </React.Fragment>
  );
};

export default QRForm;
