import { productItemsFields } from "containers/form-fields/invoices/invoice-form-fields";
import FormWrapper from "containers/wrapper/form-wrapper";
import React, { useState } from "react";
import {
    Button, FormGroup
} from "reactstrap";

const ProductItemFields = (props) => {
    const [index] = useState(props.index);

    const calcTotal = () => {
        let qty = document.getElementById('qty-' + (index+1)).value;
        let amt = document.getElementById('amount-' + (index+1)).value;
        let wrapper = document.getElementById('total_amount-' + (index+1));
        if (qty && amt) {
            wrapper.value = qty * amt;
        } else {
            wrapper.value = '';
        } 
    };

    const additionalContent = () => {
        return(
            <div className="col-md-4">
                <FormGroup>
                    <label></label>
                    <div className="mt-2 add-more-product">
                        <Button type="button" className="default btn btn-primary" onClick={() => props.addProductItem()}> <i className="iconsminds-add"> </i> Add More Product / Service Items</Button>
                        {
                            index ? <Button type="button" className="default btn btn-primary ml-2 px-2" onClick={() => props.removeItem(index)}>
                                    <i className="iconsminds-close"> </i>
                                </Button> 
                            : ''
                        }
                    </div>
                </FormGroup>
            </div>
        )
    }

    return (
        <React.Fragment>
            <FormWrapper
                fields={productItemsFields(index,calcTotal)}
                isAdditionalContent={true}
                additionalContent={additionalContent}
            />
        </React.Fragment>
    );
}
 
export default ProductItemFields;