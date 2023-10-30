import axios from "axios";
import { Colxx } from "components/bootstrap/custom-bootstrap";
import { ReactTableWithPaginationCard } from "components/table/table";
import { apiBaseUrl, invBaseUrl, securePayBaseUrl } from "constants/default-values";
import inputtedParameterColumns from "containers/column-definition/my-store/inputted-parameter-def";
import CardWrapper from "containers/wrapper/card-wrapper";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { listGroupItem, stringToJson } from "helpers/common";
import { useEffect, useState } from "react";
import { Button, Row } from "reactstrap";

const GetQRDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showIsCopiedLink, setShowIsCopiedLink] = useState(false);
  const [qrCodeSvg,setQrCodeSvg] = useState('');
  let inputtedParameterList = [];
  inputtedParameterList.push({
    parameter: "refer",
    reason: `Value ${props.subscription?.refe_id}- Must be provided`,
    mandatory: "Yes",
  });

  stringToJson(props.subscription?.t_fields).map((field) =>
    inputtedParameterList.push({
      parameter: field.name,
      reason: field.alias,
      mandatory: field.is_mandatory == 1 ? "Yes" : "No",
    })
  );

  if (props.subscription?.amount !== "") {
    inputtedParameterList.push({
      parameter: "amount",
      reason: "Amount",
      mandatory: "Yes",
    });
  }

  if (props.subscription?.currency !== "") {
    inputtedParameterList.push({
      parameter: "currency",
      reason: "Currency",
      mandatory: "Yes",
    });
  }

  if (props.subscription?.bill_query_url !== "") {
    inputtedParameterList.push({
      parameter: "bill_query_url",
      reason: "Bill Query API",
      mandatory: "No",
    });
  }
  if (
    props.subscription?.subscription_type === "subscribe" ||
    props.subscription?.subscription_type === "invoice"
  ) {
    if (props.subscription?.is_rec_cust === 0) {
      if (props.subscription?.cycle) {
        inputtedParameterList.push({
          parameter: "cycle",
          reason: "Cycle",
          mandatory: "Yes",
        });
      }
      if (props.subscription?.week !== "") {
        inputtedParameterList.push({
          parameter: "week",
          reason: "Week",
          mandatory: "No",
        });
      }

      if (props.subscription?.dayofmonth !== "") {
        inputtedParameterList.push({
          parameter: "dayofmonth",
          reason: "Day of the Month",
          mandatory: "No",
        });
      }

      if (props.subscription?.month !== "") {
        inputtedParameterList.push({
          parameter: "month",
          reason: "Month",
          mandatory: "No",
        });
      }
      inputtedParameterList.push({
        parameter: "max_cycle",
        reason: "Max Cycle",
        mandatory: "No",
      });
    }
  }

  const copyPaymentLink = () => {
    navigator.clipboard.writeText(
      `<a href= '${invBaseUrl}/invoice-form?refer=${props.subscription?.refe_id}' title='Pay Now'><img src='${securePayBaseUrl}/public/image/sslcommerzPay.png' alt='Pay Now' title='Pay Now'></a>`
    );
    setShowIsCopiedLink(true);
    setTimeout(() => {
      setShowIsCopiedLink(false);
    }, 1000);
  };

   useEffect(()=>{
    fetchQrCode()
   },[props.isOpen])

  const fetchQrCode = async () => {
    setIsLoading(true)
    try {
      const res = await axios.get(`${apiBaseUrl}/api/v1/generate-qr/${props.subscription?.refe_id}`)
      setQrCodeSvg(res.data?.slice(39)); 
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)  
  } 

  const bodyContent = () => {
    return (
    <>
      <img src={`data:image/svg+xml;base64,${Buffer.from(qrCodeSvg, 'utf8').toString('base64')}`} alt="Payment Link with QR"/>
      <a href="" target="_blank" rel="noreferrer" className="text-primary d-block">Click Here to Download the QR</a>
    </>
    )
  }

  const bodyContent2 = () => {
    return (
      <>
        <Button
          color="info"
          className="btn-xs mb-0 display-8"
          onClick={copyPaymentLink}
          disabled={showIsCopiedLink}
          title={`<a href= '${invBaseUrl}/invoice-form?refer=${props.subscription?.refe_id}' title='Pay Now'><img src='${securePayBaseUrl}/public/image/sslcommerzPay.png' alt='Pay Now' title='Pay Now'></a>`}
        >
          {showIsCopiedLink ? "Copied!" : "Copy the payment html and add it at your site"}
        </Button>
        <hr />
        <p className="mb-0 display-8 font-weight-bold">
          Example:
        </p>
        <a
          href={`${invBaseUrl}/invoice-form?refer=${props.subscription?.refe_id}`}
          target="_blank"
          title="Pay Now" rel="noreferrer"
        >
          <img
            src={`${securePayBaseUrl}/public/image/sslcommerzPay.png`}
            alt="Pay Now"
            title="Pay Now"
          />
        </a>
        <hr />   
      </>
    )
  }

  const modalContent = () => {
    return (
      <>
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
                      {props.subscription?.subscription_type === "once" && (
                        <>
                          {listGroupItem('QR for Payment Link',null,5,7,false,bodyContent)}
                          {listGroupItem('Payment Button',null,5,7,false,bodyContent2)}
                        </>
                      )}
                      {listGroupItem('Payment Title',props.subscription?.subscription_name)}
                      {listGroupItem('Payment Type',props.subscription?.subscription_type)}
                      {listGroupItem('Pay Button Name',props.subscription?.button_label)}
                      {listGroupItem('Top Message',props.subscription?.msg_on_top)}
                      {listGroupItem('Button Message',props.subscription?.msg_on_button)}
                    </div>
                  </div>
                </div>
              )}
            />
          </Colxx>
          <Colxx md="12" >
            <CardWrapper
              headerTitle="Inputted Parameters"
              toggleOn={false}
              isOpen={true}
              isDefaultHeader={true}
              footerEnabled={false}
              bodyContent={() => (
                <ReactTableWithPaginationCard
                  data={inputtedParameterList}
                  columnDefinition={inputtedParameterColumns}
                  defaultPageSize={inputtedParameterList.length}
                  serverSide={false}
                  disableSearch={false}
                  showPagination={false}
                />
              )}
            />         
          </Colxx>
        </Row>
      </>
    );
  };

  return (
    <>
      <ModalWrapper
        isOpen={props.isOpen}
        isLoading={isLoading}
        toggle={props.toggle}
        modalTitle="Payment Options"
        modalContent={modalContent}
      />
    </>
  );
};

export default GetQRDetails;
