import React, {useState, useEffect} from 'react';
import apiClient from "services/axios";
import unsettledSummaryColumns from '../../../../containers/column-definition/accounting/unsettled-summary-def';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import { ReactTableWithPaginationCard } from '../../../../components/table/table';

const UnsettlementSummary = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [transactionSummaryData, setTransactionSummaryData] = useState([]);
    const [totalRows, setTotalRows] = useState(0);

    useEffect(() => {
        getTransactionSummary();
    }, [props.searchData]);
    
    const getTransactionSummary = async () => {
        setIsLoading(true);
        let params = {};
        let body = props.searchData;

        try {
            await apiClient('storeWiseUnsettledAmountSummaryReport', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    let summary = response.data.data.transaction_details || [];
                    setTotalRows(summary.length || 0);
                    
                    let sumRow = summary.reduce((acm, item) => {
                        Object.keys(item).forEach(key => {
                            if (key === 'strid') {
                                acm[key] = 'Total';
                            }
                            else if (key === 'no_of_trans' || key === 'no_of_refund' || key === 'no_of_chargeback') {
                                acm[key] = parseInt(acm[key] || 0) + parseInt(item[key] || 0);
                            }
                            else if (key === 'trans_amt' || key === 'payable_amt' || key === 'refund_settled_amt' || key === 'chargeback_settled_amt' || key === 'total_payable') {
                                acm[key] = parseFloat(acm[key] || 0) + parseFloat(item[key] || 0);
                            }
                            // else if (key === 't_currency') {
                            //     acm[key] = '-'
                            // }
                            else {
                                acm[key] = null;
                            }
                        });

                        return acm;
                    }, {});
                    
                    if (summary.length) summary.push(sumRow);
                    setTransactionSummaryData(summary || []);
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
                columnDefinition={unsettledSummaryColumns}
                defaultPageSize={transactionSummaryData.length} 
                serverSide={false}
                disableSearch={false}
                showPagination={false}
                getRowProps={
                    row => row.original?.strid === 'Total'
                        ? {style: {fontWeight: 'bold'}, className: 'table-total-row'}
                        : {}
                }
            />
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Store Wise Unsettled Amount Summary"
                toggleOn={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={isLoading}
                bodyContent={bodyContent}
                totalRows={totalRows}
            />
        </div>
    );
}
 
export default UnsettlementSummary;
