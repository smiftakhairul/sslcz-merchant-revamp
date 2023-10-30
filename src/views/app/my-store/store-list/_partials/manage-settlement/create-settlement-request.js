import React, { useState } from "react";
import { Button } from "reactstrap";
import SettlementRequestCreate from "../../_modals/manage-settlement/settlement-request-create";

const CreateSettlementRequest = (props) => {
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
                onClick={() => updateModalLarge({}, 'SettlementRequestCreate')}
            >
                <i className="iconsminds-add"></i> Create Settlement Request
            </Button>

            {modalType && modalData
            ? {
                "SettlementRequestCreate": (
                    <SettlementRequestCreate
                        isOpen={isModalOpen}
                        toggle={updateModalLarge}
                        // store={modalData}
                        forceUpdate={props.forceUpdate}
                        setForceUpdate={props.setForceUpdate}
                        stid={props.stid}
                    />
                ),
                }[modalType] || ""
            : ""}
        </React.Fragment>
    );
}
 
export default CreateSettlementRequest;