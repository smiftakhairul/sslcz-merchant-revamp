import React from "react";
import { Input, Label } from "reactstrap";

const CustomCheckbox = (props) => {
    return (
        <React.Fragment>
            <Label className="">
                <Input
                    type={props.type || 'checkbox'}
                    name={props.name || ''} 
                    {...props?.id?.length ? {id: props.id} : {}}
                    placeholder={props.placeholder || ''}
                    required={props.required || false}
                    disabled={props.disabled || false}
                    readOnly={props.readonly || false}
                    autoComplete={props.autocomplete || 'on'}
                    {...props.value ? {value: props.value} : {}}
                    {...props.onChange ? {onChange: props.onChange} : {}}
                    {...props.onKeyup ? {onKeyUp: props.onKeyup} : {}}
                    {...props.defaultValue ? {defaultChecked: props.defaultValue} : {}}
                    {...props.min ? {min: props.min} : {}}
                    {...props.minLength ? {minLength: props.minLength} : {}}
                    {...props.max ? {max: props.max} : {}}
                    {...props.maxLength ? {maxLength: props.maxLength} : {}}
                />
                {" "}
                {props.checkboxLabel || ''}
            </Label>
        </React.Fragment>
    );
}
 
export default CustomCheckbox;