import { createInvoiceBtnFields } from "containers/form-fields/invoices/invoice-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
    Button
} from "reactstrap";
import apiClient from "services/axios";
import ModalWrapper from "../../../../../containers/wrapper/modal-wrapper";

const CreateInvoiceBtn = (props) => {
    let history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [invoiceOptions, setInvoiceOptions] = useState([]);

    useEffect(() => {
        getCreateInvoiceTemplateData();
    }, []);

    const getCreateInvoiceTemplateData = async () => {
        setIsLoading(true);
        let params = {};

        try {
            await apiClient('createInvoiceTemplate', params).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    let fields = [];
                    let invData = response.data.data.invoice_template || [];
                    
                    for (let i = 0; i < invData.length; i++) {
                        fields[i] = {
                            label: invData[i]?.strid + ' - ' + invData[i]?.refe_id,
                            value: invData[i]?.strid + '-' + invData[i]?.refe_id + '-' + invData[i]?.id,
                        }
                    }

                    setInvoiceOptions(fields);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const updateModalLarge = () => {
        setIsModalOpen(!isModalOpen);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('invoiceConfigurationForm');
        let formData = prepareFormFields(form);
        if (formData.configure_url) {
            history.push('/app/invoice/create/' + formData.configure_url);
        }
    };

    const modalContent = () => {
        return <React.Fragment>
            <FormWrapper
                fields={createInvoiceBtnFields(invoiceOptions)}
            />
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <Button className="btn-primary btn-xs" onClick={updateModalLarge}>
                <i className="iconsminds-add"></i> Create Invoice
            </Button>

            <ModalWrapper
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                modalTitle="Choose a Invoice Configuration"
                isLoading={isLoading}
                modalContent={modalContent}
                formEnabled={true}
                onFormSubmit={onFormSubmit}
                formId="invoiceConfigurationForm"
                formSubmitTitle="Proceed"
            />
        </React.Fragment>
    );
}
 
export default CreateInvoiceBtn;
