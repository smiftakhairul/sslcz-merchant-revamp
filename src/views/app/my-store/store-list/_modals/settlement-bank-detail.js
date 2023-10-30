import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";

const SettlementBankDetail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <div className="list-group transaction-list">
              {listGroupItem('Store ID', props.store?.strid)}
              {listGroupItem('Store Name', props.store?.store_name)}
              {listGroupItem('Account Payee', props.store?.payment_bank_acct_name)}
              {listGroupItem('Bank Name', props.store?.payment_bank_name )}
              {listGroupItem('Branch Name', props.store?.payment_bank_br_name )}
              {listGroupItem('Account No', props.store?.payment_acct_no )}
              {listGroupItem('Route No', props.store?.payment_eftn_no )}
            </div>
          </Colxx>
        </Row>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Settlement Bank Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default SettlementBankDetail;
