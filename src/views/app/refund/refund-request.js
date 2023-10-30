import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { checkPermission } from "helpers/permissions";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import { Button, Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import RefundDetails from "./_partials/refund-details";
import RefundStats from "./_partials/refund-stats";
import SearchRefund from "./_partials/search-refund";

const JumbotronUi = (props) => {
  let history = useHistory();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.refund-request"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <RefundStats searchData={searchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchRefund onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <RefundDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
