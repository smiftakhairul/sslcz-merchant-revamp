import { NotificationManager } from 'components/notifications';
import { ReactTableWithPaginationCard } from 'components/table/table';
import refundDeliveryColumns from 'containers/column-definition/refund/delivery-details-def';
import refundHistoryColumns from 'containers/column-definition/refund/refund-history-def';
import { refundInitiationFields } from 'containers/form-fields/refund-request/new-refund-request-form-fields';
import BreadcrumbWrapper from 'containers/wrapper/breadcrumb-wrapper';
import CardWrapper from 'containers/wrapper/card-wrapper';
import FormWrapper from 'containers/wrapper/form-wrapper';
import StatsCardWrapper from 'containers/wrapper/stats-card-wrapper';
import { getParseFloat, listGroupItem } from 'helpers/common';
import { prepareFormFields } from 'helpers/form';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    FormText,
    Row
} from "reactstrap";
import apiClient from 'services/axios';
import { Colxx } from "../../../components/bootstrap/custom-bootstrap";

const JumbotronUi = (props) => {
    let { tid } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingForm, setIsLoadingForm] = useState(false);
    const [balance, setBalance] = useState(0);
    const [transaction, setTransaction] = useState({});
    const [deliveries, setDeliveries] = useState([]);
    const [refunds, setRefunds] = useState([]);

    useEffect(() => {
        getTransaction();
    }, []);
    
    const getTransaction = async () => {
        setIsLoading(true);
        let body = {tid: tid};
        try {
            await apiClient("getMerchantRefund", {}, body).then(
                (response) => {
                    if (response.data.code === 200 || response.data.status === "SUCCESS") {
                        setBalance(response.data.data?.available_balance || 0);
                        setTransaction(response.data.data?.transaction || {});
                        setDeliveries(response.data.data?.delivery || []);
                        setRefunds(response.data.data?.refund || []);
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('createRefundForm');
        let formData = prepareFormFields(form);
        createRefundRequest(formData);
    };

    const createRefundRequest = async (formData) => {
        setIsLoadingForm(true);
        let body = formData;
        body.tid = tid;
        try {
            await apiClient("createMerchantRefundRequest", {}, body).then(
                (response) => {
                    if (response.data.code === 200 || response.data.status === "SUCCESS") {
                        if (response.data.data?.success) {
                            history.push('/app/refund/request');
                        }
                    } else {
                        NotificationManager.error(response.data.message || 'Refund request creation failed, please try again.', 'Error!');
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
        setIsLoadingForm(false);
    };

    const bodyContent = () => {
        return <React.Fragment>
            <Row className="px-2">
                <Colxx md="3">
                    <div className="icon-cards-row icon-rows mt-0">
                        <StatsCardWrapper
                            title="Available Balance"
                            icon="iconsminds-wallet"
                            data={`BDT ${getParseFloat(balance || 0)}`}
                            isLoading={isLoading}
                        />
                    </div>
                </Colxx>
                <Colxx md="9">
                    <Row>
                        <Colxx md="6">
                            <CardWrapper
                                headerDisabled={true}
                                toggleOn={false}
                                bodyContent={() => 
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list-group transaction-list">
                                                {listGroupItem('Merchant Name', transaction?.company_name)}
                                                {listGroupItem('Store Name', transaction?.store_name)}
                                                {listGroupItem('Store ID & URL', transaction?.strid + (transaction?.store_url ? " - " : "") + transaction?.store_url)}
                                                {listGroupItem('Bank Name', transaction?.cardtype)}
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </Colxx>
                        <Colxx md="6">
                            <CardWrapper
                                headerDisabled={true}
                                toggleOn={false}
                                bodyContent={() => 
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="list-group transaction-list">
                                                {listGroupItem('Transaction ID', transaction?.mtxnid)}
                                                {listGroupItem('Transaction Time', transaction?.incommingtime
                                                    ? moment(
                                                        transaction?.incommingtime,
                                                        "YYYY-MM-DD hh:mm:ss"
                                                    )
                                                        .format("DD-MM-YYYY hh:mm A")
                                                        .toString()
                                                    : ""
                                                )}
                                                {listGroupItem('Transaction Amount', getParseFloat(transaction?.mamount || 0))}
                                                {listGroupItem('Refund Reference ID', transaction?.refund_ref_id)}
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                        </Colxx>
                    </Row>
                </Colxx>
            </Row>
        </React.Fragment>
    };

    const bodyContent2 = () => {
        return <React.Fragment>
            <Form onSubmit={handleSubmit} id="createRefundForm" name="createRefundForm">
                <FormWrapper
                    fields={refundInitiationFields()}
                />
                <Row>
                    <div className="col-md-12">
                        <FormGroup>
                            <Button color="primary" type="submit"  className="mt-2 btn-sm" disabled={isLoadingForm}>
                                <span>Proceed</span>
                            </Button>
                        </FormGroup>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-12">
                        <FormGroup>
                            <FormText color="default">
                                <ul className="bg-warning text-black py-2 pr-2 pl-4">
                                    {transaction?.bid === 8 && <li><b>Note</b>: <span className="">bKash refund charge is applicable on customer's refund amount.</span></li>}
                                    <li><b>Note</b>: <span className="">After your confirmation, the refunded Amount will be debited from your account and customer account will be credited.</span></li>
                                </ul>
                            </FormText>
                        </FormGroup>
                    </div>
                </Row>
            </Form>
        </React.Fragment>
    };

    const bodyContent3 = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={deliveries} 
                columnDefinition={refundDeliveryColumns}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
            />
        </React.Fragment>
    };

    const bodyContent4 = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={refunds} 
                columnDefinition={refundHistoryColumns}
                defaultPageSize={10} 
                serverSide={false}
                disableSearch={false}
            />
        </React.Fragment>
    };

    return (
        <Fragment>
            <Row>
                <BreadcrumbWrapper
                    heading="menu.new-refund-request"
                    match={props.match}
                />
            </Row>
            <Row>
                <Colxx md="12" xxs="12">
                    <CardWrapper
                        headerTitle="Transaction Information"
                        toggleOn={true}
                        isOpen={true}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        isLoading={isLoading}
                        bodyContent={bodyContent}
                    />
                </Colxx>
            </Row>
            <Row className="">
                <Colxx md="12" xxs="12">
                    <CardWrapper
                        headerTitle="Refund Initiation"
                        toggleOn={true}
                        isOpen={true}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        isLoading={isLoading}
                        bodyContent={bodyContent2}
                    />
                </Colxx>
            </Row>
            <Row className="">
                <Colxx md="12" xxs="12">
                    <CardWrapper
                        headerTitle="Previous History of Delivery"
                        toggleOn={true}
                        isOpen={false}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        isLoading={isLoading}
                        bodyContent={bodyContent3}
                    />
                </Colxx>
            </Row>
            <Row className="">
                <Colxx md="12" xxs="12">
                    <CardWrapper
                        headerTitle="Previous History of Transaction"
                        toggleOn={true}
                        isOpen={false}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        isLoading={isLoading}
                        bodyContent={bodyContent4}
                    />
                </Colxx>
            </Row>
        </Fragment>
    );
}

export default JumbotronUi;
