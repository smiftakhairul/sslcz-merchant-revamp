import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row } from "reactstrap";
import BulkOrderList from "./_partials/bulk-order-list";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.ssl-logi-bulkorder-list"
          match={props.match}
          actionContent={() => {return <div className="">
            <Link className="btn btn-primary btn-xs" to={'/app/logistics/bulk-order/upload'}>
                <i className="iconsminds-add"></i> Bulk Upload
            </Link>
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <BulkOrderList searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
