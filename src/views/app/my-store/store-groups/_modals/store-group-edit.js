import React, { useState } from "react";
import { Card, CardBody, Row } from "reactstrap";
import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";
import { prepareFormFields } from "helpers/form";
import StoreGroupForm from "../_partials/store-group-form";
import apiClient from "services/axios";

const StoreGroupEdit = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);

    const editStoreGroup = async (e) => {
        e.preventDefault();
        let form = document.getElementById("editStoreGroupForm");
        let formData = prepareFormFields(form);

        formData.store_grp_id = props.store?.store_grp_id;

        setIsLoading(true);
        try {
            await apiClient("updateStoreGroup", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.store_group) {
                        NotificationManager.success(
                            response.data.message || "Store group successfully updated.",
                            "Success!"
                        );

                        let groups = props.storeGroups;
                        let store = props.store;
                        store.group_name = response.data.data.store_group?.group_name;
                        store.status = response.data.data.store_group?.status;
                        groups = groups.map((obj) =>
                            obj.store_grp_id === store.store_grp_id ? store : obj
                        );
                        props.setStoreGroups(groups);

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

    const modalHeaderContent = () => {
        return (
        <Row>
            <Colxx md="12">
            </Colxx>
        </Row>
        );
    };

    const modalContent = () => {
        return <React.Fragment>
            <StoreGroupForm
                store={props.store}
            />
        </React.Fragment>;
    };

    return (
        <React.Fragment>
        <ModalWrapper
            isOpen={props.isOpen}
            toggle={props.toggle}
            modalTitle="Edit Store Group"
            isLoading={isLoading}
            modalHeaderContent={modalHeaderContent}
            modalContent={modalContent}
            formEnabled={true}
            onFormSubmit={editStoreGroup}
            formId="editStoreGroupForm"
            // formSubmitTitle="Edit"
        />
        </React.Fragment>
    );
};

export default StoreGroupEdit;
