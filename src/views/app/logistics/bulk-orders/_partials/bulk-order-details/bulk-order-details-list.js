import { ReactTableWithPaginationCard } from 'components/table/table';
import bulkOrderDetailsListColumns from 'containers/column-definition/logistics/bulk-order-details-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from 'reactstrap';
import apiClient from "services/axios";

const BulkOrderDetailsList = (props) => {
    let { bulkId } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [modalType, setModalType] = useState(null);
    // const [modalData, setModalData] = useState(null);

    const [orders, setOrders] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getOrders();
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

    const getOrders = async () => {
        setIsLoading(true);
        let params = {page: currentPage, per_page: defaultPageSize};
        let body = {...props.searchData, ...{bulk_id: bulkId}};
        
        try {
            await apiClient('getBulkOrderDetails', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setOrders(response.data.data.bulkOrders?.data || []);
                    setTotalPage(response.data.data.bulkOrders?.last_page || 0);
                    setTotalRows(response.data.data.bulkOrders?.total || 0);
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    // const updateModalLarge = (data = {}, type) => {
    //     setIsModalOpen(!isModalOpen);
    //     setModalType(type);
    //     setModalData(modalData ? null : data);
     
    // };

    const bodyContent = () => {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <h5><Badge color="info" pill>Bulk ID - {bulkId}</Badge></h5>
                </div>
            </div>
            <ReactTableWithPaginationCard 
                data={orders} 
                // columnDefinition={userListColumns(currentPage, defaultPageSize, updateModalLarge)}
                columnDefinition={bulkOrderDetailsListColumns(currentPage, defaultPageSize)}
                defaultPageSize={defaultPageSize} 
                setDefaultPageSize={setDtDefaultPageSize} 
                currentPage={currentPage}
                setCurrentPage={setDtCurrentPage}
                totalPage={totalPage}
                isLoading={isLoading}
                // showPageJump={false}
                showPageSizeOptions={false}
            />

            {/* {
                modalType && modalData
                ? (
                    {
                        'UserDetail': <UserDetail
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            transaction={modalData}
                        />
                    }[modalType] || ''
                )
                : ''
            } */}
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Bulk Order Details"
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
 
export default BulkOrderDetailsList;
