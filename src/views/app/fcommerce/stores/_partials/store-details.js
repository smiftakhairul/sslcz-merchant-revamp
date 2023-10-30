import { ReactTableWithPaginationCard } from 'components/table/table';
import fcommerceStoreListColumns from 'containers/column-definition/fcommerce/store-details-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";
import StoreDetail from '../_modals/store-detail';

const StoreDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [stores, setStores] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getStores();
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

    const getStores = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...props.searchData, ...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getFcommerceStoreList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setStores(response.data.data.stores?.data || []);
                    setTotalPage(response.data.data.stores?.last_page || 0);
                    setTotalRows(response.data.data.stores?.total || 0);
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
                data={stores} 
                columnDefinition={fcommerceStoreListColumns(currentPage, defaultPageSize, updateModalLarge)}
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
                        'StoreDetail': <StoreDetail
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            store={modalData}
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
                headerTitle="Store List"
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
 
export default StoreDetails;
