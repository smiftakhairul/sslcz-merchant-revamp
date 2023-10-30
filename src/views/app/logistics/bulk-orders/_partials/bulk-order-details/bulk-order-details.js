import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import BulkOrderDetailsList from "./bulk-order-details-list";
import SearchBulkOrderDetails from "./search-bulk-order-details";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.ssl-logi-bulkorder-details-list"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchBulkOrderDetails onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <BulkOrderDetailsList searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
