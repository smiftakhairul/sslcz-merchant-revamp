import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem } from "helpers/common";
import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import { Colxx } from "../../../../../../components/bootstrap/custom-bootstrap";

const GenerateQR = (props) => {
    const [qrInfo,setQrInfo] = useState({})
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        getTerminalList()
    },[])

    const getTerminalList = async () => {
        setIsLoading(true);
        
        let body = {...{stid:props.terminal.stid},...{terminal_uid:props.terminal.terminal_uid} };
    
        try {
          await apiClient("generateQRStrategy", {}, body).then((response) => {
            if (response.data.code === 200 || response.data.status === "SUCCESS") {
              setQrInfo(response.data.data?.qr_info || {});
            }
          });
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
      };

    const bodyContent = () => {
      return (
      <>
        <img src={qrInfo?.emvco_payload} alt="QR Code"/>
        <a href="" target="_blank" rel="noreferrer" className="mb-0 display-8 text-primary d-block">Click Here to Download the QR</a>
      </>
      )
    }

  const modalContent = () => {
    return (
      <React.Fragment>
        <Row>
          <Colxx md="12">
            <CardWrapper
              headerTitle="Payment Description"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <div className="row">
                  <div className="col-md-12">
                    <div className="list-group transaction-list">
                      {listGroupItem('Store Name',qrInfo.store_name)}
                      {listGroupItem('QR for Payment',null,5,7,false,bodyContent)}
                    </div>
                  </div>
                </div>
              )}
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
        modalTitle="QR Payment Options"
        isLoading={isLoading}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default GenerateQR;
