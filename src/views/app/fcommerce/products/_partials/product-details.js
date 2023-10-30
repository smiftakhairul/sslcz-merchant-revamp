import { ReactTableWithPaginationCard } from 'components/table/table';
import fcommerceProductListColumns from 'containers/column-definition/fcommerce/product-details-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";

const ProductDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [products, setProducts] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getProducts();
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

    const getProducts = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...props.searchData, ...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getFcommerceProductList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setProducts(response.data.data.products?.data || []);
                    setTotalPage(response.data.data.products?.last_page || 0);
                    setTotalRows(response.data.data.products?.total || 0);
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
                data={products} 
                columnDefinition={fcommerceProductListColumns(currentPage, defaultPageSize, updateModalLarge)}
                defaultPageSize={defaultPageSize} 
                setDefaultPageSize={setDtDefaultPageSize} 
                currentPage={currentPage}
                setCurrentPage={setDtCurrentPage}
                totalPage={totalPage}
                isLoading={isLoading}
            />

            {/* {
                modalType && modalData
                ? (
                    {
                        'UpdateOrderDetails': <UpdateOrderDetails
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                            order={modalData}
                            orders={orders}
                            setProducts={setProducts}
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
                headerTitle="Product List"
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
 
export default ProductDetails;
