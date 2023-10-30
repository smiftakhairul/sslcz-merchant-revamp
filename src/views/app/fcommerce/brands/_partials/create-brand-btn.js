import React, { useState } from "react";
import {
    Button
} from "reactstrap";
import BrandForm from "../_modals/brand-form";

const CreateBrandBtn = (props) => {
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
            <Button className="btn-primary btn-xs" onClick={()=>updateModalLarge({}, 'CreateBrand')}>
                <i className="iconsminds-add"></i> Create New Brand
            </Button>

            {modalType && modalData
            ? {
                "CreateBrand": (
                    <BrandForm 
                        action="ADD" 
                        isModalOpen={isModalOpen} 
                        toggle={updateModalLarge} 
                        forceUpdate={props.forceUpdate}
                        setForceUpdate={props.setForceUpdate}
                     />
                ),
                }[modalType] || ""
            : ""}
        </React.Fragment>
    );
}
 
export default CreateBrandBtn;
