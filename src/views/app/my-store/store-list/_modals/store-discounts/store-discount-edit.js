import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { prepareFormFields } from "helpers/form";
import React, { useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";
import StoreDiscountForm from "../../_partials/store-discounts/store-discount-form";

const StoreDiscountEdit = (props) => {
    const [isLoading, setIsLoading] = useState(props.isLoading);
    const [offerFile, setOfferFile] = useState(null);

    const fileChangeHandler = (e, fieldName) => {
        if (fieldName === 'banner_rul') {
            console.log(e.target.files[0]);
            setOfferFile(e.target.files[0] || null);
        }
    }

    const editStoreDiscount = async (e) => {
        e.preventDefault();
        let form = document.getElementById("editStoreDiscountForm");
        let formDataRaw = prepareFormFields(form);

        let formData = new FormData();
        formData.append('discount_id', props.offer?.discount_id);
        for (let [key, value] of Object.entries(formDataRaw)) {
            formData.append(key, value);
        }
        if (offerFile) {
            formData.append('offer_image_path', offerFile);
        }

        setIsLoading(true);
        try {
            await apiClient("updateStoreDiscount", {}, formData).then((response) => {
                if (response.data.code === 200 || response.data.status === "SUCCESS") {
                    if (response.data.data.discount) {
                        NotificationManager.success(
                            response.data.message || "Store discount successfully updated.",
                            "Success!"
                        );

                        let discounts = props.discounts;
                        let discount = props.offer;
                        let fields = [
                            'offer_name',
                            'display_message',
                            'disc_msg_at_succ_pag',
                            'link_t_c',
                            'display_popup',
                            'offer_start',
                            'offer_end',
                            'gw_id',
                            'gw_all',
                            'discount_perc',
                            'discount_amount',
                            'is_cus_mobile',
                            'no_same_card_used',
                            'allowed_dis_amt',
                            'max_discount_amt',
                            'max_amt_to_display_offer',
                            'cust_offer_amt',
                            'card_type',
                            'bin_list',
                            'campaign_code',
                            'gw_visa',
                            'gw_master',
                            'gw_amex',
                            'gw_other_card',
                            'gw_ib',
                            'gw_mb',
                            'gw_wallet',
                            'disc_on_prod_price',
                            'disc_on_discount_field',
                            'disc_on_cashback',
                            'is_emi_allowed',
                            'is_save_card_disc',
                            'is_dynamic_param',
                            // 'offer_image_path',
                            'status',
                        ];
                        
                        let resDiscount = response.data.data.discount || {};
                        for (let key in discount) {
                            if (fields.includes(key) && resDiscount.hasOwnProperty(key)) {
                                let value = resDiscount[key];
                                if (value === true) {
                                    value = 1;
                                } else if (value === false) {
                                    value = 0;
                                }
                                discount[key] = value;
                            }
                        }

                        discounts = discounts.map((obj) =>
                            obj.discount_id === props.offer?.discount_id ? discount : obj
                        );
                        props.setDiscounts(discounts);

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
                banks={props.banks || []}
                store={props.offer}
                fileChangeHandler={fileChangeHandler}
            />
        </React.Fragment>;
    };

    return (
        <React.Fragment>
        <ModalWrapper
            isOpen={props.isOpen}
            toggle={props.toggle}
            modalTitle="Edit Store Discount"
            isLoading={isLoading}
            modalHeaderContent={modalHeaderContent}
            modalContent={modalContent}
            formEnabled={true}
            onFormSubmit={editStoreDiscount}
            formId="editStoreDiscountForm"
            // formSubmitTitle="Edit"
        />
        </React.Fragment>
    );
};

export default StoreDiscountEdit;
