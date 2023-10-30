import { invBaseUrl } from "constants/default-values";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";
import { useReactToPrint } from "react-to-print";
import ModalWrapper from "containers/wrapper/modal-wrapper";

const InvoiceDetail = (props) => {
  const [isLoading, setIsLoading] = useState(props.isLoading);
  const [invContent, setInvContent] = useState("");
  const [showIsCopiedLink, setShowIsCopiedLink] = useState(false);

  const invoicePrintableAreaRef = useRef();
  const printInvoice = useReactToPrint({
    content: () => invoicePrintableAreaRef.current,
  });

  useEffect(() => {
    getInvoiceContent();
  }, []);

  const getInvoiceContent = async () => {
    setIsLoading(true);
    try {
      await fetch(
        invBaseUrl +
          "/invoice-details/" +
          props.transaction?.refer_no +
          "?action_btn=no"
      )
        .then((response) => response.text())
        .then((data) => {
          setInvContent(data);
        });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const copyInvoiceLink = () => {
    navigator.clipboard.writeText(
      invBaseUrl + "/invoice-details/" + props.transaction?.refer_no
    );
    setShowIsCopiedLink(true);
    setTimeout(() => {
      setShowIsCopiedLink(false);
    }, 1000);
  };

  const modalContent = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <div
            ref={invoicePrintableAreaRef}
            dangerouslySetInnerHTML={{ __html: invContent }}
          ></div>
        </div>
      </div>
    );
  };

  const additionalFooterBtnContent = () => {
    return (
      <React.Fragment>
        <Button color="success" className="btn-sm" onClick={printInvoice}>
          Print Invoice
        </Button>
        <Button
          color="info"
          className="btn-sm"
          onClick={copyInvoiceLink}
          disabled={showIsCopiedLink}
        >
          {showIsCopiedLink ? "Copied!" : "Copy Invoice Link"}
        </Button>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Invoice Information"
        isLoading={isLoading}
        modalContent={modalContent}
        additionalFooterBtnContent={additionalFooterBtnContent}
      />
    </React.Fragment>
  );
};

export default InvoiceDetail;
