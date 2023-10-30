import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import ChargebackDetails from "./_partials/chargeback-details";
import ChargebackStats from "./_partials/chargeback-stats";
import SearchChargeback from "./_partials/search-chargeback";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.chargeback"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <ChargebackStats searchData={searchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchChargeback onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <ChargebackDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
