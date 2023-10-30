import { NotificationManager } from "components/notifications";
import { setStoreGroupFields } from "containers/form-fields/my-store/set-store-group-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useState } from "react";
import apiClient from "services/axios";

const SetStoreGroup = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);

  const modalContent = () => {
    return (
      <React.Fragment>
        <FormWrapper
          fields = {setStoreGroupFields(props.storeGroups,props.store)}
        />
      </React.Fragment>
    );
  };

  const headerContent = () => {
    return (
      <React.Fragment>
        <p className="mb-0">
          <span className="text-muted display-7">
            {props.store?.strid}
          </span>
        </p>
      </React.Fragment>
    );
  };

  const setStoreGroup = async (e) => {
    e.preventDefault();
    let form = document.getElementById("SetStoreGroupForm");
    let formData = prepareFormFields(form);
    formData.stid = props.store?.stid;

    setIsLoading(true);
    try {
      await apiClient("assignStoreGroup", {}, formData).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          if (response.data.data.store_group) {
            NotificationManager.success(
              response.data.message || "Store group successfully assigned.",
              "Success!"
            );

            let stores = props.stores;
            let store = props.store;
            store.store_grp_id = response.data.data.store_group?.store_grp_id;
            store.group_name = response.data.data.store_group?.group_name;

            stores = stores.map((obj) =>
              obj.store_grp_id === store.store_grp_id ? store : obj
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
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Set Store Group"
        isLoading={isLoading}
        modalHeaderContent={headerContent}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={setStoreGroup}
        formId="SetStoreGroupForm"
        // formSubmitTitle="Set"
      />
    </React.Fragment>
  );
};

export default SetStoreGroup;
