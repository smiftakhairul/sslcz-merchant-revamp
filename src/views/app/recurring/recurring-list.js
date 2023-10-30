import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Row } from "reactstrap";
import {
  Colxx
} from "../../../components/bootstrap/custom-bootstrap";
import RecurringDetails from "./_partials/recurring-details";
import SearchRecurring from "./_partials/search-recurring";

const JumbotronUi = (props) => {
  let history = useHistory();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
            heading="menu.recurring-list"
            match={props.match}
            actionContent={() => {return <div className="">
              <Button
                className="btn-primary btn-xs"
                onClick={() => history.push("/app/recurring/new-recurring")}
              >
                <i className="iconsminds-add"></i> Create Recurring Configuration
              </Button>
            </div>}}
          />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchRecurring onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <RecurringDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
