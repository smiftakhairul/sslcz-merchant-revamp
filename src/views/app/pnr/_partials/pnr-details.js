import React, {useState, useEffect} from 'react';
import {ReactTableWithPaginationCard} from "../../../../components/table/table";
import apiClient from "services/axios";
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import pnrColumns from '../../../../containers/column-definition/pnr/pnr-details-def';

const PnrDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

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
            await apiClient('getPreviousPNR', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setTransactionSummaryData(response.data.data.previous_pnr?.data || []);
                    setTotalPage(response.data.data.previous_pnr?.last_page || 0);
                    setTotalRows(response.data.data.previous_pnr?.total || 0);
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
                data={transactionSummaryData} 
                columnDefinition={pnrColumns(currentPage, defaultPageSize)}
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
            <CardWrapper
                headerTitle="Previous Record"
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
 
export default PnrDetails;
