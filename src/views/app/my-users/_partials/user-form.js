import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { loginCredFields, profileInfoFields } from "containers/form-fields/my-users/user-form-fields";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import { isPasswordMatched, prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Row } from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import PasswordPolicy from "./password-policy";

const UserForm = (props) => {
    let { id } = useParams();
    let history = useHistory();

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({});
    const [userRoleOptions, setUserRoleOptions] = useState([]);
    const [storeGroupOptions, setStoreGroupOptions] = useState([]);
    const [merchantAppRoleOptions, setMerchantAppRoleOptions] = useState([]);
    const [userStatusOptions, setUserStatusOptions] = useState([]);
    const [passwordMatched, setPasswordMatched] = useState(true);

    useEffect(() => {
        getUserFormData();
    }, []);

    const getUserFormData = async () => {
        setIsLoading(true);
        await getUserFieldData();
        if (props.action === 'UPDATE') {
            await getUser();
        }
        setIsLoading(false);
    }

    const getUserFieldData = async () => {
        let params = {};
        let body = {};

        try {
            await apiClient('getUserFieldData', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setUserRoleOptions(response.data.data.user_roles || []);
                    setStoreGroupOptions(response.data.data.store_group || []);
                    setMerchantAppRoleOptions(response.data.data.merchant_app_roles || []);
                    setUserStatusOptions([
                        { label: 'Active', value: 1 },
                        { label: 'Inactive', value: 0 },
                    ]);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async () => {
        let params = {};
        let body = {uid: id};

        try {
            await apiClient('getUser', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setUser(response.data.data.user || {});
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const addUser = async (data) => {
        let params = {};
        let body = data;

        try {
            await apiClient('addUser', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'User successfully created.', 'Success!');
                    document.getElementById('createForm').reset();
                    setPasswordMatched(true);
                } else {
                    NotificationManager.error(response.data.message || 'User couldn\'t be created, please try again.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (data) => {
        let params = {};
        let body = data;

        try {
            await apiClient('updateUser', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'User successfully updated.', 'Success!');
                    // document.getElementById('createForm').reset();
                    history.push('/app/my-users/list');
                } else {
                    NotificationManager.error(response.data.message || 'User couldn\'t be updated, please try again.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('createForm');
        let formData = prepareFormFields(form);
        if (props.action === 'ADD') {
            addUser(formData);
        } else {
            formData.uid = id;
            updateUser(formData);
        }
    };

    const checkPassword = () => {
        let cNewInput = document.getElementById('user_passwd');
        let cInput = document.getElementById('confirm_passwd');
        let check = isPasswordMatched('user_passwd', 'confirm_passwd');

        if (cNewInput.value && cInput.value) {
            setPasswordMatched(false);
        }
        
        if (document.getElementsByClassName('password-error-feedback')[0]) {
            document.getElementsByClassName('password-error-feedback')[0].remove();
        }

        if (check) {
            setPasswordMatched(true);
        } else {
            if (cNewInput.value && cInput.value) {
                let elm = document.createElement('span');
                elm.className = 'text-danger text-small password-error-feedback';
                elm.innerHTML = 'Password does not match.'
                cInput.parentNode.insertBefore(elm, cInput.nextSibling);
            }
        }
    }

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
            {fieldTitle('Profile Information','')}
            <FormWrapper
              fields = {profileInfoFields(user || null)}
            />
    
            {fieldTitle('Login Credentials')}
            <FormWrapper
              fields = {loginCredFields(user || null,userRoleOptions, storeGroupOptions, merchantAppRoleOptions, props.action, checkPassword)}
            />
          </>
        )
      }
    

    const bodyContent = () => {
        return <React.Fragment>
            <Form onSubmit={onFormSubmit} id="createForm">
                {mainFields()}

                <Row>
                    <div className="col-md-12 text-left">
                        <FormGroup className="mb-0 text-left">
                            <Button type="submit" color="primary" className="mt-2 btn-sm" disabled={!passwordMatched}>
                                <span>{props.action === 'ADD' ? 'Create New' : 'Update'}</span>
                            </Button>
                        </FormGroup>
                    </div>
                </Row>
            </Form>
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <Row>
                <BreadcrumbWrapper
                    heading={props.action === 'ADD' ? 'menu.create-user' : 'menu.update-user-title'}
                    match={props.urlMatch}
                />
            </Row>
            <Row>
                <Colxx md="12" xxs="12">
                    <Row className="">
                        <Colxx xxs="12">
                            <CardWrapper
                                headerDisabled={true}
                                footerEnabled={false}
                                isLoading={isLoading}
                                bodyContent={bodyContent}
                            />
                        </Colxx>
                    </Row>
                </Colxx>
            </Row>
            <Row>
                <Colxx md="12" xxs="12">
                    <PasswordPolicy />
                </Colxx>
            </Row>
        </React.Fragment>
    );
}
 
export default UserForm;