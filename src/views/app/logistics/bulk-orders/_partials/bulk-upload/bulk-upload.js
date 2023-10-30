import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import FileBulkUpload from "./_partials/file-bulk-upload";
import OrderLocation from "./_partials/order-location";
import SearchBulkUpload from "./_partials/search-bulk-upload";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.ssl-logi-bulk-upload"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchBulkUpload searchData={searchData} />
        </Colxx>
        <Colxx xxs="12">
          <FileBulkUpload searchData={searchData} />
        </Colxx>
        <Colxx xxs="12">
          <OrderLocation searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
