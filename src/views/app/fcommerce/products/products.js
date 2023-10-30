import { Colxx } from "components/bootstrap/custom-bootstrap";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useState } from "react";
import { Button, Row } from "reactstrap";
import ConnectFacebook from "./_partials/connect-facebook";
import ProductDetails from "./_partials/product-details";
import SearchProduct from "./_partials/search-product";

const JumbotronUi = (props) => {
  const [searchData, setSearchData] = useState(getSearchParams());

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.sslFcommerce"
          match={props.match}
          actionContent={() => {return <div className="">
            <Button className="btn-primary btn-xs">
                <i className="iconsminds-add"></i> Create Product
            </Button>
          </div>}}
        />
      </Row>
      <Row>
        <Colxx xxs="8">
          <SearchProduct onSubmitHandler={setSearchData} />
        </Colxx>
        <Colxx xxs="4">
          <ConnectFacebook />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <ProductDetails searchData={searchData} />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default JumbotronUi;
