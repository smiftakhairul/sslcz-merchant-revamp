import React, {useState, useEffect} from 'react';
import {ReactTableWithPaginationCard} from "../../../../components/table/table";
import apiClient from "services/axios";
import settledSummaryColumns from '../../../../containers/column-definition/accounting/settled-summary-def';
import PaymentInfo from '../_modals/payment-info';
import TrxSummary from '../_modals/trx-summary';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';

const SettlementSummary = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [transactionSummaryData, setTransactionSummaryData] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getTransactionSummary();
    }, [currentPage, defaultPageSize, props.searchData]);

    const setDtCurrentPage = (page) => {
        setCurrentPage(page);
    };
    const setDtDefaultPageSize = (size) => {
        setCurrentPage(1);
        setDefaultPageSize(size);
    };

    useEffect(() => {
        setDefaultPageSize(defaultPageSize);
        setCurrentPage(1);
        setTotalPage(0);
    }, [props.searchData]);

    const getTransactionSummary = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...props.searchData, ...{per_page: defaultPageSize}};

        try {
            await apiClient('settlementSummaryReport', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setTransactionSummaryData(response.data.data.transaction_details?.data || []);
                    setTotalPage(response.data.data.transaction_details?.last_page || 0);
                    setTotalRows(response.data.data.transaction_details?.total || 0);
                }
            });
        } catch (error) {
            console.log(error);
        }
        
        setIsLoading(false);
    };

    const downloadCsvHandler = (transaction) => {
        let params = { download: true };
        let body = { m_sett_id: transaction?.m_sett_id };

        try {
            apiClient('settlementReportTransactionSummaryInfo', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    let url = response.data.data.download_path || "#.";
                    window.location.href = url;
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    const updateModalLarge = (data = {}, type) => {
        setIsModalOpen(!isModalOpen);
        setModalType(type);
        setModalData(modalData ? null : data);
    };

    const bodyContent = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={transactionSummaryData} 
                columnDefinition={settledSummaryColumns(
                    currentPage, defaultPageSize, updateModalLarge, downloadCsvHandler
                )}
                defaultPageSize={defaultPageSize} 
                setDefaultPageSize={setDtDefaultPageSize} 
                currentPage={currentPage}
                setCurrentPage={setDtCurrentPage}
                totalPage={totalPage}
                isLoading={isLoading}
            />

            {
                modalType && modalData
                ? (
                    {
                        'PaymentInfo': <PaymentInfo
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            transaction={modalData}
                        />,
                        'TrxSummary': <TrxSummary
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            transaction={modalData}
                        />
                    }[modalType] || ''
                )
                : ''
            }
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Settlement Summary"
                toggleOn={true}
                isOpen={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={isLoading}
                bodyContent={bodyContent}
                totalRows={totalRows}
            />
        </div>
    );
}
 
export default SettlementSummary;
