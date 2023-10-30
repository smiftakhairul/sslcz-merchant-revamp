import { NotificationManager } from 'components/notifications';
import { brandInfoFields } from 'containers/form-fields/fcommerce/brand-form-fields';
import FormWrapper from 'containers/wrapper/form-wrapper';
import ModalWrapper from 'containers/wrapper/modal-wrapper';
import { prepareFormFields } from 'helpers/form';
import React, { useState } from 'react';
import apiClient from 'services/axios';

const BrandForm = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const createBrand = async (data) => {
        setIsLoading(true);
        let body = data;

        try {
            await apiClient('createFcommerceBrand',{},body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.brand) {
                        NotificationManager.success(
                            response.data.message || "New Brand added successfully",
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

    const updateBrand = async (data) => {
        setIsLoading(true);
        let body = data;

        try {
            await apiClient('updateFcommerceBrand',{},body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.brand) {
                        NotificationManager.success(
                            response.data.message || "Brand updated successfully",
                            "Success!"
                        );

                        let brands = props.brands;
                        let brand = props.brand;

                        brand.brand_name = response.data.data?.brand?.brand_name;
                        brand.brand_code = response.data.data?.brand?.brand_code;
                        brand.brand_uid = response.data.data?.brand?.brand_uid;
                        brand.brand_slug = response.data.data?.brand?.brand_slug;
                        brand.is_active = response.data.data?.brand?.is_active;
                        

                        brands = brands.map(obj => obj.id === brand.id ? brand : obj);

                        props.setBrands(brands);
                        
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
        let form = document.getElementById('brandForm');
        let formData = prepareFormFields(form);

        if(props.action === 'ADD'){
            createBrand(formData);
        }
        else{
            formData.brand_uid = props.brand.brand_uid;
            updateBrand(formData);
        }

    };

    const modalContent = () => {
        return <React.Fragment>
            <FormWrapper fields={brandInfoFields(props.brand || null)}/>
        </React.Fragment>
    };
    return (
        <>
            <ModalWrapper
                isOpen={props.isModalOpen}
                toggle={props.toggle}
                modalTitle={props.action === 'ADD' ? 'Create New Brand' : 'Update Brand'}
                isLoading={isLoading}
                modalContent={modalContent}
                formEnabled={true}
                onFormSubmit={onFormSubmit}
                formId="brandForm"
                formSubmitTitle={props.action === 'ADD' ? 'Create' : 'Update'}
            />
        </>
    );
};

export default BrandForm;