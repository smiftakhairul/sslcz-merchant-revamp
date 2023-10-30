import { ReactTableWithPaginationCard } from 'components/table/table';
import fcommerceBrandListColumns from 'containers/column-definition/fcommerce/brand-details-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";
import BrandForm from '../_modals/brand-form';

const BrandDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [brands, setBrands] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getBrands();
    }, [currentPage, defaultPageSize,props.forceUpdate]);

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
    }, []);

    const getBrands = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getFcommerceBrandList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setBrands(response.data.data.brands?.data || []);
                    setTotalPage(response.data.data.brands?.last_page || 0);
                    setTotalRows(response.data.data.brands?.total || 0);
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
                data={brands} 
                columnDefinition={fcommerceBrandListColumns(currentPage, defaultPageSize, updateModalLarge)}
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
                        'UpdateBrand': <BrandForm
                            action='UPDATE'
                            isModalOpen={isModalOpen} 
                            toggle={updateModalLarge} 
                            brand={modalData}
                            brands={brands}
                            setBrands={setBrands}
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
                headerTitle="Brand List"
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
 
export default BrandDetails;
