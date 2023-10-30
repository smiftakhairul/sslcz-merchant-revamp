import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Row } from "reactstrap";
import {
  Colxx
} from "../../../../../../components/bootstrap/custom-bootstrap";
import SearchSubscription from "./search-qr";
import SubscriptionDetails from "./qr-details";

const JumbotronUi = (props) => {
  let history = useHistory();
  const { stid } = useParams();
  const [searchData, setSearchData] = useState(getSearchParams());
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.subscription"
          match={props.match}
          actionContent={() => {return <div className="">
            <Button
              className="btn-primary btn-xs"
              onClick={() => history.push(`/app/my-store/new-subscription/${stid}`)}
            >
              <i className="iconsminds-add"></i> Create New QR
            </Button>
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchSubscription onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <SubscriptionDetails
            stid={stid}
            searchData={searchData}
            forceUpdate={forceUpdate}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
