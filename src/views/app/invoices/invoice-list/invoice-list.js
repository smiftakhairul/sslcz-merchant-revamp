import { invBaseUrl } from "constants/default-values";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { checkPermission } from "helpers/permissions";
import { Fragment, useState } from "react";
import { Row, UncontrolledAlert } from "reactstrap";
import {
  Colxx
} from "../../../../components/bootstrap/custom-bootstrap";
import CreateInvoiceBtn from "./_partials/create-invoice-btn";
import InvoiceTable from "./_partials/invoice-details";
import SearchInvoice from "./_partials/search-invoice";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());
  console.log(searchData.inv_ref_id);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.invoice-list"
          match={props.match}
          actionContent={() => {return checkPermission(false, 'merchantInvoice', 'add') ? <div className="">
            <CreateInvoiceBtn />
          </div> : ''}}
        />
      </Row>
      {searchData.inv_ref_id && 
        <Row>
          <Colxx xxs="12">       
              {searchData.approval_process == 1 ? 
                <UncontrolledAlert>
                  Invoice Generated Successfully. Click <a href={`${invBaseUrl}/submit-invoice/${searchData.inv_ref_id}`} target="_blank" rel="noreferrer" className="text-primary">Here</a> to redirect to pay url
                </UncontrolledAlert> 
                : searchData.approval_process == 0 && searchData.email_status_code == 200 ?
                <UncontrolledAlert>
                  Invoice generated successfully and email sent. Click <a href={`${invBaseUrl}/submit-invoice/${searchData.inv_ref_id}`} target="_blank" rel="noreferrer" className="text-primary">Here</a> to redirect to pay url
                </UncontrolledAlert>
                : searchData.approval_process == 0 && searchData.email_status_code == 400 &&
                <UncontrolledAlert>
                  Invoice generated successfully, but failed to send the email. Please sent the email. Click <a href={`${invBaseUrl}/submit-invoice/${searchData.inv_ref_id}`} target="_blank" rel="noreferrer" className="text-primary">Here</a> to redirect to pay url
                </UncontrolledAlert>
              }
          </Colxx>
        </Row>
      }
      <Row>
        <Colxx xxs="12">
          <SearchInvoice onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <InvoiceTable searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
