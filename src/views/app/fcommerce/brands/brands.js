import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { Fragment, useState } from "react";
import { Row } from "reactstrap";
import BrandDetails from "./_partials/brand-details";
import CreateBrandBtn from "./_partials/create-brand-btn";

const JumbotronUi = (props) => {
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.sslFcommerce"
          match={props.match}
          actionContent={() => {return <div className="">
            <CreateBrandBtn
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
            />
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <BrandDetails forceUpdate={forceUpdate} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
