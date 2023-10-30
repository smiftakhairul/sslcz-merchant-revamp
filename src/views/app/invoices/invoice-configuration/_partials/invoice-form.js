import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import { additionalMessageFields, pageStructureFields, payFields, storeInfoFields, transactionFields } from "containers/form-fields/invoices/invoice-form-fields";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Form, FormGroup, Row } from "reactstrap";
import apiClient from "services/axios";
import CardWrapper from "../../../../../containers/wrapper/card-wrapper";

const InvoiceForm = (props) => {
    let { id } = useParams();
    let history = useHistory();

    const [storeOptions, setStoreOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingForm, setIsLoadingForm] = useState(false)
    const [invoiceDetails, setInvoiceDetails] =  useState({});

    const [bannerFile, setBannerFile] = useState(null);

    useEffect(() => {
        getInvoiceConfigFormData();
    }, []);

    const getInvoiceConfigFormData = async () => {
        setIsLoading(true);
        await getStores();
        if (props.action === 'UPDATE') {
            await getInvoiceDetails();
        }
        setIsLoading(false);
    }

    const getStores = async () => {
        let params = {};
        let body = {};

        try {
            await apiClient('getStores', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    let preparedStoreOptions = [];
                    if (response.data.data.data) {
                        let apiData = response.data.data.data;
                        for (let i = 0; i < apiData.length; i++) {
                            preparedStoreOptions[i] = {label: apiData[i].strid, value: apiData[i].stid};
                        }
                    }
                    setStoreOptions(preparedStoreOptions);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getInvoiceDetails = async () => {
        let params = {};
        let body = {id: id};

        try {
            await apiClient('getInvoicePaymentLink', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setInvoiceDetails(response.data.data.invoice_payment_links || {});
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    const addInvoiceConfiguration = async (data) => {
        setIsLoadingForm(true);
        let params = {};
        let body = data;

        try {
            await apiClient('addInvoicePaymentLink', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'Invoice configuration successfully created.', 'Success!');
                   // document.getElementById('createForm').reset();
                   history.push('/app/invoice/list');
                } else {
                    NotificationManager.error(response.data.message || 'Invoice configuration couldn\'t be created.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoadingForm(false);
    }

    const updateInvoiceConfiguration = async (data) => {
        setIsLoading(true);
        let params = {};
        let body = data;

        try {
            await apiClient('updateInvoicePaymentLink', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    NotificationManager.success(response.data.message || 'Invoice configuration successfully updated.', 'Success!');
                    // document.getElementById('createForm').reset();
                    history.push('/app/invoice/list');
                } else {
                    NotificationManager.error(response.data.message || 'Invoice configuration couldn\'t be updated.', 'Error!');
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('createForm');
        let formData = prepareFormFields(form);
        // this.props.onSubmitHandler(formData);
        var data = new FormData();
        for (let key in formData) {
            if (key !== 'banner_rul') {
                data.append(key, formData[key]);
            }
        }
        data.append('banner_rul', bannerFile);

        // Field which is not preset
        data.append("cycle", formData.max_cycle);
        data.append("invoice_ref", formData.invoice_ref);
        data.append("cc_ops_email", "dummy@sslwireless.com");
        data.append("amount_list", formData.amount_list || formData.amount);
        data.append("week", "is_sat");
        
        if (props.action === 'ADD') {
            addInvoiceConfiguration(data);
        } else {
            data.append('id', id);
            updateInvoiceConfiguration(data);
        }
    };

    const fileChangeHandler = (e, fieldName) => {
        if (fieldName === 'banner_rul') {
            console.log(e.target.files[0]);
            setBannerFile(e.target.files[0] || null);
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
            {fieldTitle('Store Information','')}
            <FormWrapper
            fields = {storeInfoFields(invoiceDetails || null,storeOptions)}
            />

            {fieldTitle('Pay or Subscription')}
            <FormWrapper
            fields = {payFields(invoiceDetails || null)}
            />

            {fieldTitle('Transaction Information')}
            <FormWrapper
            fields = {transactionFields(invoiceDetails || null)}
            />

            {fieldTitle('Additional Message')}
            <FormWrapper
            fields = {additionalMessageFields(invoiceDetails || null)}
            />

            {fieldTitle('Page Structure')}
            <FormWrapper
            fields = {pageStructureFields(invoiceDetails || null, fileChangeHandler)}
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
                        <FormGroup className="mb-0 text-leftt">
                            <Button type="submit" color="primary" className="mt-2 btn-sm" disabled={isLoadingForm}>
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
                    heading={props.action === 'ADD' ? 'menu.invoice-configuration' : 'menu.invoice-configuration-update'}
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
        </React.Fragment>
    );
}
 
export default InvoiceForm;