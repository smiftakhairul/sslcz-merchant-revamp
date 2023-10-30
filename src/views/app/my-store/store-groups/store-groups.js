import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Button, Row } from "reactstrap";
import { Colxx, Separator } from "../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../components/navs/breadcrumb";
import CreateStoreGroup from "./_partials/create-store-group";
import SearchStoreGroup from "./_partials/search-store-group";
import StoreGroupDetails from "./_partials/store-group-details";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.store-groups"
          match={props.match}
          actionContent={() => {return <div className="">
            <CreateStoreGroup
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchStoreGroup onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <StoreGroupDetails
            searchData={searchData}
            forceUpdate={forceUpdate}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
