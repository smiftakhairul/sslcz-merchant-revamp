import { getParseFloat, listGroupItem } from "helpers/common";
import moment from "moment";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import ModalWrapper from "../../../../containers/wrapper/modal-wrapper";

const RefundDetail = (props) => {

  const modalContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
            <div className="list-group transaction-list">
              {listGroupItem('Merchant Name', props.transaction?.company_name)}
              {listGroupItem('Store Name', props.transaction?.store_name)}
              {listGroupItem('Store ID', `${props.transaction?.strid} - ${props.transaction?.store_url}` )}
              {listGroupItem('Homepage of store', props.transaction?.store_landing_url)}
              {listGroupItem('Bank Name', props.transaction?.cardtype)}
              {listGroupItem('Transaction ID', props.transaction?.transaction_id)}
              {listGroupItem('Transaction Date', props.transaction?.incommingtime ? moment(props.transaction?.incommingtime, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : "")}
              {listGroupItem('Transaction Amount', getParseFloat(props.transaction?.mamount || 0))}
              {listGroupItem('Refund Amount', getParseFloat(props.transaction?.refund_amt || 0))}
              {listGroupItem('Refund Reference ID', props.transaction?.refund_ref_id)}
              {listGroupItem('Merchant Reference Code', props.transaction?.merchant_ref_id)}
              {listGroupItem('Request Remarks', props.transaction?.request_remarks)}
              {listGroupItem('Requested On', props.transaction?.request_on ? moment(props.transaction?.request_on, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : "")}
              {listGroupItem('Requested By', props.transaction?.req_uname)}
              {listGroupItem('Request Status', {
                        1: <span className="text-success">Success</span>,
                        0: <span className="text-danger">Cancelled</span>,
                        2: <span className="text-info">Processing</span>,
                      }[props.transaction?.request_status] || (
                        <span className="text-danger">Unknown</span>
              ))}

              {
                props.transaction?.approved_on && props.transaction?.approved_on !== '0000-00-00 00:00:00'
                  ? <React.Fragment>
                      {listGroupItem('Approval Remarks', props.transaction?.approved_remarks)}
                      {listGroupItem('Approved On', props.transaction?.approved_on ? moment(props.transaction?.approved_on, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : "")}
                      {listGroupItem('Approved By', props.transaction?.apr_uname)}
                      {listGroupItem('Approval Status', {
                                3: <span className="text-secondary">Initiate</span>,
                                2: <span className="text-info">Processing</span>,
                                1: <span className="text-success">Success</span>,
                                0: <span className="text-danger">Cancelled</span>,
                              }[props.transaction?.approved_status] || (
                                <span className="text-danger">Unknown</span>
                      ))}
                    </React.Fragment>
                  : ''
              }

              {
                props.transaction?.confirmed_on && props.transaction?.confirmed_on !== '0000-00-00 00:00:00'
                  ? <React.Fragment>
                      {listGroupItem('Confirmation Remarks', props.transaction?.confirmed_remarks)}
                      {listGroupItem('Confirmed On', props.transaction?.confirmed_on ? moment(props.transaction?.confirmed_on, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : "")}
                      {listGroupItem('Confirmed By', props.transaction?.con_uname)}
                      {listGroupItem('Approval Status', {
                                3: <span className="text-secondary">Initiate</span>,
                                2: <span className="text-info">Processing</span>,
                                1: <span className="text-success">Success</span>,
                                0: <span className="text-danger">Cancelled</span>,
                              }[props.transaction?.confirmed_status] || (
                                <span className="text-danger">Unknown</span>
                      ))}
                    </React.Fragment>
                  : ''
              }
            </div>
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
        modalTitle="Refund Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default RefundDetail;
