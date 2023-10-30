import React, {useState, useEffect} from 'react';
import {ReactTableWithPaginationCard} from "../../../../components/table/table";
import apiClient from "services/axios";
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import amendTrxColumns from '../../../../containers/column-definition/pnr/amend-transactions-def';
import EditPnr from './edit-pnr';

const Transaction = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [data, setData] = useState({});
    const [transactions, setTransactions] = useState([]);
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
            await apiClient('getTransactionAmend', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setData(response.data.data?.transaction || {});
                    setTransactions(response.data.data?.previous_history?.data || []);
                    setTotalPage(response.data.data?.previous_history?.last_page || 0);
                    setTotalRows(response.data.data?.previous_history?.total || 0);
                }
            });
        } catch (error) {
            console.log(error);
        }
        
        setIsLoading(false);
    };

    const bodyContent = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={transactions} 
                columnDefinition={amendTrxColumns(currentPage, defaultPageSize)}
                defaultPageSize={defaultPageSize} 
                setDefaultPageSize={setDtDefaultPageSize} 
                currentPage={currentPage}
                setCurrentPage={setDtCurrentPage}
                totalPage={totalPage}
                isLoading={isLoading}
            />
        </React.Fragment>
    };

    return (
        <div className="">
            <div className="">
                <EditPnr
                    data={data}
                    isLoading={isLoading}
                />
            </div>
            <div className="">
                <CardWrapper
                    headerTitle="Previous History of Transaction"
                    toggleOn={true}
                    isOpen={true}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={isLoading}
                    bodyContent={bodyContent}
                    totalRows={totalRows}
                />
            </div>
        </div>
    );
}
 
export default Transaction;
