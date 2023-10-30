import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useState } from "react";
import apiClient from "services/axios";
import SettlementRequestForm from "../../_partials/manage-settlement/settlement-request-form";

const SettlementRequestCreate = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);

  const createStoreGroup = async (e) => {
    e.preventDefault();
    let form = document.getElementById("createSettlementRequest");
    let formData = prepareFormFields(form);
    formData.stid = props.stid;

    // console.log(formData);

    setIsLoading(true);
    try {
      await apiClient("addSettlementRequest", {}, formData).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          if (response.data.data.settlement_req_response) {
            if (
              response.data.data.settlement_req_response.code === 200 ||
              response.data.data.settlement_req_response.status === "SUCCESS"
            ) {
              NotificationManager.success(
                response.data.data.settlement_req_response.message[0] ||
                  "Settlement request successfully created",
                "Success!"
              );
            } else {
              NotificationManager.error(
                response.data.data.settlement_req_response.message[0] ||
                  "Something went wrong.",
                "Error!"
              );
            }

            props.setForceUpdate(!props.forceUpdate);
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

  const modalContent = () => {
    return (
      <React.Fragment>
        <SettlementRequestForm />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Create Settlement Request"
        isLoading={isLoading}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={createStoreGroup}
        formId="createSettlementRequest"
        // formSubmitTitle="Edit"
      />
    </React.Fragment>
  );
};

export default SettlementRequestCreate;
