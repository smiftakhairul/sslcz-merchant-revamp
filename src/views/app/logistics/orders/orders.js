import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.ssl-logi-bulkorder-list"
          match={props.match}
        />
      </Row>
      {/* <Row>
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
      </Row> */}
    </Fragment>
  );
};

export default JumbotronUi;
