import React, { useState } from "react";
import Select from "react-select";
import CustomSelectInput from "./custom-select-input";

const ReactSelectExample = (props) => {
  const [selectedOptions, setSelectedOptions] = useState(
    props.defaultValue ||
      props.defaultValue === 0 ||
      props.defaultValue === "0" ||
      props.defaultValue === false
      ? props.defaultValue
      : ""
  );
  const [singleSelectData, setSingleSelectData] = useState(
    props.options ? props.options : []
  );
  const [placeholder, setPlaceholder] = useState(
    props.placeholder ? props.placeholder : "Select"
  );
  const [name, setName] = useState(props.name);
  const [isMulti, setIsMulti] = useState(props.isMulti || false);
  const [required, setRequired] = useState(props.required || false);
  const [disabled, setDisabled] = useState(props.disabled || false);
  const [readonly, setReadonly] = useState(props.readonly || false);
  const [autocomplete, setAutocomplete] = useState(props.autocomplete || "on");
  const [defaultValue, setDefaultValue] = useState(props.defaultValue || "");

  const handleChangeSingle = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  return <div className="select-wrapper-container">
    <Select
      menuPortalTarget={document.body} 
      menuPosition={'fixed'} 
      styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
      components={{ Input: CustomSelectInput }}
      className="react-select select-wrapper"
      placeholder={placeholder}
      classNamePrefix="react-select"
      name={isMulti ? "multi-" + name : name}
      value={
        !isMulti 
          ? singleSelectData.find((option) => "" + option.value === "" + selectedOptions)
          : singleSelectData.filter((option) => selectedOptions.includes(option.value))
      }
      onChange={handleChangeSingle}
      options={singleSelectData}
      isMulti={isMulti}
      required={required}
      isDisabled={disabled}
      readonly={readonly}
      autocomplete={autocomplete}
      isClearable={true}
    />
    <input 
      className="input-required" 
      type="text" 
      defaultValue={selectedOptions} 
      tabIndex={-1}
      autoComplete="off" 
      required={required} 
      disabled={disabled} 
    />
  </div>;
};

export default ReactSelectExample;
