import { NotificationManager } from "components/notifications";
import { ReactTableWithPaginationCard } from "components/table/table";
import fcommerceOrderDetailsCartColumns from "containers/column-definition/fcommerce/order-details-cart-def";
import { orderInfoFormFields } from "containers/form-fields/fcommerce/order-details-form-fields";
import CardWrapper from "containers/wrapper/card-wrapper";
import FormWrapper from "containers/wrapper/form-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";

const UpdateOrderDetails = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [order, setOrder] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getOrderDetails();
    }, []);

    const getOrderDetails = async () => {
        setIsLoading(true);
        let body = {order_tracking_id: props.order?.order_tracking_id};
        
        try {
            await apiClient('getFcommerceOrder', {}, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setOrder(response.data.data.order || []);
                    let cartInfo = response.data.data.order?.cart_info || [];

                    let shipSumRow = cartInfo.reduce((acm, item) => {
                        Object.keys(item).forEach((key) => {
                          if (key === "amount") {
                            acm[key] = "Shipping Amount";
                          } else if (key === "quantity_amount") {
                            acm[key] = response.data.data.order?.shipping_charge;
                          } else {
                            acm[key] = null;
                          }
                        });
            
                        return acm;
                    }, {});
                    let totalSumRow = cartInfo.reduce((acm, item) => {
                        Object.keys(item).forEach((key) => {
                          if (key === "amount") {
                            acm[key] = "Total Amount";
                          } else if (key === "quantity_amount") {
                            acm[key] = response.data.data.order?.shipping_charge;
                          } else {
                            acm[key] = null;
                          }
                        });
            
                        return acm;
                    }, {});

                    if (cartInfo.length) {
                        cartInfo.push(shipSumRow);
                        cartInfo.push(totalSumRow);
                    }

                    setCart(cartInfo);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const editOrderDetails = async (e) => {
        e.preventDefault();
        let form = document.getElementById("editOrderDetailsForm");
        let formData = prepareFormFields(form);

        setIsLoading(true);
        try {
            await apiClient("updateFcommerceOrder", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.order) {
                        NotificationManager.success(
                            response.data.message || "Order details successfully updated.",
                            "Success!"
                        );

                        let orders = props.orders;
                        let pOrder = props.order;
                        pOrder.order_status = response.data.data.order?.order_status;

                        orders = orders.map((obj) =>
                            obj.order_tracking_id === pOrder.order_tracking_id ? pOrder : obj
                        );
                        props.setOrders(orders);

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
        return <React.Fragment>
            <p className="mb-0">
                <span className="text-muted display-7">
                    {props.order?.order_tracking_id || ""}
                </span>
            </p>
        </React.Fragment>;
    };

    const modalContent = () => {
        return <React.Fragment>
            <Row>
                <Colxx md="12">
                    <CardWrapper
                        headerTitle="Order Information"
                        toggleOn={false}
                        isOpen={true}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        bodyContent={() => 
                            <FormWrapper
                                fields={orderInfoFormFields(order || null)}
                            />
                        }
                    />
                </Colxx>
                <Colxx md="12">
                    <CardWrapper
                        headerTitle="Shipping Information"
                        toggleOn={false}
                        isOpen={true}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        bodyContent={() => 
                            <Row>
                                <Colxx md="6">
                                    <div className="list-group transaction-list">
                                        {listGroupItem('Customer Full Name', order?.shipping_info?.customer_first_name + ' ' + order?.shipping_info?.customer_last_name)}
                                        {listGroupItem('Customer Mobile', order?.shipping_info?.customer_mobile)}
                                        {listGroupItem('Alternate Mobile', order?.shipping_info?.customer_alternate_mobile)}
                                        {listGroupItem('Customer Email', order?.shipping_info?.customer_email)}
                                    </div>
                                </Colxx>
                                <Colxx md="6">
                                    <div className="list-group transaction-list">
                                        {listGroupItem('Customer Address', order?.shipping_info?.customer_address)}
                                        {listGroupItem('Customer City', order?.shipping_info?.customer_city)}
                                        {listGroupItem('Alternate Area', order?.shipping_info?.customer_area)}
                                        {listGroupItem('Customer Post Code', order?.shipping_info?.customer_post_code)}
                                    </div>
                                </Colxx>
                            </Row>
                        }
                    />
                </Colxx>
                <Colxx md="12">
                    <CardWrapper
                        headerTitle="Cart Information"
                        toggleOn={false}
                        isOpen={true}
                        isDefaultHeader={true}
                        footerEnabled={false}
                        bodyContent={() => 
                            <ReactTableWithPaginationCard
                                data={cart}
                                columnDefinition={fcommerceOrderDetailsCartColumns}
                                defaultPageSize={order?.cart_info?.length || 0}
                                serverSide={false}
                                disableSearch={false}
                                showPagination={false}
                                getRowProps={(row) =>
                                    (row.original?.amount === "Shipping Amount" || row.original?.amount === "Total Amount")
                                        ? { style: { fontWeight: "bold" } }
                                        : {}
                                }
                            />
                        }
                    />
                </Colxx>
            </Row>
        </React.Fragment>;
    };

    return (
        <React.Fragment>
        <ModalWrapper
            isOpen={props.isOpen}
            toggle={props.toggle}
            modalTitle="Edit Order Details"
            isLoading={isLoading}
            modalHeaderContent={modalHeaderContent}
            modalContent={modalContent}
            formEnabled={true}
            onFormSubmit={editOrderDetails}
            formId="editOrderDetailsForm"
            // formSubmitTitle="Edit"
        />
        </React.Fragment>
    );
};

export default UpdateOrderDetails;
