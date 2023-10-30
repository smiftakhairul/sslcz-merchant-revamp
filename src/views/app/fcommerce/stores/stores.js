import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import SearchStore from "./_partials/search-store";
import StoreDetails from "./_partials/store-details";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.sslFcommerce"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchStore onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <StoreDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
