import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import { Button, Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import PaymentLinkDetails from "./_partials/payment-link-details";
import SearchPaymentLink from "./_partials/search-payment-link";

const JumbotronUi = (props) => {
  let history = useHistory();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.payment-link-list"
          match={props.match}
          actionContent={() => {return <div className="">
            <Button
              className="btn-primary btn-xs"
              onClick={() => history.push("/app/payment/new-link")}
            >
              <i className="iconsminds-add"></i> Create Payment Link
            </Button>
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchPaymentLink onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <PaymentLinkDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
