import { discountFormFields } from "containers/form-fields/my-store/discount-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import React from "react";

const StoreDiscountForm = (props) => {
    return (
        <React.Fragment>
            <FormWrapper
                fields={discountFormFields(props?.store || null, props.banks || [], props.fileChangeHandler)}
            />
        </React.Fragment>
    );
};
 
export default StoreDiscountForm;