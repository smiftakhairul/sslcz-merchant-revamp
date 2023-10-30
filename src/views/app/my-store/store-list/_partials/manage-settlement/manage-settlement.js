import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import {
  Colxx,
  Separator
} from "../../../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../../../components/navs/breadcrumb";
import CreateSettlementRequest from "./create-settlement-request";
import SearchSettlement from "./search-settlement";
import SettlementDetails from "./settlement-details";

const JumbotronUi = (props) => {
  const { stid } = useParams();
  const [searchData, setSearchData] = useState(getSearchParams());
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.manage-settlement"
          match={props.match}
          actionContent={() => {return <div className="">
            <CreateSettlementRequest
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
              stid={stid}
            />
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchSettlement onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SettlementDetails stid={stid} searchData={searchData} forceUpdate={forceUpdate} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
