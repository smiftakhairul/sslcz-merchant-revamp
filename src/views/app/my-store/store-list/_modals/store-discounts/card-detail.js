import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import moment from "moment";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";

const CardDetail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <CardWrapper
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('VISA', parseInt(props.offer?.gw_visa || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('MASTER', parseInt(props.offer?.gw_visa || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('AMEX', parseInt(props.offer?.gw_amex || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('Other Card', parseInt(props.offer?.gw_other_card || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('Internet Banking', parseInt(props.offer?.gw_ib || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('Mobile Banking', parseInt(props.offer?.gw_mb || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('Wallet', parseInt(props.offer?.gw_wallet || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                      {listGroupItem('Coupon Discount', parseInt(props.offer?.is_coupon_enable || 0)
                                      ? <span className="text-success">On</span> 
                                      : <span className="text-danger">Off</span>)}
                    </div>
                  </div>
                </div>}
            
            />

            <CardWrapper
              headerDisabled={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Specific BIN', props.offer?.bin_list)}
                      {listGroupItem('Card Type (Like - VISA, MASTER, AMEX)', props.offer?.card_type)}
                      {listGroupItem('Campaign Code', props.offer?.campaign_code)}
                      {listGroupItem('Whether Support EMI', parseInt(props.offer?.is_emi_allowed || 0) 
                                  ? <span className="">Support EMI Transaction</span>
                                  : <span className="">EMI is Not Allowed</span>)}
                      {listGroupItem('Campaign Created At', props.offer?.created_on
                                  ? moment(props.offer?.created_on, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString()
                                  : "")}
                      {listGroupItem('Campaign Created By', props.offer?.created_by_uname)}
                      {listGroupItem('Campaign Updated At', props.offer?.updated_on
                                  ? moment(props.offer?.updated_on, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString()
                                  : "")}
                      {listGroupItem('Campaign Updated By', props.offer?.updated_by_uname)}
                    </div>
                  </div>
                </div>}
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
        modalTitle="Card Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default CardDetail;
