import { storeGroupFields } from "containers/form-fields/my-store/store-group-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import React from "react";


const StoreGroupForm = (props) => {
    return (
        <React.Fragment>
            <FormWrapper fields = {storeGroupFields(props.store || null)} />
        </React.Fragment>
    );
}
 
export default StoreGroupForm;