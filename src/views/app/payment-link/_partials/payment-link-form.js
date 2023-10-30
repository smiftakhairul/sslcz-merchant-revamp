import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { additionalMessageFields, pageStructureFields, payFields, paymentLinkCustomizedFields, storeInfoFields, transactionFields } from "containers/form-fields/paymnet-link/payment-link-form-fields";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import { stringToJson } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {
  Button, Form,
  FormGroup, Row
} from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const PaymentLinkForm = (props) => {
  let { id } = useParams();
  let history = useHistory();

  const [storeOptions, setStoreOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [paymentLinkDetails, setPaymentLinkDetails] = useState({});

  const [isCustomizeFieldEnable, setIsCustomizeFieldEnable] = useState(false);
  const [bannerFile, setBannerFile] = useState(null);

  useEffect(() => {
    getPaymentLinkDetailsFormData();
  }, []);

  const getPaymentLinkDetailsFormData = async () => {
    setIsLoading(true);
    await getStores();
    if (props.action === "UPDATE") {
      await getPaymentLinkDetails();
    }
    setIsLoading(false);
  };

  const getStores = async () => {
    let params = {};
    let body = {};

    try {
      await apiClient("getStores", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          let preparedStoreOptions = [];
          if (response.data.data.data) {
            let apiData = response.data.data.data;
            for (let i = 0; i < apiData.length; i++) {
              preparedStoreOptions[i] = {
                label: apiData[i].strid,
                value: apiData[i].stid,
              };
            }
          }
          setStoreOptions(preparedStoreOptions);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPaymentLinkDetails = async () => {
    let params = {};
    let body = { id: id };

    try {
      await apiClient("getPaymentLink", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setPaymentLinkDetails(response.data.data.payment_links || {});
          if(stringToJson(response.data.data.payment_links?.t_fields, 'arr')?.length){
            setIsCustomizeFieldEnable(true);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addPaymentLink = async (data) => {
    setIsFormLoading(true);
    let params = {};
    let body = data;

    try {
      await apiClient("addPaymentLink", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          NotificationManager.success(
            response.data.message || "Payment link successfully created.",
            "Success!"
          );
          //document.getElementById("createForm").reset();
          history.push("/app/payment/link-list");
        } else {
          NotificationManager.error(
            response.data.message || "Payment link couldn't be created.",
            "Error!"
          );
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsFormLoading(false);
  };

  const updatePaymentLink = async (data) => {
    setIsFormLoading(true);
    let params = {};
    let body = data;

    try {
      await apiClient("updatePaymentLink", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          NotificationManager.success(
            response.data.message || "Payment link successfully updated.",
            "Success!"
          );
          // document.getElementById('createForm').reset();
          history.push("/app/payment/link-list");
        } else {
          NotificationManager.error(
            response.data.message || "payment link couldn't be updated.",
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
    // this.props.onSubmitHandler(formData);
    var data = new FormData();
    for (let key in formData) {
      if (key !== "banner_rul") {
        data.append(key, formData[key]);
      }
    }
    data.append("banner_rul", bannerFile);

    // Field which is not preset
    data.append("cycle", formData.max_cycle);
    data.append("invoice_ref", formData.invoice_ref);
    data.append("cc_ops_email", "dummy@sslwireless.com");
    data.append("amount_list", formData.amount_list || formData.amount);
    data.append("week", "is_sat");

    if (props.action === "ADD") {
      addPaymentLink(data);
    } else {
      data.append("id", id);
      updatePaymentLink(data);
    }
  };

  const fileChangeHandler = (e, fieldName) => {
    if (fieldName === "banner_rul") {
      console.log(e.target.files[0]);
      setBannerFile(e.target.files[0] || null);
    }
  };

  const fieldTitle = (sectionTitle, marginTop='mt-4') => {
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
        {fieldTitle('Store Information','')}
        <FormWrapper
          fields = {storeInfoFields(paymentLinkDetails || null,storeOptions)}
        />

        {fieldTitle('Pay or Subscription')}
        <FormWrapper
          fields = {payFields(paymentLinkDetails || null)}
        />

        {fieldTitle('Transaction Information')}
        <FormWrapper
          fields = {transactionFields(paymentLinkDetails || null)}
        />

        {fieldTitle('Additional Message')}
        <FormWrapper
          fields = {additionalMessageFields(paymentLinkDetails || null)}
        />

        {fieldTitle('Page Structure')}
        <FormWrapper
          fields = {pageStructureFields(paymentLinkDetails || null, fileChangeHandler)}
        />
      </>
    )
  }

  const customizedFields = (sectionTitle, name) => {
    return (
      <React.Fragment>
        <Colxx md="12">
          <h5 className="mt-4 mb-2">{sectionTitle}</h5>
          <hr />
          <FormWrapper
            fields = {paymentLinkCustomizedFields(name, stringToJson(paymentLinkDetails?.t_fields || "", "arr"))}
          />
        </Colxx>
      </React.Fragment>
    );
  };

  
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
              <span> Click to add customize fields </span>
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
                  className="mb-2 btn-sm"
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
          heading={props.action === "ADD" ? "menu.payment-link" : "menu.payment-link-update"}
          match={props.urlMatch}
        />
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

export default PaymentLinkForm;
