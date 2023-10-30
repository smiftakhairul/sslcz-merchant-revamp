import FormGroupField from "components/bootstrap/custom-form-groups";
import { NotificationManager } from "components/notifications";
import { getParseFloat } from "helpers/common";
import { prepareFormFields } from "helpers/form";
import React from "react";
import { useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import ModalWrapper from "containers/wrapper/modal-wrapper";

const CancelInvoice = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);

  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <div className="col-md-12">
            <h6 className="my-2">Do you want to cancel this invoice?</h6>
          </div>
          <div className="col-md-12">
            <FormGroupField
              label="Reason of Cancellation"
              type="textarea"
              id="reason"
              name="reason"
              placeholder="Cancellation reason"
              required={true}
              height={100}
            />
          </div>
        </Row>
      </React.Fragment>
    );
  };

  const headerContent = () => {
    return (
      <React.Fragment>
        <p className="mb-0">
          <span className="text-muted display-7">
            {props.transaction?.refer_no || ""}
            &nbsp;|&nbsp;
            {getParseFloat(props.transaction?.amount || 0)}{" "}
            {props.transaction?.currency || ""}
            {/* &nbsp;|&nbsp;
                    {getModalHeaderStatusColumnContent(props.transaction.notice)} */}
          </span>
        </p>
      </React.Fragment>
    );
  };

  const cancelInvoice = async (e) => {
    e.preventDefault();
    let form = document.getElementById("cancelInvoiceForm");
    let formData = prepareFormFields(form);
    formData.id = props.transaction?.id;
    formData.refer_no = props.transaction?.refer_no;

    setIsLoading(true);
    try {
      await apiClient("cancelInvoice", {}, formData).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          if (response.data.data.invoice) {
            NotificationManager.success(
              response.data.message || "Mail successfully sent.",
              "Success!"
            );

            let invoices = props.invoices;
            let invoice = props.transaction;
            invoice.payment_status = response.data.data.invoice?.payment_status;
            invoice.cancelled_desc = response.data.data.invoice?.cancelled_desc;
            invoice.cancelled_on = response.data.data.invoice?.cancelled_on;
            invoice.cancelled_by = response.data.data.invoice?.cancelled_by;
            invoice.cb_uname = response.data.data.invoice?.cb_uname;
            invoices = invoices.map((obj) =>
              obj.id === invoice.id ? invoice : obj
            );
            props.setInvoices(invoices);

            props.toggle();
          } else {
            NotificationManager.error(
              response.data.message || "Something went wrong.",
              "Error!"
            );
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Invoice Information"
        isLoading={isLoading}
        modalHeaderContent={headerContent}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={cancelInvoice}
        formId="cancelInvoiceForm"
        formSubmitTitle="Yes, Proceed"
      />
    </React.Fragment>
  );
};

export default CancelInvoice;
