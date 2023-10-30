import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import {
  getBinInfo,
  getModalHeaderStatusColumnContent,
  getParseFloat,
  listGroupItem,
  titleCase
} from "helpers/common";
import moment from "moment";
import React from "react";
import { useHistory } from "react-router-dom";
import { Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";

const TransactionDetail = (props) => {
  const history = useHistory();

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
      <React.Fragment>
        <Row>
          <Colxx md="6">
            <CardWrapper
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Transaction ID', props.transaction?.mtxnid)}
                      {listGroupItem('SSL ID', props.transaction?.sslid)}
                      {listGroupItem('Bank ID', props.transaction?.banksslid)}
                      {listGroupItem('Bank Gateway', props.bankList?.find((item) => item.bid === props.transaction?.bid)?.bname)}
                    </div>
                  </div>
                </div>
              }
            />

            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Store', props.transaction?.strid)}
                      {listGroupItem('Amount', getParseFloat(props.transaction?.mamount || 0))}
                      {
                        props.transaction.t_mamount &&
                        props.transaction.t_mamount !== null &&
                        parseFloat(props.transaction.t_mamount) !== parseFloat(props.transaction.mamount)
                          ? <>
                            {listGroupItem('Request Amount', getParseFloat(props.transaction?.t_mamount || 0))}
                            {listGroupItem('Discount', getParseFloat(
                              parseFloat(props.transaction?.t_mamount || 0) -
                              parseFloat(props.transaction?.mamount || 0)
                            ))}
                          </>
                          : ''
                      }
                      {listGroupItem('Charges', getParseFloat(
                        parseFloat(props.transaction?.sslportion || 0) +
                        parseFloat(props.transaction?.bankportion || 0)
                      ))}
                      {
                        props.transaction.disct_amount &&
                        props.transaction.disct_amount !== null
                          ? listGroupItem('Discount Charge', getParseFloat(props.transaction?.disct_amount || 0))
                          : ''
                      }
                    </div>
                  </div>
                </div>
              }
            />

            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Card Type', props.transaction?.cardtype)}
                      {listGroupItem('Card Holder', props.transaction?.cardholdername)}
                      {listGroupItem('Card Number', props.transaction?.scredit_card_num)}
                      {listGroupItem('Card Issued Bank', getBinInfo(
                        props.transaction?.issuerbank)?.bin_info_bank + 
                        " " +
                        getBinInfo(props.transaction?.issuerbank)?.bin_info_country
                      )}
                      {listGroupItem("Customer's IP", props.transaction?.visitor_ip)}
                    </div>
                  </div>
                </div>
              }
            />
          </Colxx>

          <Colxx md="6" className="second-col">
            <CardWrapper
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Risk Transaction', props.transaction.is_risk && Number(props.transaction.is_risk) === 1 ? (
                        <span className="text-danger">Yes</span>
                      ) : (
                        <span className="text-success">No</span>
                      ))}
                      {
                        props.transaction.is_risk &&
                        Number(props.transaction.is_risk) === 1
                          ? listGroupItem('Risk Reason', props.transaction?.risk_desc)
                          : ''
                      }
                      {listGroupItem('Directed To Bank', props.transaction?.bankgoingtime
                        ? moment(
                            props.transaction?.bankgoingtime,
                            "YYYY-MM-DD hh:mm:ss"
                          )
                            .format("DD-MM-YYYY hh:mm A")
                            .toString()
                        : ""
                      )}
                      {listGroupItem('Returned From Bank', props.transaction?.bankretime
                        ? moment(
                            props.transaction?.bankretime,
                            "YYYY-MM-DD hh:mm:ss"
                          )
                            .format("DD-MM-YYYY hh:mm A")
                            .toString()
                        : ""
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            {
              (parseFloat(props.transaction.other_charge || 0) > 0 || props.transaction.emi_installment) && 
              props.transaction.emi_desc === 'EMI CANCELLED'
                ? <CardWrapper
                    className="mt-3"
                    headerDisabled={true}
                    toggleOn={false}
                    bodyContent={() => 
                      <div className="row">
                        <div className="col-md-12">
                          <div className="list-group transaction-list">
                            {listGroupItem('EMI Charge', getParseFloat(props.transaction?.other_charge || 0))}
                            {listGroupItem('EMI Installment', props.transaction?.emi_installment)}
                            {listGroupItem('EMI Package', props.transaction?.emi_desc)}
                          </div>
                        </div>
                      </div>
                    }
                  />
                : ''
            }

            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {
                        props.transaction.notice === 'success'
                          ? listGroupItem('Refund Request', props.transaction.settlestatus === 'SETTLE_INITIAL' 
                              || props.transaction.settlestatus === 'SETTLE_APPROVED' 
                              || props.transaction.settlestatus === 'ESCROW_HOLD'
                                ? <a
                                    href={"/app/refund/new-request/" + props.transaction.tid}
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                  >
                                    Click here
                                  </a>
                                : <span>Refund is Blocked</span>
                            )
                          : ''
                      }
                      {/* {listGroupItem('Refund Request', props.transaction.refundstatus 
                        && props.transaction.refundstatus === "YES"
                          ? (
                            [
                              parseFloat(props.transaction?.mamount || 0) <=
                              parseFloat(
                                props.transaction?.refundamount || 0
                              ) ? (
                                <span>Full Refunded</span>
                              ) : (
                                <span>Partial Refunded</span>
                              ),
                            ]
                          ) : (
                            <span>No</span>
                          )
                      )} */}
                      {listGroupItem('Modify PNR', <a
                          href="/app/pnr"
                          target="_blank"
                          // onClick={(e) => {
                          //   e.preventDefault();
                          //   history.push("/app/pnr");
                          // }}
                          className="text-primary"
                        >
                          Click here
                        </a>
                      )}
                      {listGroupItem('Payment Settled', {
                          SETTLE_APPROVED: <span>Settled</span>,
                          SETTLE_INITIAL: (
                            <span>Settlement will be initiated</span>
                          ),
                        }[props.transaction?.settlestatus] || (
                          <span>
                            {props.transaction.settlestatus &&
                            props.transaction.settlestatus.length ? (
                              <span>
                                {titleCase(
                                  props.transaction.settlestatus.replace(
                                    "_",
                                    " "
                                  )
                                )}
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                        )
                      )}
                      {listGroupItem('Chargeback Request', props.transaction.chargebackstatus 
                        && props.transaction.chargebackstatus === "YES"
                          ? (
                            <span>Chargebacked</span>
                          ) : (
                            <span>No</span>
                          )
                      )}
                    </div>
                  </div>
                </div>
              }
            />

            <CardWrapper
              className="mt-3"
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('API Validated by Merchant', Number(props.transaction.validated) === 1 
                        ? (
                          <span>Yes</span>
                        ) : (
                          <span>No</span>
                        )
                      )}
                      {listGroupItem('Merchant Amount', getParseFloat(props.transaction?.currency_amount || 0))}
                      {listGroupItem('Merchant Currency', props.transaction?.currency_type)}
                      {listGroupItem('Discount Percentage', getParseFloat(
                        (parseFloat(props.transaction?.discunt_perct || 0) /
                          (parseFloat(props.transaction?.mamount || 0) +
                            parseFloat(props.transaction?.discunt_perct) ||
                            0)) *
                          100
                        ) + ' %'
                      )}
                      {listGroupItem('Discount Remarks', props.transaction?.discunt_perct_remrks)}
                    </div>
                  </div>
                </div>
              }
            />
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
        modalTitle="Transaction Details"
        modalHeaderContent={modalHeaderContent}
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default TransactionDetail;
