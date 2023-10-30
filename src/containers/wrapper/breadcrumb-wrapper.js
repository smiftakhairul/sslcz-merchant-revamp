import { Colxx, Separator } from "components/bootstrap/custom-bootstrap";
import React from "react";
import Breadcrumb from "../../components/navs/breadcrumb";

const BreadcrumbWrapper = (props) => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-between w-100 mx-3">
                <div>
                    <Breadcrumb heading={props.heading || ""} match={props.match} />
                </div>
                <div className="mt-2">
                    {props.actionContent ? props.actionContent() : ''}
                </div>
            </div>
            {/* <Colxx md="12" xxs="12">
                <Breadcrumb heading="menu.invoice-list" match={props.match} />
            </Colxx> */}
            {
                !props.disableSeparator
                    ? <Colxx xxs="12">
                        <Separator className="mb-5" />
                    </Colxx>
                    : ''
            }
        </React.Fragment>
    );
}
 
export default BreadcrumbWrapper;