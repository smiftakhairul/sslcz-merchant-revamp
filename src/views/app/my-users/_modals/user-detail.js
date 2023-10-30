import { Colxx } from "components/bootstrap/custom-bootstrap";
import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";

const UserDetail = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <CardWrapper
                headerTitle = 'Login Information'
                toggleOn={false}
                isDefaultHeader={true}
                bodyContent={() => 
                  <div className="row">
                    <div className="col-md-12">
                      <div className="list-group transaction-list">
                        {listGroupItem('User Login ID', props.transaction?.uname)}
                        {listGroupItem('Password', '-----')}
                        {listGroupItem('User Role', props.transaction?.display_name)}
                        {listGroupItem('Status', {
                                  1: <span className="text-success">Active</span>,
                                  0: <span className="text-danger">De-active</span>,
                                }[props.transaction?.status] || (
                                  <span className="text-warning">Unknown</span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />

              <CardWrapper
                headerTitle = 'Contact Information'
                toggleOn={false}
                isDefaultHeader={true}
                bodyContent={() => 
                  <div className="row">
                    <div className="col-md-12">
                      <div className="list-group transaction-list">
                        {listGroupItem('Name', `${props.transaction?.f_name} ${props.transaction?.l_name}` )}
                        {listGroupItem('Email', props.transaction?.email_addess)}
                        {listGroupItem('Mobile', props.transaction?.mobile_no)}
                        {listGroupItem('User Added By', props.transaction?.added_by )}
                        {listGroupItem('Added On', props.transaction?.created_on )}
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
        modalTitle="User Details"
        isLoading={props.isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default UserDetail;
