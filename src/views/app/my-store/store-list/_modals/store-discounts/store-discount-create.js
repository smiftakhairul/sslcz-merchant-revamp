import React, { useState } from "react";
import { Card, CardBody, Row } from "reactstrap";
import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";
import { prepareFormFields } from "helpers/form";
import StoreGroupForm from "../../../store-groups/_partials/store-group-form";
import apiClient from "services/axios";
import StoreDiscountForm from "../../_partials/store-discounts/store-discount-form";
import { useEffect } from "react";

const StoreDiscountCreate = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [banks, setBanks] = useState([]);
    const [offerFile, setOfferFile] = useState(null);

    useEffect(() => {
        getBanks();
    }, []);

    const getBanks = async () => {
        setIsLoading(true);

        try {
            await apiClient("getBankList", {}, {}).then(
                (response) => {
                    if (response.data.code === 200 ||response.data.status === "SUCCESS") {
                        setBanks(response.data.data.banks || []);
                    }
                }
            );
        } catch (error) {
        console.log(error);
        }

        setIsLoading(false);
    };

    const fileChangeHandler = (e, fieldName) => {
        if (fieldName === 'banner_rul') {
            console.log(e.target.files[0]);
            setOfferFile(e.target.files[0] || null);
        }
    }

    const createStoreDiscount = async (e) => {
        e.preventDefault();
        let form = document.getElementById("createStoreDiscountForm");
        let formDataRaw = prepareFormFields(form);

        let formData = new FormData();
        formData.append('stid', props.stid);
        for (let [key, value] of Object.entries(formDataRaw)) {
            formData.append(key, value);
        }
        formData.append('offer_image_path', offerFile);
        
        setIsLoading(true);
        try {
            await apiClient("createStoreDiscount", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.discount) {
                        NotificationManager.success(
                            response.data.message || "Store discount successfully created.",
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
    };

    const modalHeaderContent = () => {
        return (
        <Row>
            <Colxx md="12">
            </Colxx>
        </Row>
        );
    };

    const modalContent = () => {
        return <React.Fragment>
            <StoreDiscountForm
                banks={banks}
                // store={props.store}
                fileChangeHandler={fileChangeHandler}
            />
        </React.Fragment>;
    };

    return (
        <React.Fragment>
            <ModalWrapper
                isOpen={props.isOpen}
                toggle={props.toggle}
                modalTitle="Create Store Discount"
                isLoading={isLoading}
                modalHeaderContent={modalHeaderContent}
                modalContent={modalContent}
                formEnabled={true}
                onFormSubmit={createStoreDiscount}
                formId="createStoreDiscountForm"
                // formSubmitTitle="Edit"
            />
        </React.Fragment>
    );
};

export default StoreDiscountCreate;
