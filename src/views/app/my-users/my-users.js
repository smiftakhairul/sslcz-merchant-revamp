import React, { Fragment, useState } from "react";
import { Button, Row } from "reactstrap";
import {
  Colxx,
  Separator,
} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import { useHistory } from "react-router";
import SearchUser from "./_partials/search-users";
import UserDetails from "./_partials/user-details";
import { getSearchParams } from "helpers/form";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";

const JumbotronUi = (props) => {
  let history = useHistory();
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.my-users"
          match={props.match}
          actionContent={() => {return <div className="">
            <Button
              className="btn-primary btn-xs"
              onClick={() => history.push("/app/my-users/new-user")}
            >
              <i className="iconsminds-add"></i> Create User
            </Button>
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchUser onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <UserDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
