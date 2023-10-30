import React, {useState, useEffect} from 'react';
import {ReactTableWithPaginationCard} from "../../../../components/table/table";
import apiClient from "services/axios";
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import recurringListColumns from '../../../../containers/column-definition/recurring/details-def';
import RecurringDetail from '../_modals/recurring-detail';

const RecurringDetails = (props) => {
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
            await apiClient('getRecurringPaymentLinkList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setTransactionSummaryData(response.data.data.recurring_payment_links?.data || []);
                    setTotalPage(response.data.data.recurring_payment_links?.last_page || 0);
                    setTotalRows(response.data.data.recurring_payment_links?.total || 0);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
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
                columnDefinition={recurringListColumns(currentPage, defaultPageSize, updateModalLarge)}
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
                        'RecurringDetail': <RecurringDetail
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
                headerTitle="Recurring List"
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
 
export default RecurringDetails;
