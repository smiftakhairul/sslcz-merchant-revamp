import { NotificationManager } from 'components/notifications';
import { categoryInfoFields } from 'containers/form-fields/fcommerce/category-form-fields';
import FormWrapper from 'containers/wrapper/form-wrapper';
import ModalWrapper from 'containers/wrapper/modal-wrapper';
import { prepareFormFields } from 'helpers/form';
import React, { useEffect, useState } from 'react';
import apiClient from 'services/axios';

const CategoryForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    //const [isFormLoading, setIsFormLoading] = useState(false);
    const [parentCategoryOption,setParentCategoryOption] = useState([]);
    
    useEffect(() => {
        getCategories();
    }, []);

    const createCategory = async (data) => {
        setIsLoading(true);
        let body = data;

        try {
            await apiClient('createFcommerceCategory',{},body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.categories) {
                        NotificationManager.success(
                            response.data.message || "New Category added successfully",
                            "Success!"
                        );

                        props.setForceUpdate(!props.forceUpdate);
                        props.toggle();
                    } else {
                        NotificationManager.error(
                            response.data.message || "Something went wrong.",
                            "Error!"
                        );
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    } 

    const updateCategory = async (data) => {
        setIsLoading(true);
        let body = data;

        try {
            await apiClient('updateFcommerceCategory',{},body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.categories) {
                        NotificationManager.success(
                            response.data.message || "Category updated successfully",
                            "Success!"
                        );

                        let categories = props.categories;
                        let category = props.category;

                        category.category_name = response.data.data?.categories?.category_name;
                        category.category_description = response.data.data?.categories?.category_description;
                        category.category_uid = response.data.data?.categories?.category_uid;
                        category.category_slug = response.data.data?.categories?.category_slug;
                        category.parent_id = response.data.data?.categories?.parent_id;
                        category.parent_name = response.data.data?.categories?.parent_name;

                        categories = categories.map(obj => obj.id === category.id ? category : obj);

                        props.setCategories(categories);
                        
                        props.toggle();
                    } else {
                        NotificationManager.error(
                            response.data.message || "Something went wrong.",
                            "Error!"
                        );
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    } 
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        let form = document.getElementById('categoryForm');
        let formData = prepareFormFields(form);

        if(props.action === 'ADD'){
            createCategory(formData);
        }
        else{
            formData.category_uid = props.category.category_uid;
            updateCategory(formData);
        }

    };

    const getCategories = async () => {
        setIsLoading(true);

        try {
            await apiClient('getFcommerceParentCategoryList', {}, {}).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                   setParentCategoryOption(response.data.data?.categories || []);
                }
            });
        } catch (error) {
            console.log(error);
        }

      setIsLoading(false);
    };

    const modalContent = () => {
        return <React.Fragment>
            <FormWrapper fields={categoryInfoFields(props.category || null, parentCategoryOption)}/>
        </React.Fragment>
    };
    return (
        <>
            <ModalWrapper
                isOpen={props.isModalOpen}
                toggle={props.toggle}
                modalTitle={props.action === 'ADD' ? 'Create New Category' : 'Update Category'}
                isLoading={isLoading}
                modalContent={modalContent}
                formEnabled={true}
                onFormSubmit={onFormSubmit}
                formId="categoryForm"
                formSubmitTitle={props.action === 'ADD' ? 'Create' : 'Update'}
            />
        </>
    );
};

export default CategoryForm;