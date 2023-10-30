import ModalWrapper from "containers/wrapper/modal-wrapper";
import { getParseFloat, listGroupItem } from "helpers/common";
import moment from "moment";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";

const DiscountDetail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <div className="list-group transaction-list">
                  {listGroupItem('Acquirer Bank', props.offer?.gw_bname)}
                  {listGroupItem('Discount Rate', `${parseFloat(props.offer?.discount_perc || 0) * 100}%`)}
                  {listGroupItem('Discount Amount', getParseFloat(props.offer?.discount_amount || 0))}
                  {listGroupItem('No of Transaction by Same Card (only for CoF) or Cust Phone', props.offer?.no_same_card_used)}
                  {listGroupItem('Discount Based on Customer Mobile No.', props.offer?.is_cus_mobile ? 'Yes' : 'No')}
                  {listGroupItem('Total Discount Amount Allowed in Campaign Period', getParseFloat(props.offer?.allowed_dis_amt || 0))}
                  {listGroupItem('MAX Discount Amount Per Trans', getParseFloat(props.offer?.max_discount_amt || 0))}
                  {listGroupItem('Amount to display Offer', getParseFloat(props.offer?.max_amt_to_display_offer || 0))}
                  {listGroupItem('Customized Amount for offer (JSON)', getParseFloat(props.offer?.cust_offer_amt || 0))}
                  {listGroupItem('Offer Start', props.offer?.offer_start
                                ? moment(props.offer?.offer_start, "YYYY-MM-DD hh:mm:ss")
                                    .format("DD-MM-YYYY hh:mm A")
                                    .toString()
                                : "")}
                  {listGroupItem('Offer End', props.offer?.offer_end
                                    ? moment(props.offer?.offer_end, "YYYY-MM-DD hh:mm:ss")
                                        .format("DD-MM-YYYY hh:mm A")
                                        .toString()
                                    : "")}
                  {listGroupItem('Offer in Time', props.offer?.OfferInRunning === 'Running' ? 'Yes' : 'No')}
                  {listGroupItem('Status', parseInt(props.offer?.status || 0) ? 'Active' : 'De-active')}
                  {listGroupItem('Discount On Product Price', parseInt(props.offer?.disc_on_prod_price || 0)
                                ? <span className="text-success">On</span> 
                                : <span className="text-danger">Off</span>)}
                  {listGroupItem('Discount Price By Merchant', parseInt(props.offer?.disc_on_discount_field || 0)
                                ? <span className="text-success">On</span> 
                                : <span className="text-danger">Off</span>)}
                  {listGroupItem('Cashback Offer', parseInt(props.offer?.disc_on_cashback || 0)
                                ? <span className="text-success">On</span> 
                                : <span className="text-danger">Off</span>)}
                  {listGroupItem('Whether Support Dynamic Para', parseInt(props.offer?.is_dynamic_param || 0)
                                ? <span className="text-success">On</span> 
                                : <span className="text-danger">Off</span>)}
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
        modalTitle="Discount Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default DiscountDetail;
