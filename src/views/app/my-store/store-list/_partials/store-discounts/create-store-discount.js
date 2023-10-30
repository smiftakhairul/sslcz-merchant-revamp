import React, { useState } from "react";
import { Button } from "reactstrap";
import StoreDiscountCreate from "../../_modals/store-discounts/store-discount-create";

const CreateStoreDiscount = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);

    const updateModalLarge = (data = {}, type) => {
        setIsModalOpen(!isModalOpen);
        setModalType(type);
        setModalData(modalData ? null : data);
    };

    return (
        <React.Fragment>
            <Button
                className="btn-primary btn-xs"
                onClick={() => updateModalLarge({}, 'StoreDiscountCreate')}
            >
                <i className="iconsminds-add"></i> Create Store Discount
            </Button>

            {modalType && modalData
            ? {
                "StoreDiscountCreate": (
                    <StoreDiscountCreate
                        isOpen={isModalOpen}
                        toggle={updateModalLarge}
                        // store={modalData}
                        forceUpdate={props.forceUpdate}
                        setForceUpdate={props.setForceUpdate}
                        searchData={props.searchData}
                        stid={props.stid}
                    />
                ),
                }[modalType] || ""
            : ""}
        </React.Fragment>
    );
}
 
export default CreateStoreDiscount;