import ModalWrapper from "containers/wrapper/modal-wrapper";
import { displayHtmlMessage, listGroupItem } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";

const OfferDetail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <div className="list-group transaction-list">
                {listGroupItem('Offer Name', props.offer?.offer_name)}
                {listGroupItem('Status', parseInt(props.offer?.status || 0) && props.offer?.OfferInRunning === 'Running' 
                                ? <span className="text-success">Running</span> 
                                : <span className="text-danger">End</span>)}
                {listGroupItem('Message on GW Page', displayHtmlMessage(props.offer?.display_message))}
                {listGroupItem('Message on Success Page', displayHtmlMessage(props.offer?.disc_msg_at_succ_pag))}
                {listGroupItem('To Display Message', parseInt(props.offer?.is_display_mesg || 0) 
                                ? <span className="text-success">On</span>
                                : <span className="text-danger">Off</span>)}
                {listGroupItem('To Display Popup', parseInt(props.offer?.display_popup || 0) 
                                ? <span className="text-success">On</span>
                                : <span className="text-danger">Off</span>)}
                {listGroupItem('Terms & Conditions URL', props.offer?.link_t_c)}
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
        modalTitle="Offer Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default OfferDetail;
