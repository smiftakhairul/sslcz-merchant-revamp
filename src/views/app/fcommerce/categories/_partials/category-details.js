import { ReactTableWithPaginationCard } from 'components/table/table';
import fcommerceCategoryListColumns from 'containers/column-definition/fcommerce/category-details-def';
import CardWrapper from 'containers/wrapper/card-wrapper';
import React, { useEffect, useState } from 'react';
import apiClient from "services/axios";
import CategoryForm from '../_modals/category-form';

const CategoryDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const [categories, setCategories] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    
    useEffect(() => {
        getCategories();
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

    const getCategories = async () => {
        setIsLoading(true);
        let params = {page: currentPage};
        let body = {...{per_page: defaultPageSize}};
        
        try {
            await apiClient('getFcommerceCategoryList', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    setCategories(response.data.data.categories?.data || []);
                    setTotalPage(response.data.data.categories?.last_page || 0);
                    setTotalRows(response.data.data.categories?.total || 0);
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
                data={categories} 
                columnDefinition={fcommerceCategoryListColumns(currentPage, defaultPageSize, updateModalLarge)}
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
                        'UpdateCategory': <CategoryForm
                            action='UPDATE'
                            isModalOpen={isModalOpen} 
                            toggle={updateModalLarge} 
                            category={modalData}
                            categories={categories}
                            setCategories={setCategories}
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
                headerTitle="Category List"
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
 
export default CategoryDetails;
