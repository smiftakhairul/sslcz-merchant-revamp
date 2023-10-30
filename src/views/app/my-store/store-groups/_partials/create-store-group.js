import React, { useState } from "react";
import { Button } from "reactstrap";
import StoreGroupCreate from "../_modals/store-group-create";

const CreateStoreGroup = (props) => {
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
                onClick={() => updateModalLarge({}, 'StoreGroupCreate')}
            >
                <i className="iconsminds-add"></i> Create Store Group
            </Button>

            {modalType && modalData
            ? {
                "StoreGroupCreate": (
                    <StoreGroupCreate
                        isOpen={isModalOpen}
                        toggle={updateModalLarge}
                        // store={modalData}
                        forceUpdate={props.forceUpdate}
                        setForceUpdate={props.setForceUpdate}
                    />
                ),
                }[modalType] || ""
            : ""}
        </React.Fragment>
    );
}
 
export default CreateStoreGroup;