import { Colxx } from "components/bootstrap/custom-bootstrap";
import { NotificationManager } from "components/notifications";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import { getParseFloat, listGroupItem } from "helpers/common";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Table } from "reactstrap";
import apiClient from "services/axios";

const CreateInvoice = (props) => {
 // console.log(props.invoiceFormData);
  //const [isFormLoading,setIsFormLoading] = useState(false);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(props.isLoading);


  let convertAmount = props.invoiceFormData.total_amount.map(amount => parseFloat(amount));
  let initialTotalAmount = 0;

  let totalAmount = convertAmount.reduce((previousValue, currentValue) => previousValue + currentValue, initialTotalAmount);

  let grandTotalAmount = totalAmount;
  let vatInPercent = 0;
  let vatInAmt = 0;
  let deliveryCharge = 0;
  let discountAmountInPercent = 0;
  let discountAmountInAmt = 0;
  let tdsInPercent = 0;
  let tdsInAmt = 0;

  let vatRegex = parseInt(props.invoiceFormData.vat.replace(/\D/g, ""));
  let discountAmountRegex = parseInt(props.invoiceFormData.discount_amount.replace(/\D/g, ""));
  let tdsAmountRegex = parseInt(props.invoiceFormData.tds.replace(/\D/g, ""));

  if(props.invoiceFormData.vat){
    if (props.invoiceFormData.vat.match(/%/)){ 
      vatInPercent = ((totalAmount*vatRegex)/100);
      grandTotalAmount = grandTotalAmount + vatInPercent 
    }else{
      vatInAmt = vatRegex;
      grandTotalAmount = grandTotalAmount + vatInAmt
    }
  }

  if(props.invoiceFormData.convenience_fee){
    deliveryCharge = parseInt(props.invoiceFormData.convenience_fee);
    grandTotalAmount = grandTotalAmount + deliveryCharge;
  }

  if(props.invoiceFormData.discount_amount){
    if (props.invoiceFormData.discount_amount.match(/%/)){ 
      discountAmountInPercent = ((totalAmount*discountAmountRegex)/100);
      grandTotalAmount = grandTotalAmount - discountAmountInPercent
    }else{
      discountAmountInAmt = discountAmountRegex;
      grandTotalAmount = grandTotalAmount - discountAmountInAmt;
    }
  }

  if(props.invoiceFormData.tds){
    if (props.invoiceFormData.tds.match(/%/)){ 
      tdsInPercent = ((totalAmount*(tdsAmountRegex/100))/((100-tdsAmountRegex)/100)); 
      grandTotalAmount = grandTotalAmount + tdsInPercent
    }else{
      tdsInAmt = tdsAmountRegex;
      grandTotalAmount = grandTotalAmount + tdsInAmt;
    }
  }
  

  const modalContent = () => {
    return (
      <>
        <Row>
          <Colxx md="12">
            <div className="list-group transaction-list">
              {listGroupItem(props?.invoiceData.prim_key_alias || "Reference/Order ID", props.invoiceFormData.acct_no)}
              {listGroupItem("Customer Name", props.invoiceFormData.cus_name)}
              {listGroupItem("Email", props.invoiceFormData.cus_email)}
              {listGroupItem("Mobile", props.invoiceFormData.cus_phone)}
              {listGroupItem("Creation Date", props.invoiceFormData.invoice_date)}
              {listGroupItem("Currency", props.invoiceFormData.currency || "BDT")}
              {listGroupItem("National ID/ Passport No/ Customer ID", props.invoiceFormData.passport_nid || "N/A")}
              {listGroupItem("Customer/Shipping Address", props.invoiceFormData.cus_add1)}
            </div>
            <div className="mt-2">
              <Table responsive>
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.invoiceFormData.service_packages.map((service,index)=>{
                      return(
                        <tr key={index}>
                          <td>{index+1}</td>
                          <td>{service}</td>
                          <td>{props.invoiceFormData.qty[index]}</td>
                          <td>{getParseFloat( props.invoiceFormData.amount[index])}</td>
                          <td>{getParseFloat(props.invoiceFormData.total_amount[index])}</td>
                        </tr>
                      )
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>Total</td>
                      <td>{getParseFloat(totalAmount)}</td>
                    </tr>
                    {props.invoiceFormData.vat ?
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        {props.invoiceFormData.vat.match(/%/) ?
                        <>
                          <td>{`Vat (${props.invoiceFormData.vat})`}</td>
                          <td>{getParseFloat(vatInPercent)}</td>
                        </> 
                        :
                        <>
                          <td>Vat</td>
                          <td>{getParseFloat(vatInAmt)}</td>
                        </>}
                      </tr> : null                   
                    }
                    {props.invoiceFormData.convenience_fee ? 
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Delivery Charge</td>
                        <td>{getParseFloat(deliveryCharge)}</td>
                      </tr> : null                  
                    }
                    {props.invoiceFormData.discount_amount ?
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        {props.invoiceFormData.discount_amount.match(/%/) ?
                        <>
                          <td>{`Discount (${props.invoiceFormData.discount_amount})`}</td>
                          <td>{getParseFloat(discountAmountInPercent)}</td>
                        </> 
                        :
                        <>
                          <td>Discount</td>
                          <td>{getParseFloat(discountAmountInAmt)}</td>
                        </>}
                      </tr> : null                   
                    }
                    {props.invoiceFormData.tds ?
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        {props.invoiceFormData.tds.match(/%/) ?
                        <>
                          <td>{`TDS (${props.invoiceFormData.tds})`}</td>
                          <td>{getParseFloat(tdsInPercent)}</td>
                        </> 
                        :
                        <>
                          <td>TDS</td>
                          <td>{getParseFloat(tdsInAmt)}</td>
                        </>}
                      </tr> : null                   
                    }                     
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td><strong>Grand Total</strong></td>
                      <td><strong>{getParseFloat(grandTotalAmount)}</strong></td>
                  </tr>       
                  </tbody>                    
              </Table>
            </div>
          </Colxx>
        </Row>
      </>
    )
  }

  const createInvoice = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    let params = {};
    let body = {...props.invoiceFormData, ...{refer_unique_id: props.id}};
    
    try {
        await apiClient('createInvoice', params, body).then((response) => {
            if (response.data.code === 200 || response.data.status === "SUCCESS") {
                // NotificationManager.success(response.data.data.invoice_response.message || 'Invoice successfully created.', 'Success!');
               // document.getElementById('createInvoiceForm').reset();
                props.setProductItemIndex([{index: 0, show: true}]);
                history.push(`/app/invoice/list?inv_ref_id=${response.data.data.invoice_response.invoice_id || ''}&approval_process=${response.data.data.invoice_response.approval_process || ''}&email_status_code=${response.data.data.invoice_response.sent_email_status || ''}`)
            } else {
                NotificationManager.error(response.data.data?.invoice_response?.message || 'Invoice creation failed, please try again.', 'Error!');
            }
        });
    } catch (error) {
        console.log(error);
    }
    setIsLoading(false);
};
    return (
        <>
          <ModalWrapper
            isOpen={props.isOpen}
            toggle={props.toggle}
            modalTitle="Summary of Invoice"
            isLoading={isLoading}
            // modalHeaderContent={headerContent}
            modalContent={modalContent}
            formEnabled={true}
            onFormSubmit={createInvoice}
            formId="createInvoiceForm"
            formSubmitTitle="Generate and Send Invoice"
          />
        </>
      );
};

export default CreateInvoice;