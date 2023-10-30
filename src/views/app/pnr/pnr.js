import React, {Fragment, useState} from 'react';
import {
    Row,
} from "reactstrap";
import {Colxx, Separator} from "../../../components/bootstrap/custom-bootstrap";
import Breadcrumb from "../../../components/navs/breadcrumb";
import AmendTransaction from './_partials/amend-transaction';
import PreviousPnr from './_partials/previous-pnr';
import PnrDetails from './_partials/pnr-details';
import Transaction from './_partials/transaction';
import BreadcrumbWrapper from 'containers/wrapper/breadcrumb-wrapper';

const JumbotronUi = (props) => {
    const [type, setType] = useState(null);
    const [searchData, setSearchData] = useState({});

    return (
        <Fragment>
            <Row>
                <BreadcrumbWrapper
                    heading="menu.sslPnrTitle"
                    match={props.match}
                />
            </Row>
            <Row>
                <Colxx xxs="6">
                    <AmendTransaction
                        onSubmitHandler={setSearchData}
                        setType={setType}
                    />
                </Colxx>
                <Colxx xxs="6">
                    <PreviousPnr
                        onSubmitHandler={setSearchData}
                        setType={setType}
                    />
                </Colxx>
            </Row>
            {
                type === 'AMEND_TRX' 
                    ? <Row>
                        <Colxx xxs="12">
                            <Transaction
                                searchData={searchData}
                            />
                        </Colxx>
                    </Row>
                    : ''
            }
            {
                type === 'OLD_PNR' 
                    ? <Row>
                        <Colxx xxs="12">
                            <PnrDetails
                                searchData={searchData}
                            />
                        </Colxx>
                    </Row>
                    : ''
            }
        </Fragment>
    );
}

export default JumbotronUi;
