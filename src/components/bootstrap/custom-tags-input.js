import React, { Component } from "react";
import { useState } from "react";
import { injectIntl } from "react-intl";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

const CustomTagsInput = (props) => {
  let defaultValue = props.defaultValue 
    ? (Array.isArray(props.defaultValue) ? props.defaultValue : (props.defaultValue).split(','))
    : []
  const [tags, setTags] = useState(defaultValue);
  let required = props.required || false;
  if (tags.length) {
    required = false
  }
  const [isRequired, setIsRequired] = useState(required);
  const [showEmptyValue, setShowEmptyValue] = useState(false);
  const { messages } = props.intl;

  const handleTagChange = (tags) => {
    setTags(tags);
    checkIsRequired(tags);
  };

  const checkIsRequired = (tags) => {
    let checkRequired = tags.length ? false : (props.required || false);
    setIsRequired(checkRequired);
  };

  return (
    <>
      <TagsInput
        value={tags}
        onChange={handleTagChange}
        inputProps={{
          ...(props.id && {id: props.id}),
          placeholder: props.placeholder || messages["form-components.tags"],
          ...(showEmptyValue && {value: ''}),
          required: isRequired,
          // onFocus: () => setTimeout(() => setShowEmptyValue(false), 500),
          // onBlur: () => setShowEmptyValue(true),
        }}
        addOnBlur={true}
        disabled={props.disabled || false}
        onlyUnique={props.onlyUnique || false}
        {...props.onChange ? {onChangeInput: props.onChange} : {}}
        {...props.validationRegex ? {validationRegex: props.validationRegex} : {}}
        {...props.onValidationReject ? {onValidationReject: props.onValidationReject} : {}}
        {...props.maxTags ? {maxTags: props.maxTags} : {}}
      />
      <input type="hidden" name={props.name || ''} defaultValue={tags} />
    </>
  );
}

export default injectIntl(CustomTagsInput);
