import { createSettlementReqFields } from "containers/form-fields/my-store/settlement-request-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import React from "react";


const SettlementRequestForm = (props) => {
    return (
        <React.Fragment>
             <FormWrapper fields = {createSettlementReqFields()} />
        </React.Fragment>
    );
}
 
export default SettlementRequestForm;