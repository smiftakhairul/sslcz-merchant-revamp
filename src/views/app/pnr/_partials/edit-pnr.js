import { NotificationManager } from "components/notifications";
import { pnrFields } from "containers/form-fields/pnr/pnr-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useState } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const EditPnr = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [isLoadingForm, setIsLoadingForm] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('updatePnrForm');
        let formData = prepareFormFields(form);
        updateTransaction(formData);
    };

    const updateTransaction = async (formData) => {
        setIsLoadingForm(true);
        let params = {};
        let body = {...formData, ...{tid: props.data?.tid, ssl_id: props.data?.sslid}};

        try {
            await apiClient('editTransaction', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'Transaction successfully updated.', 'Success!');
                    document.getElementById('ssl_request_remarks').value = '';
                } else {
                    NotificationManager.error(response.data.message || 'Transaction couldn\'t be updated, please try again.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }
        
        setIsLoadingForm(false);
    };

    const bodyContent = () => {
        return <React.Fragment>
            <Form onSubmit={onFormSubmit} id="updatePnrForm">
                <FormWrapper
                    fields={pnrFields(props.data)}
                />

                <div className="row">
                    <div className="col-md-12 text-left">
                        <FormGroup className="mb-0">
                            <Button color="primary" type="submit" className="mt-2 btn-sm" disabled={isLoadingForm}>
                                <span>Update</span>
                            </Button>
                        </FormGroup>
                    </div>
                </div>
            </Form>
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <CardWrapper
                headerTitle="Update Information"
                toggleOn={true}
                isOpen={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={props.isLoading}
                bodyContent={bodyContent}
            />
        </React.Fragment>
    );
}
 
export default EditPnr;
