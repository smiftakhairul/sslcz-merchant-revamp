import axios from "axios";
import { NotificationManager } from "components/notifications";
import { invBaseUrl } from "constants/default-values";
import { getParseFloat } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";
import ModalWrapper from "containers/wrapper/modal-wrapper";

const ResendMail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <div className="col-md-12">
            <h6 className="my-2">Do you want to re-send the email?</h6>
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

  const resendMail = async (e) => {
    e.preventDefault();
    // let form = document.getElementById("resendInvoiceForm");
    // let formData = prepareFormFields(form);
    // console.log(formData);
    try {
      await axios
        .post(invBaseUrl + "/api/mail-send/" + props.transaction?.refer_no, {
          api_key: "demo",
        })
        .then((response) => {
          if ("" + response.data.status_code === "200") {
            NotificationManager.success(
              response.data.message || "Mail successfully sent.",
              "Success!"
            );
            props.toggle();
          } else {
            NotificationManager.error(
              response.data.message || "Something went wrong.",
              "Error!"
            );
          }
        })
        .catch((err) => {
          NotificationManager.error("Something went wrong.", "Error!");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Invoice Information"
        isLoading={props.isLoading}
        modalHeaderContent={headerContent}
        modalContent={modalContent}
        formEnabled={true}
        onFormSubmit={resendMail}
        formId="resendInvoiceForm"
        formSubmitTitle="Yes, Proceed"
      />
    </React.Fragment>
  );
};

export default ResendMail;
