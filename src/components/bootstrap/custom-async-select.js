import React, { Component } from "react";
import AsyncSelect from 'react-select/async';
import apiClient from "services/axios";
import CustomSelectInput from "./custom-select-input";

const singleselectData = [
//   { label: "Store 1", value: "1", key: 0 },
//   { label: "Store 2", value: "2", key: 1 },
//   { label: "Store 3", value: "3", key: 2 },
//   { label: "Store 4", value: "4", key: 3 },
//   { label: "Store 5", value: "5", key: 4 },
];

const noop = () => {
  // no operation (do nothing real quick)
};

export default class ReactAsyncSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: props.default || "",
      singleselectData: props.options ? props.options : singleselectData,
      placeholder: props.placeholder ? props.placeholder : "Select",
      name: props.name,
      isMulti: props.isMulti,
      action: props.action,
      value: props.defaultValue || '',
    };
  }

  selectRef = null;
  setSelectRef = ref => {
    this.selectRef = ref;
  };

  handleChangeSingle = (selectedOptions) => {
    this.setState({ selectedOptions });
    this.setState({ value: selectedOptions?.value || '' });
  };

  getValue = () => {
    if (this.props.value !== undefined) {
      return this.props.value;
    }
    return this.state.value || "";
  };

  loadOptions = async (inputValue, callback) => {
    let body = {name: inputValue};
    try {
        await apiClient(this.state.action, {}, body).then((response) => {
            if (response.data.code === 200 || response.data.status === "SUCCESS") {
                callback(response.data.data.options);
            }
        });
    } catch (error) {
        console.log(error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <AsyncSelect
          components={{ Input: CustomSelectInput }}
          className="react-select"
          placeholder={this.state.placeholder}
          classNamePrefix="react-select"
          name={this.state.isMulti ? "multi-" + this.state.name : this.state.name}
          value={this.state.singleselectData.find(
            (o) => o.value === this.state.selectedOptions
          )}
          onChange={this.handleChangeSingle}
          options={this.state.singleselectData}
          isMulti={this.state.isMulti}
          loadOptions={this.loadOptions}
          isClearable={true}
          ref={this.setSelectRef}
        />
        {
          this.props.required && (
            <input
              tabIndex={-1}
              autoComplete="off"
              style={{
                opacity: 0,
                width: "100%",
                height: 0,
                position: "absolute"
              }}
              value={this.getValue()}
              onChange={noop}
              onFocus={() => this.selectRef.focus()}
              required={this.props.required || false}
            />
          )
        }
      </React.Fragment>
    );
  }
}
