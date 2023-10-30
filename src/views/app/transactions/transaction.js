import React, { Fragment, useState } from "react";
import { Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import TransactionSummary from "./_partials/transaction-summary";
import TransactionDetails from "./_partials/transaction-details";
import SymbolMeaning from "./_partials/symbol-meaning";
import SearchTransaction from "./_partials/search-transaction";
import { getSearchParams } from "helpers/form";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.transactions"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchTransaction onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <TransactionSummary searchData={searchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <TransactionDetails searchData={searchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SymbolMeaning />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
