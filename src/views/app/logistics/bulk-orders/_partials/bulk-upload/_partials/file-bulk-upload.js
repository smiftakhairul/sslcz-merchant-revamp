import { bulkUploadFormFields } from 'containers/form-fields/logistics/bulk-upload-form-fields';
import CardWrapper from 'containers/wrapper/card-wrapper';
import FormWrapper from 'containers/wrapper/form-wrapper';
import React, { useState } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Row } from 'reactstrap';
import apiClient from 'services/axios';
import AvailablePackages from '../_modals/available-packages';
import BulkOrderUploadInstructions from '../_modals/bulk-order-upload-instructions';

const FileBulkUpload = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [bulkUploadFile, setBulkUploadFile] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const updateModalLarge = (data = {}, type) => {
        setIsModalOpen(!isModalOpen);
        setModalType(type);
        setModalData(modalData ? null : data);
    };

    const fileChangeHandler = (e, fieldName) => {
        if (fieldName === 'bulk_order') {
            console.log(e.target.files[0]);
            setBulkUploadFile(e.target.files[0] || null);
        }
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        // let form = document.getElementById('createForm');
        // let formData = prepareFormFields(form);
        let formData = new FormData();
        formData.append('bulk_order', bulkUploadFile);
        uploadBulkOrder(formData)
    };

    const uploadBulkOrder = async (data) => {
        setIsLoading(true);
        let params = {};
        let body = data;

        try {
            await apiClient('logisticsBulkOrderUpload', params, body).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    // 
                }
            });
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const bodyContent = () => {
        return <React.Fragment>
            <Form onSubmit={onFormSubmit} id="createForm">
                <Row>
                    <div className="col-md-4">
                        <FormWrapper
                            fields={bulkUploadFormFields(null, fileChangeHandler)}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="mt-4">
                            <ButtonGroup>
                                <Button
                                    className="btn-warning btn-xs mr-1"
                                    onClick={() => updateModalLarge({}, 'AvailablePackages')}
                                >
                                    Check Available Packages
                                </Button>
                                <Button
                                    className="btn-warning btn-xs"
                                    onClick={() => updateModalLarge({}, 'BulkOrderUploadInstructions')}
                                >
                                    Bulk Order Upload Instructions
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col-md-12 text-left">
                        <FormGroup className="mb-0 text-left">
                            <Button type="submit" color="primary" className="mt-2 btn-sm" disabled={isLoading}>Upload</Button>
                        </FormGroup>
                    </div>
                </Row>
            </Form>

            {
                modalType && modalData
                ? (
                    {
                        'AvailablePackages': <AvailablePackages
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                        />,
                        'BulkOrderUploadInstructions': <BulkOrderUploadInstructions
                            isOpen={isModalOpen}
                            toggle={updateModalLarge}
                        />,
                    }[modalType] || ''
                )
                : ''
            }
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Upload File"
                toggleOn={true}
                isOpen={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={false}
                bodyContent={bodyContent}
            />
        </div>
    );
}
 
export default FileBulkUpload;
