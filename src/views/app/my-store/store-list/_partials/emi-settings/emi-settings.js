import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../../../components/navs/breadcrumb";
import SetEmiSettings from "./set-emi-settings";

const JumbotronUi = (props) => {
  const {stid} = useParams();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.emi-settings"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SetEmiSettings
            stid={stid}
            searchData={searchData}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
