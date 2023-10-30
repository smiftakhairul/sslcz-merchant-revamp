import CardWrapper from "containers/wrapper/card-wrapper";
import {
  getParseFloat,
  getStatusColumnContentByNumber,
  listGroupItem
} from "helpers/common";
import moment from "moment";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import ModalWrapper from "../../../../containers/wrapper/modal-wrapper";

const PaymentLinkDetail = (props) => {
    const bodyContent = () => {
      return (
          <p className="mb-0 display-8">
              <a href="#." className="text-primary">Click to view</a>
          </p>
      )
    }

  const bodyContent2 = () => {
      return (
          <p className="mb-0 display-8">
              {getStatusColumnContentByNumber(props.transaction?.is_sat, 'Sat')}
              {getStatusColumnContentByNumber(props.transaction?.is_sun, 'Sun')}
              {getStatusColumnContentByNumber(props.transaction?.is_mon, 'Mon')}
              {getStatusColumnContentByNumber(props.transaction?.is_tue, 'Tue')}
              {getStatusColumnContentByNumber(props.transaction?.is_wed, 'Wed')}
              {getStatusColumnContentByNumber(props.transaction?.is_thu, 'Thu')}
              {getStatusColumnContentByNumber(props.transaction?.is_fri, 'Fri')}
          </p>
      )
  }
  const modalHeaderContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
            <p className="mb-0">
              <span className="text-muted display-7">
                {props.transaction.created_on
                  ? moment(props.transaction.created_on, "YYYY-MM-DD hh:mm:ss")
                      .format("DD-MM-YYYY hh:mm A")
                      .toString()
                  : ""}
                &nbsp;|&nbsp;
                {getParseFloat(props.transaction?.amount || 0)}
                {props.transaction?.currency || ""}
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
            <Colxx md="6">
              <CardWrapper
                  headerDisabled={true}
                  toggleOn={false}
                  bodyContent={() => 
                    <div className="row">
                      <div className="col-md-12">
                        <div className="list-group transaction-list">
                            {listGroupItem('Reference ID',props.transaction?.refe_id)}
                            {listGroupItem('Subscription Name',props.transaction?.subscription_name)}
                            {listGroupItem('SMS IPN',props.transaction?.sms_ipn)}
                            {listGroupItem('Subscription Type',props.transaction?.subscription_type)}
                            {listGroupItem('Reference ID',props.transaction?.refe_id)}
                            {listGroupItem('Reference ID',props.transaction?.refe_id)}
                        </div>
                      </div>
                    </div>
                  }
              />

              <CardWrapper
                  headerDisabled={true}
                  toggleOn={false}
                  bodyContent={() => 
                    <div className="row">
                      <div className="col-md-12">
                        <div className="list-group transaction-list">
                            {listGroupItem('Store',props.transaction?.store_id)}
                            {listGroupItem('Amount',getParseFloat(props.transaction?.amount || 0))}
                            {listGroupItem('Button Label',props.transaction?.button_label)}
                            {listGroupItem('Primary Key Alias',props.transaction?.prim_key_alias)}
                        </div>
                      </div>
                    </div>
                  }
              />

              <CardWrapper
                  headerDisabled={true}
                  toggleOn={false}
                  bodyContent={() => 
                    <div className="row">
                      <div className="col-md-12">
                        <div className="list-group transaction-list">
                            {listGroupItem('Delete', { 0: <span>No</span>,
                                                        1: <span>Yes</span>,
                                                    }[props.transaction?.is_delete] || <span>Unknown</span>)}
                            {listGroupItem('Amount Type',props.transaction?.amount_type)}
                            {listGroupItem('Amount List',props.transaction?.amount_list)}
                            {listGroupItem('Cycle',{ 0: <span>No</span>,
                                                    1: <span>Yes</span>,
                                                    }[props.transaction?.cycle] || <span>Unknown</span>)}
                            {listGroupItem('Days',null,5,7,false,bodyContent2 )}
                            {listGroupItem('Min',props.transaction?.min)}
                            {listGroupItem('Hour',props.transaction?.hour)}
                            {listGroupItem('Day of Month',props.transaction?.dayofmonth)}
                            {listGroupItem('Month',props.transaction?.month)}
                            {listGroupItem('Max Cycle',props.transaction?.max_cycle)}
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
                                {listGroupItem('Bill Query URL',props.transaction?.bill_query_url)}
                                {listGroupItem('IPN Listener URL',props.transaction?.ipn_listener_url)}
                                {listGroupItem('Pre Bill Query',props.transaction?.pre_bill_query)}
                                {listGroupItem('Message on Top',props.transaction?.msg_on_top)}
                                {listGroupItem('Message on Button',props.transaction?.msg_on_button)}
                                {listGroupItem('Rec Cust',{ 0: <span>No</span>,
                                                        1: <span>Yes</span>,
                                                        }[props.transaction?.is_rec_cust] || <span>Unknown</span>)}
                                {listGroupItem('Must Agree',{ 0: <span>No</span>,
                                                            1: <span>Yes</span>,
                                                    }[props.transaction?.is_must_agree] || <span>Unknown</span>)}
                                {listGroupItem('TNC URL',props.transaction?.url_tnc)}
                            </div>
                          </div>
                        </div>
                      }
                  />

                  <CardWrapper
                      headerDisabled={true}
                      toggleOn={false}
                      bodyContent={() => 
                        <div className="row">
                          <div className="col-md-12">
                            <div className="list-group transaction-list">
                                {listGroupItem('Banner URL',null,5,7,false,bodyContent)}
                                {listGroupItem('Product List',props.transaction?.product_list)}
                                {listGroupItem('Category Item',props.transaction?.item_category)}
                                {listGroupItem('Cart Support',{ 0: <span>No</span>,
                                                                1: <span>Yes</span>,
                                                        }[props.transaction?.is_support_cart] || <span>Unknown</span>)}
                                {listGroupItem('Invoice Reference',props.transaction?.invoice_ref)}
                                {listGroupItem('Send Mail',{ 0: <span>No</span>,
                                                            1: <span>Yes</span>,
                                                        }[props.transaction?.is_send_email] || <span>Unknown</span>)}
                                {listGroupItem('Left Site Background Color',props.transaction?.left_bk_color)}
                                {listGroupItem('Left Site Font Color',props.transaction?.left_ft_color)}
                                {listGroupItem('Right Site Background Color',props.transaction?.right_bk_color)}
                                {listGroupItem('Left Site Font Color',props.transaction?.right_ft_color)}
                            </div>
                          </div>
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
        modalTitle="Payment Link Detail"
        isLoading={props.isLoading}
        modalContent={modalContent}
        modalHeaderContent={modalHeaderContent}
      />
    </React.Fragment>
  );
};

export default PaymentLinkDetail;
