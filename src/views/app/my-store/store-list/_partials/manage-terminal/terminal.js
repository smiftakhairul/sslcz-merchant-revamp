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
import ManageTerminal from "./manage-terminal-details";
import SearchTerminal from "./search-terminal";

const JumbotronUi = (props) => {
  const { stid } = useParams();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.terminal"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchTerminal onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <ManageTerminal stid={stid} searchData={searchData}  />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
