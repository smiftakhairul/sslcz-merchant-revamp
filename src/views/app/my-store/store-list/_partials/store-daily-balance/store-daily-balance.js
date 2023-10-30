import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Row } from "reactstrap";
import {
  Colxx
} from "../../../../../../components/bootstrap/custom-bootstrap";
import StoreDailyBalance from "./store-daily-balance-details";

const JumbotronUi = (props) => {
  const { strid } = useParams();
 

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.store-daily-balance"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <StoreDailyBalance strid={strid}  />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
