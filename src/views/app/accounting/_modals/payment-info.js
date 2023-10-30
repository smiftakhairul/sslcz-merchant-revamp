import React, { useEffect, useState } from "react";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "components/table/table";
import accountingPaymentInfoColumns from "containers/column-definition/accounting/payment-info-def";

const PaymentInfo = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        setIsLoading(true);
        let body = { m_sett_id: props.transaction?.m_sett_id };

        try {
            await apiClient('settlementReportPaymentInfo', {}, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setData(response.data.data.report_payment_info || []);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const modalContent = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={data} 
                columnDefinition={accountingPaymentInfoColumns}
                defaultPageSize={data.length} 
                serverSide={false}
                disableSearch={false}
                showPagination={false}
            />
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <ModalWrapper
                isOpen={props.isOpen}
                toggle={props.toggle}
                modalTitle="Payment Information"
                isLoading={isLoading}
                modalContent={modalContent}
            />
        </React.Fragment>
    );
}
 
export default PaymentInfo;
