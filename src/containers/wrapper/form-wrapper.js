import FormGroupField from "components/bootstrap/custom-form-groups";
import IntlMessages from "helpers/intl";
import React from "react";
import { Row } from "reactstrap";

const commonWrapper = (field) => {
    return <FormGroupField
        {...field}
    />
};
const checkboxGroupWrapper = (field) => {
    return <React.Fragment>
        {
            field?.label?.length
                ? <div className="">
                    <label><IntlMessages id={field.label}/></label>
                    {field?.required ? <span className="text-danger" key={1}> *</span> : ''}
                </div> 
                : ''
        }
        {(field.options || []).map((cField, index2) => {
            return <FormGroupField
                key={index2}
                {...cField}
            />
        })}
    </React.Fragment>
};

const FormWrapper = (props) => {
    return (
        <React.Fragment>
            <div className="modal_custom_padding">
            <Row>
                {(props.fields || []).map((field, index) => {
                    return <div className={field?.wrapperClass || "col-md-12"} key={index}>
                        {field?.divider ? <hr /> : ''}
                        {
                            {
                                "checkbox-group": checkboxGroupWrapper(field),
                            }[field?.type] || commonWrapper(field)
                        }
                    </div>
                })}
              {props.isAdditionalContent? props.additionalContent():''}
            </Row>
            </div>
        </React.Fragment>
    );
}
 
export default FormWrapper;