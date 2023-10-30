import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { ipnEmailFields, ipnHttpListenerFields, ipnMobileFields } from "containers/form-fields/my-store/ipn-settings-form-fields";
import CardWrapper from "containers/wrapper/card-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import { useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";

const SetIPNSettings = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);

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
                      {listGroupItem('Contact Email',props.store?.contact_email)}
                    </div>
                  </div>
                </div>
              )}
            />
            <CardWrapper
              headerTitle="IPN at Email Address"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <FormWrapper fields = {ipnEmailFields(props.store || null)}/>
              )}
            />
            <CardWrapper
              headerTitle="IPN by SMS at Mobile"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <FormWrapper fields = {ipnMobileFields(props.store || null)}/>
              )}
            />
            <CardWrapper
              headerTitle="IPN at HTTP Listener"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <FormWrapper fields = {ipnHttpListenerFields(props.store || null)}/>
              )}
            />
          </Colxx>
        </Row>
      </>
    );
  };

  const setStoreGroup = async (e) => {
    e.preventDefault();
    let form = document.getElementById("SetIPNSettingsForm");
    let formData = prepareFormFields(form);
    formData.stid = props.store?.stid;

    setIsLoading(true);
    try {
      await apiClient("setIPNSetting", {}, formData).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          if (response.data.data.store) {
            NotificationManager.success(
              response.data.message || "IPN Settings successfully Updated.",
              "Success!"
            );

            let stores = props.stores;
            let store = props.store;

            store.ipn_email_1=response.data.data.store?.ipn_email_1
            store.ipn_email_2=response.data.data.store?.ipn_email_2
            store.ipn_email_3=response.data.data.store?.ipn_email_3
            store.ipn_mobile_1=response.data.data.store?.ipn_mobile_1
            store.ipn_mobile_1_enable=response.data.data.store?.ipn_mobile_1_enable
            store.ipn_mobile_2=response.data.data.store?.ipn_mobile_2
            store.ipn_mobile_2_enable=response.data.data.store?.ipn_mobile_2_enable
            store.ipn_http_url=response.data.data.store?.ipn_http_url
            store.ipn_http_url_enable=response.data.data.store?.ipn_http_url_enable

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
        modalTitle="IPN Settings"
        isLoading={isLoading}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={setStoreGroup}
        formId="SetIPNSettingsForm"
        // formSubmitTitle="Set"
      />
    </>
  );
};

export default SetIPNSettings;
