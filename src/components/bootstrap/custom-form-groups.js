import DatePickerSingle from "components/bootstrap/custom-datepicker";
import ReactSingleSelect from "components/bootstrap/custom-select";
import IntlMessages from "helpers/intl";
import React from "react";
import {
    FormGroup,
    FormText,
    Input
} from "reactstrap";
import CustomCheckbox from "./custom-checkbox";
import CustomTagsInput from "./custom-tags-input";

const FormGroupField = (props) => {
    const generateInputTextField = (props) => {
        return <Input
            type={props.type || 'text'}
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
            {...props.defaultValue ? {defaultValue: props.defaultValue} : {}}
            {...props.min ? {min: props.min} : {}}
            {...props.minLength ? {minLength: props.minLength} : {}}
            {...props.max ? {max: props.max} : {}}
            {...props.maxLength ? {maxLength: props.maxLength} : {}}
        />
    }

    const generateInputFileField = (props) => {
        return <Input
            type={props.type || 'file'}
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
            {...props.defaultValue ? {defaultValue: props.defaultValue} : {}}
            {...props.min ? {min: props.min} : {}}
            {...props.minLength ? {minLength: props.minLength} : {}}
            {...props.max ? {max: props.max} : {}}
            {...props.maxLength ? {maxLength: props.maxLength} : {}}
        />
    }

    const generateInputTextAreaField = (props) => {
        return <Input
            type={props.type || 'textarea'}
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
            {...props.defaultValue ? {defaultValue: props.defaultValue} : {}}
            {...props.min ? {min: props.min} : {}}
            {...props.minLength ? {minLength: props.minLength} : {}}
            {...props.max ? {max: props.max} : {}}
            {...props.maxLength ? {maxLength: props.maxLength} : {}}
            {...(props.height ? { style: {height: props.height} } : {})}
        />
    }

    const generateInputCheckboxField = (props) => {
        return <CustomCheckbox
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
            {...props.defaultValue ? {defaultValue: props.defaultValue} : {}}
            {...props.min ? {min: props.min} : {}}
            {...props.minLength ? {minLength: props.minLength} : {}}
            {...props.max ? {max: props.max} : {}}
            {...props.maxLength ? {maxLength: props.maxLength} : {}}
            checkboxLabel={props.checkboxLabel || ''}
        />
    }

    const generateDatepickerField = (props) => {
        return <DatePickerSingle 
            name={props.name || ''}
            startDate={props.default}
            showTimeInput={props.showTime || false}
            {...props.defaultValue ? {startDate: props.defaultValue} : {}}
            {...(props.format ? { format: props.format } : {})}
            isClearable={props.isClearable}
            required={props.required || false}
            placeholder={props.placeholder || ''}
            disabled={props.disabled || false}
            readonly={props.readonly || false}
            autocomplete={'off'}
        />
    }

    const generateInputSelectField = (props) => {
        return <ReactSingleSelect 
            name={props.name || ''} 
            options={props.options || []} 
            placeholder={props.placeholder || ''} 
            required={props.required || false}
            disabled={props.disabled || false}
            readonly={props.readonly || false}
            {...(
                    props.defaultValue 
                    || props.defaultValue === 0 
                    || props.defaultValue === '0' 
                    || props.defaultValue === false
                    ) ? {defaultValue: props.defaultValue} : {}
            }
            autocomplete={'off'}
        />
    }

    const generateInputMultiSelectField = (props) => {
        return <ReactSingleSelect 
            name={props.name || ''} 
            options={props.options || []} 
            placeholder={props.placeholder || ''} 
            isMulti={true}
            required={props.required || false}
            disabled={props.disabled || false}
            readonly={props.readonly || false}
            {...(
                    props.defaultValue 
                    || props.defaultValue === 0 
                    || props.defaultValue === '0' 
                    || props.defaultValue === false
                    ) ? {defaultValue: props.defaultValue} : {}
            }
            // autocomplete={'off'}
        />
    }

    const generateInputTagsField = (props) => {
        return <CustomTagsInput
            type={props.type || 'tags-input'}
            name={"tagsInput-" + (props.name || '')} 
            {...props?.id?.length ? {id: props.id} : {}}
            placeholder={props.placeholder || ''}
            required={props.required || false}
            disabled={props.disabled || false}
            readOnly={props.disabled || false}
            onlyUnique={props.onlyUnique || false}
            {...props.onChange ? {onChange: props.onChange} : {}}
            {...props.defaultValue ? {defaultValue: props.defaultValue} : {}}
            {...props.validationRegex ? {validationRegex: props.validationRegex} : {}}
            {...props.onValidationReject ? {onValidationReject: props.onValidationReject} : {}}
            {...props.maxTags ? {maxTags: props.maxTags} : {}}
        />
    };

    return (
        <React.Fragment>
            {
                props.label?.length && props?.type === 'checkbox' 
                    ? <div className="">
                        <label><IntlMessages id={props.label}/></label>
                        {props.required ? <span className="text-danger" key={1}> *</span> : ''}
                    </div> 
                    : ''
            }
            <FormGroup className={props.formGroupClass ? props.formGroupClass : ''} check={props?.type === 'checkbox' ? true : false}>
                { (props.label?.length && props?.type !== 'checkbox') ? 
                    [
                        <label htmlFor={props.id || ''} key={0}>
                            <IntlMessages id={props.label}/>
                        </label>,
                        (props.required ? <span className="text-danger" key={1}> *</span> : '')
                    ]
                : '' }
                
                <div className={props.class || ''}>
                    {
                        {
                            "text": generateInputTextField(props),
                            "file": generateInputFileField(props),
                            "textarea": generateInputTextAreaField(props),
                            "email": generateInputTextField(props),
                            "number": generateInputTextField(props),
                            "color": generateInputTextField(props),
                            "password": generateInputTextField(props),
                            "date": generateDatepickerField(props),
                            "select": generateInputSelectField(props),
                            "multi-select": generateInputMultiSelectField(props),
                            "checkbox":generateInputCheckboxField(props),
                            "tags-input":generateInputTagsField(props),
                        }[props.type]
                    }
                </div>
                {
                    props.infoText
                        ? <FormText color="muted">{props.infoText}</FormText>
                        : ''
                }
            </FormGroup>
        </React.Fragment>
    );
}
 
export default FormGroupField;