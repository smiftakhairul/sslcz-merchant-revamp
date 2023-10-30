import React, { useState } from "react";
import { Card, CardBody, Row } from "reactstrap";
import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";
import { prepareFormFields } from "helpers/form";
import StoreGroupForm from "../_partials/store-group-form";
import apiClient from "services/axios";

const StoreGroupCreate = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);

    const createStoreGroup = async (e) => {
        e.preventDefault();
        let form = document.getElementById("createStoreGroupForm");
        let formData = prepareFormFields(form);
        
        setIsLoading(true);
        try {
            await apiClient("addStoreGroup", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.store_group) {
                        NotificationManager.success(
                            response.data.message || "Store group successfully created.",
                            "Success!"
                        );

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
                // store={props.store}
            />
        </React.Fragment>;
    };

    return (
        <React.Fragment>
        <ModalWrapper
            isOpen={props.isOpen}
            toggle={props.toggle}
            modalTitle="Create Store Group"
            isLoading={isLoading}
            modalHeaderContent={modalHeaderContent}
            modalContent={modalContent}
            formEnabled={true}
            onFormSubmit={createStoreGroup}
            formId="createStoreGroupForm"
            // formSubmitTitle="Edit"
        />
        </React.Fragment>
    );
};

export default StoreGroupCreate;
