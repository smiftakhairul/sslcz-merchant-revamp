import { NotificationManager } from 'components/notifications';
import { otherChargesFields, othersFields, productInvoiceFields } from 'containers/form-fields/invoices/invoice-form-fields';
import BreadcrumbWrapper from 'containers/wrapper/breadcrumb-wrapper';
import FormWrapper from 'containers/wrapper/form-wrapper';
import { prepareFormFields } from 'helpers/form';
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Button, Form,
    FormGroup, Row
} from "reactstrap";
import apiClient from 'services/axios';
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";
import CardWrapper from '../../../../../containers/wrapper/card-wrapper';
import CreateInvoice from '../_modals/create-invoice';
import ProductItemFields from './product-items-field';

const CreateInvoiceForm = (props) => {
    let { slug } = useParams();
    let strid = slug ? slug.split('-')[0] || '' : '';
    let refId = slug ? slug.split('-')[1] || '' : '';
    let id = slug ? slug.split('-')[2] || '' : '';

    let [productItemIndex, setProductItemIndex] = useState([{index: 0, show: true}]);
    const [isLoading,setIsLoading] = useState(false);
    const [isFormLoading,setIsFormLoading] = useState(false);
    const [invoice,setInvoice] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    useEffect(()=>{
        getInvoiceDetails();
    },[])

    const getInvoiceDetails = async () => {
        setIsLoading(true)
        let params = {id: id}
        try {
            await apiClient('getInvoiceDetails', params).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setInvoice(response.data.data.invoiceDetails);
                }
            }); 
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    const addProductItem = () => {
        setProductItemIndex((prevState) => {
            const list = [...prevState];
            list.push({index: list.length, show: true});
            return list;
        });
    };

    const removeItem = (index) => {
        setProductItemIndex((prevState) => {
            const list = [...prevState];
            for (let i = 0; i < list.length; i++) {
                if (index === list[i].index) {
                    list[i].show = false;
                }
            }
            return list;
        });
    };

    const updateModalLarge = (data = {}, type) => {
        setIsModalOpen(!isModalOpen);
        setModalType(type);
        setModalData(modalData ? null : data);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('createInvoiceForm');
        let formData = prepareFormFields(form);
        // createInvoice(formData);
        let convertAmount = formData.total_amount.map(amount => parseFloat(amount));
        let initialTotalAmount = 0;

        let totalAmount = convertAmount.reduce((previousValue, currentValue) => previousValue + currentValue, initialTotalAmount);
        if(formData.discount_amount>totalAmount) {
            NotificationManager.error('Discount Amount Can not be greater than total Amount', 'Error!');
        }else{
            updateModalLarge(formData,"CreateInvoice");
        }    
    };

    const sectionTitle = (title, marginTop='mt-4') => {
        return(
          <>
            <Row>
              <Colxx md='12'>
                <h5 className = {`${marginTop} mb-2`} >{title}</h5>
                <hr />
              </Colxx>
            </Row>
          </>
        )
      }

    const bodyContent = () => {
        return <React.Fragment>
            <Form onSubmit={handleSubmit} id="createInvoiceForm" name="createInvoiceForm">
                <Row>
                    <div className="col-md-12">
                        {sectionTitle(`Service / Product Invoice (Invoice# ${strid} [${refId}]`,'')}
                        <FormWrapper fields={productInvoiceFields(invoice || null)}/>               
                        {sectionTitle('Enter the service / Products items you wish to bill')}
                        {
                            productItemIndex.map((item, index) => {
                                if (item.show) {
                                    return <ProductItemFields 
                                        key={index} 
                                        index={item.index} 
                                        addProductItem={addProductItem}
                                        removeItem={removeItem}
                                    />
                                }
                            })
                        }
                        {sectionTitle('Other Charges')}
                        <FormWrapper fields={otherChargesFields()}/>
                        {sectionTitle('Others')}
                        <FormWrapper fields={othersFields()}/>
                    </div>
                </Row>
                
                <Row>
                    <div className="col-md-12 text-left">
                        <FormGroup className="mb-0">
                            <Button disabled={isFormLoading} color="primary"  type="submit" className="mt-2 btn-sm">
                                <span>Create</span>
                            </Button>
                        </FormGroup>
                    </div>
                </Row>
            </Form>

            {modalType && modalData
          ? {
                CreateInvoice: (
                <CreateInvoice
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  invoiceData={invoice}
                  invoiceFormData={modalData}
                  id={id}
                  setProductItemIndex={setProductItemIndex}
                />
              ),
            }[modalType] || ""
          : ""}
        </React.Fragment>
    };

    return (
        <Fragment>
            <Row>
                <BreadcrumbWrapper
                    heading="menu.createinvoice"
                    match={props.match}
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
        </Fragment>
    );
}

export default CreateInvoiceForm;
