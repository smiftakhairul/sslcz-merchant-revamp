import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../components/navs/breadcrumb";
import GatewayList from "./_partials/gateway-details";
import SearchGateways from "./_partials/search-gateways";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());
  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.gateways"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchGateways onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <GatewayList searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
