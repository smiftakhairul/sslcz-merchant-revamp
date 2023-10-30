import React, { useState } from "react";
import {
    Button
} from "reactstrap";
import CategoryForm from "../_modals/category-form";

const CreateCategoryBtn = (props) => {
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
            <Button className="btn-primary btn-xs" onClick={()=>updateModalLarge({}, 'CreateCategory')}>
                <i className="iconsminds-add"></i> Create Category
            </Button>

            {modalType && modalData
            ? {
                "CreateCategory": (
                    <CategoryForm 
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
 
export default CreateCategoryBtn;
