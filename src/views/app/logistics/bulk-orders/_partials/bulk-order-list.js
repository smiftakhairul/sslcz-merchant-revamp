import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../components/table/table";
import bulkOrderListColumns from "../../../../../containers/column-definition/logistics/bulk-order-list-def";
import CardWrapper from '../../../../../containers/wrapper/card-wrapper';

const BulkOrderList = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);

    const [bulkOrders, setBulkOrders] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getBulkOrders();
    }, [props.searchData]);

    const getBulkOrders = async () => {
        setIsLoading(true);
        let body = {...props.searchData, ...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getBulkOrders', {}, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setBulkOrders(response.data.data.bulkOrders || []);
                    setTotalRows(response.data.data.bulkOrders.length || 0);
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
                data={bulkOrders} 
                columnDefinition={bulkOrderListColumns}
                defaultPageSize={defaultPageSize} 
                serverSide={false}
                showPagination={true}
            />
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Bulk Order List"
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
 
export default BulkOrderList;
