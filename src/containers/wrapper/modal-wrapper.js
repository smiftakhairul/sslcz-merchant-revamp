import { Colxx } from "components/bootstrap/custom-bootstrap";
import React from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Spinner,
} from "reactstrap";

const ModalWrapper = (props) => {
  const modalBody = () => {
    return (
      <React.Fragment>
        <ModalBody>
          {props.isLoading ? (
            <div className="text-center">
              <Spinner color="primary" className="" size="sm" />
            </div>
          ) : (
            <React.Fragment>
              {props.modalContent ? props.modalContent() : ""}
            </React.Fragment>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary" className="btn-sm"
            // outline={(props.formEnabled || props.additionalFooterBtnContent) ? true : false}
            outline={true}
            onClick={props.toggle}
          >
            Close
          </Button>
          {props.additionalFooterBtnContent
            ? props.additionalFooterBtnContent()
            : ""}
          {props.formEnabled ? (
            <Button type="submit" color="primary" className="btn-sm" disabled={props.isLoading}>
              {props.formSubmitTitle || "Submit"}
            </Button>
          ) : (
            ""
          )}
        </ModalFooter>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div>
        <Modal
          className="modal-transaction-details"
          isOpen={props.isOpen}
          toggle={props.toggle}
          backdrop={true}
        >
          <ModalHeader toggle={props.toggle}>
            <Row>
              <Colxx md="12">
                {props.modalTitle}
                {!props.isLoading && props.totalRows ? (
                  <React.Fragment>
                    &nbsp;
                    <span className="font-italic">
                      <sup>
                        <small>{props.totalRows} Rows</small>
                      </sup>
                    </span>
                  </React.Fragment>
                ) : (
                  ""
                )}
                {props.modalHeaderContent ? props.modalHeaderContent() : ""}
              </Colxx>
            </Row>
          </ModalHeader>

          {props.formEnabled ? (
            <React.Fragment>
              <Form
                onSubmit={props.onFormSubmit || "#"}
                id={props.formId || "modalForm"}
              >
                {modalBody()}
              </Form>
            </React.Fragment>
          ) : (
            <React.Fragment>{modalBody()}</React.Fragment>
          )}
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ModalWrapper;
