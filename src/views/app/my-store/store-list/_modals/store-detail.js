import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../../components/bootstrap/custom-bootstrap";

const StoreDetail = (props) => {

  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <CardWrapper
              headerTitle='Store Information'
              isDefaultHeader={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Store ID', props.store?.strid)}
                      {listGroupItem('Store Name', props.store?.store_name)}
                      {listGroupItem('Base URL of Store', props.store?.store_url)}
                      {listGroupItem('Homepage of Store', props.store?.store_landing_url)}
                      {listGroupItem('Store Status', props.store?.store_status)}
                    </div>
                  </div>
                </div>
              }
            />
            
            <CardWrapper
              headerTitle='Contact Information'
              isDefaultHeader={true}
              toggleOn={false}
              bodyContent={() => 
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Name', `${props.store?.first_name} ${props.store?.last_name}`)}
                      {listGroupItem('Mailing Address', props.store?.company_address)}
                      {listGroupItem('Email', props.store?.contact_email)}
                      {listGroupItem('Mobile', props.store?.contact_mobile)}
                      {listGroupItem('Phone', props.store?.contact_telephone)}
                      {listGroupItem('Fax', props.store?.contact_fax)}
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
        modalTitle="Store Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default StoreDetail;
