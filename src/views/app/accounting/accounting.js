import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import SearchAccounting from "./_partials/search-accounting";
import SettlementSummary from "./_partials/settlement-summary";
import UnsettlementSummary from "./_partials/unsettlement-summary";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.sslAccounting"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <UnsettlementSummary />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchAccounting onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SettlementSummary searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
