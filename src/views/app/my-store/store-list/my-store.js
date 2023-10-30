import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import { Button, Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../components/navs/breadcrumb";
import SearchStore from "./_partials/search-store";
import StoreDetails from "./_partials/store-details";

const JumbotronUi = (props) => {
  let history = useHistory();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.my-store"
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
