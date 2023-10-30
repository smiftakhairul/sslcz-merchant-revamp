import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import TrackTransaction from "./_partials/track-transaction";
import TransactionDetails from "./_partials/transaction-details";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.id-tracking"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <TrackTransaction onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <TransactionDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
