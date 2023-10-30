import React, { Component } from "react";
import { injectIntl } from "react-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import moment from "moment";

class DatePickerExamples extends Component {
  constructor(props) {
    super(props);

    // default date format set
    let format = props.format || "dd-MM-yyyy";
    // if (props.format) {
    //     if ((props.format).split(' ')[1]) {
    //         format = format + ' ' + (props.format).split(' ')[1];
    //     }
    //     if ((props.format).split(' ')[2]) {
    //         format = format + ' ' + (props.format).split(' ')[2];
    //     }
    // }

    this.state = {
      startDate: props.startDate
        ? new Date(moment(props.startDate, "DD-MM-YYYY").format("YYYY-MM-DD"))
        : null,
      name: props.name,
      format: format,
      showTimeInput: props.showTimeInput || false,
      placeholderText: props.placeholder || props.intl["forms.date"],
      autocomplete: props.autocomplete || "off",
      required: props.required || false,
      disabled: props.disabled || false,
      readonly: props.readonly || false,
    };
  }

  handleChangeDate = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <InputGroup className="custom-date">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <DatePicker
          dateFormat={this.state.format}
          name={this.state.name}
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
          placeholderText={this.state.placeholderText}
          isClearable={this.props.isClearable === false ? false : true}
          required={this.state.required}
          autoComplete={this.state.autocomplete}
          disabled={this.state.disabled}
          readOnly={this.state.readonly}
          // showTimeInput={this.state.showTimeInput}
          // isClearable
        />
      </InputGroup>
    );
  }
}
export default injectIntl(DatePickerExamples);
