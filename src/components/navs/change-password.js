import { Colxx } from "components/bootstrap/custom-bootstrap";
import FormGroupField from "components/bootstrap/custom-form-groups";
import { NotificationManager } from "components/notifications";
import { isPasswordMatched, prepareFormFields } from "helpers/form";
import React, { useState } from "react";
import { Button, Form, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import apiClient from "services/axios";

const ChangePassword = (props) => {
    const [isUpdatePassFormValid, setIsUpdatePassFormValid] = useState(true);

    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('updatePasswordForm');
        let formData = prepareFormFields(form);
        updatePassword(formData);
    };

    const updatePassword = (formData) => {
        let params = {};
        
        try {
            apiClient('changePassword', params, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'Password successfully updated.', 'Success!');
                    document.getElementById('updatePasswordForm').reset();
                    props.changePassToggle();
                    setIsUpdatePassFormValid(true);
                } else {
                    NotificationManager.error(response.data.message || 'Password couldn\'t be updated, please try again.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const checkPassword = () => {
        let cNewInput = document.getElementById('new_password');
        let cInput = document.getElementById('new_password_confirmation');
        let check = isPasswordMatched('new_password', 'new_password_confirmation');

        if (cNewInput.value && cInput.value) {
            setIsUpdatePassFormValid(false);
        }
        if (document.getElementsByClassName('password-error-feedback')[0]) {
            document.getElementsByClassName('password-error-feedback')[0].remove();
        }
        if (check) {
            setIsUpdatePassFormValid(true);
        } else {
            if (cNewInput.value && cInput.value) {
                let elm = document.createElement('span');
                elm.className = 'text-danger password-error-feedback';
                elm.innerHTML = 'Password does not match.'
                cInput.parentNode.insertBefore(elm, cInput.nextSibling);
            }
        }
    }

    return (
        <React.Fragment>
            <Modal isOpen={props.changeModal} toggle={props.changePassToggle}>
                <ModalHeader toggle={props.changePassToggle}>
                    <span>Change Password</span>
                </ModalHeader>
                <ModalBody className="pb-0">
                    <Form onSubmit={onFormSubmit} id="updatePasswordForm">
                        <FormGroupField
                            label="Current Password"
                            type="password"
                            name="current_password"
                            id="current_password"
                            placeholder="Enter current password"
                            required={true}
                        ></FormGroupField>
                        <FormGroupField
                            label="New Password"
                            type="password"
                            name="new_password"
                            id="new_password"
                            placeholder="Enter new password"
                            required={true}
                            onKeyup={() => checkPassword()}
                        ></FormGroupField>
                        <FormGroupField
                            label="Confirm Password"
                            type="password"
                            name="new_password_confirmation"
                            id="new_password_confirmation"
                            placeholder="Confirm new password"
                            required={true}
                            onKeyup={() => checkPassword()}
                        ></FormGroupField>
                        <FormGroup>
                            <Button outline type="button" color="secondary" className="default" onClick={props.changePassToggle}>Cancel</Button>
                            <Button type="submit" color="primary" className="default float-right" disabled={!isUpdatePassFormValid}>Update Now</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter className="border-0 pt-3">
                    <Row>
                        <Colxx md={12}>
                            <h4>Password Character Policy</h4>
                            <ul className="">
                                <li>Password length must be more/equal to 8 characters</li>
                                <li>It must contain minimum a character is UPPERCASE [A-Z]</li>
                                <li>It must contain minimum a character is LOWERCASE [a-z]</li>
                                <li>It must contain minimum a NUMBER [1-0]</li>
                                <li>It must contain minimum a special character, except ` and ^ and Space
                                </li>
                                <li>It must not contain repeated characters.</li>
                            </ul>
                        </Colxx>
                        <Colxx md={12}>
                            <h4>Password Change Policy</h4>
                            <ul>
                                <li>Password must be changed within 90 days.</li>
                                <li>From 80th to 90th, user will get alert to change password.</li>
                                <li>After 30 days, the account will be blocked.</li>
                                <li>One of previously used passwords cannot be set as new password.</li>
                            </ul>
                        </Colxx>
                    </Row>

                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
}
 
export default ChangePassword;