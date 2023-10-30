import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { securePayBaseUrl } from "constants/default-values";
import { gatewayColorFields, gatewaySettingsFields } from "containers/form-fields/my-store/gw-settings-form-fields";
import CardWrapper from "containers/wrapper/card-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import { useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";

const SetGWSettings = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);
  
  const bodyContent = () => {
    return (
      <>
        {props.store?.store_logo ? (
            <img
              src={`${securePayBaseUrl}/${props.store?.store_logo}`}
              alt="Logo"
              width={50}
              height={50}
            />
          ) : (
            <p className="mb-0 display-8">
              Logo is not uploaded. Please email to
              operation@sslcommerz.com to upload the logo (png or
              jpg : 100px X 100px)
            </p>
        )} 
      </>
    )
  }

  const modalContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
          <CardWrapper
              headerTitle="Store Information"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Store Name',props.store?.store_name)}
                      {listGroupItem('Store ID',props.store?.strid)}
                      {listGroupItem('Store Logo',null,5,7,false,bodyContent)}
                    </div>
                  </div>
                </div>
              )}
            />
            <CardWrapper
              headerTitle="Gateway Color"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <FormWrapper fields = {gatewayColorFields(props.store || null)}/>
              )}
            />
            <CardWrapper
              headerTitle="Gateway Settings"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <FormWrapper fields = {gatewaySettingsFields(props.store || null)}/>
              )}
            />
          </Colxx>
        </Row>
      </>
    );
  };

  const setStoreGroup = async (e) => {
    e.preventDefault();
    let form = document.getElementById("SetGWSettingsForm");
    let formData = prepareFormFields(form);
    formData.stid = props.store?.stid;

    setIsLoading(true);

    try {
      await apiClient("setGatewaySetting", {}, formData).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          if (response.data.data.store) {
            NotificationManager.success(
              response.data.message || "Gateway Settings successfully Updated.",
              "Success!"
            );

            let stores = props.stores;
            let store = props.store;

            store.gateway_setting.color_1_bk =
              response.data.data.store?.gateway_setting?.color_1_bk;
            store.gateway_setting.color_1_ft =
              response.data.data.store?.gateway_setting?.color_1_ft;
            store.gateway_setting.color_2_bk =
              response.data.data.store?.gateway_setting?.color_2_bk;
            store.gateway_setting.color_2_ft =
              response.data.data.store?.gateway_setting?.color_2_ft;
            store.gateway_setting.other1 =
              response.data.data.store?.gateway_setting?.other1;
            store.tdr_carried_by_cust =
              response.data.data.store?.tdr_carried_by_cust;

            stores = stores.map((obj) =>
              obj.stid === store.stid ? store : obj
            );
            props.setStores(stores);

            props.toggle();
          } else {
            NotificationManager.error(
              response.data.message || "Something went wrong.",
              "Error!"
            );
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Gateway Settings"
        isLoading={isLoading}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={setStoreGroup}
        formId="SetGWSettingsForm"
        // formSubmitTitle="Set"
      />
    </>
  );
};

export default SetGWSettings;
