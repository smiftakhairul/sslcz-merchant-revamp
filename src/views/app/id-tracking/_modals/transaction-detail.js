import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import {
  getModalHeaderStatusColumnContent,
  getParseFloat,
  listGroupItem
} from "helpers/common";
import moment from "moment";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";

const TransactionDetail = (props) => {
  const modalHeaderContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
            <p className="mb-0">
              <span className="text-muted display-7">
                {props.transaction.incommingtime
                  ? moment(
                      props.transaction.incommingtime,
                      "YYYY-MM-DD hh:mm:ss"
                    )
                      .format("DD-MM-YYYY hh:mm A")
                      .toString()
                  : ""}
                &nbsp;|&nbsp;
                {getParseFloat(props.transaction?.mamount || 0)}{" "}
                {props.transaction?.t_currency || ""}
                &nbsp;|&nbsp;
                {getModalHeaderStatusColumnContent(props.transaction.notice)}
              </span>
            </p>
          </Colxx>
        </Row>
      </>
    );
  };

  const modalContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
            <CardWrapper
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => <div className="list-group transaction-list">
                  {listGroupItem('Transaction ID', props.transaction?.mtxnid)}
                  {listGroupItem('SSL ID', props.transaction?.sslid)}
                  {listGroupItem('Bank ID', props.transaction?.banksslid)}
                  {listGroupItem('Bank Gateway', props.transaction?.bid)}
                </div>
              }
            />

            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => <div className="list-group transaction-list">
                  {listGroupItem('Store', props.transaction?.strid)}
                  {listGroupItem('Amount', getParseFloat(props.transaction?.mamount || 0))}
                  {listGroupItem('Time',props.transaction?.incommingtime)}
                </div>
              }
            />
            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => <div className="list-group transaction-list">
                  {listGroupItem('Card Type', props.transaction?.cardtype)}
                  {listGroupItem('Card Holder', props.transaction?.cardholdername)}
                  {listGroupItem('Card Number', props.transaction?.scredit_card_num)}
                  {listGroupItem('Card Issuer Bank', props.transaction?.issuerbank)}
                  {listGroupItem("Customer's IP", props.transaction?.visitor_ip)}
                </div>
              }
            />
          </Colxx>
        </Row>
      </>
    );
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalHeaderContent={modalHeaderContent}
        modalTitle="Transaction Detail"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default TransactionDetail;
