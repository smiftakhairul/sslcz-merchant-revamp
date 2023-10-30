import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { ButtonGroup, Row } from "reactstrap";
import { Colxx, Separator } from "../../../../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../../../../components/navs/breadcrumb";
import CreateStoreDiscount from "./create-store-discount";
import DiscountDetails from "./discount-details";

const JumbotronUi = (props) => {
  const {stid} = useParams();
  const [searchData, setSearchData] = useState(getSearchParams());
  const [forceUpdate, setForceUpdate] = useState(false);

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.discounts"
          match={props.match}
          actionContent={() => {return stid ? <div className="">
            <CreateStoreDiscount
              forceUpdate={forceUpdate}
              setForceUpdate={setForceUpdate}
              searchData={searchData}
              stid={stid}
            />
          </div> : ''}}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <DiscountDetails
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
