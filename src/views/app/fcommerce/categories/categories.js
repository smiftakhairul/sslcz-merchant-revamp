import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import CategoryDetails from "./_partials/category-details";
import CreateCategoryBtn from "./_partials/create-category-btn";

const JumbotronUi = (props) => {
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.sslFcommerce"
          match={props.match}
          actionContent={() => {return <div className="">
            <CreateCategoryBtn
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <CategoryDetails forceUpdate={forceUpdate}/>
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
