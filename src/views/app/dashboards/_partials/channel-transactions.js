import React from 'react';
import {
    Row,
    Card,
    CardBody,
    CardHeader,
    Nav,
    NavItem,
    TabContent,
    TabPane,
    Spinner
} from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import {
    LineChart,
} from "../../../../components/charts";
import {NavLink} from "react-router-dom";

const ChannelTransactions = (props) => {
    const tabHead = (title, activeClass, toggleClassValue) => {
        return <React.Fragment>
            <NavItem>
                <NavLink
                    className="nav-link"
                    activeClassName={activeClass ? 'active' : ''}
                    onClick={() => {
                        props.toggleFirstTab(toggleClassValue);
                    }}
                    to="#"
                >
                    {title}
                </NavLink>
            </NavItem>
        </React.Fragment>
    };

    const tabBody = (tabId, data) => {
        return <React.Fragment>
            <TabPane tabId={tabId}>
                <Row>
                    <Colxx sm="12">
                        <CardBody>
                            <div className="chart-container">
                                <LineChart data={data} doubleLine={1} />
                            </div>
                        </CardBody>
                    </Colxx>
                </Row>
            </TabPane>
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <Card className="">
                <CardHeader>
                    <Nav tabs className="card-header-tabs">
                        {tabHead('Successful Transaction', props.activeFirstTab[0] === '1', ['1', props.activeFirstTab[1]])}
                        {tabHead('Successful Amount', props.activeFirstTab[0] === '2', ['2', props.activeFirstTab[1]])}
                    </Nav>
                </CardHeader>
                {
                    !props.isLoading && props.successTransactionData.labels && props.successAmountData.labels
                        ? <React.Fragment>
                            <TabContent activeTab={props.activeFirstTab[0]}>
                                {tabBody("1", props.successTransactionData || {})}
                                {tabBody("2", props.successAmountData || {})}
                            </TabContent>
                        </React.Fragment>
                        : <CardBody>
                            <div className="text-left">
                                <Spinner color="primary" className="mb-1" size="sm"/>
                            </div>
                        </CardBody>
                }
            </Card>
        </React.Fragment>
    );
}
 
export default ChannelTransactions;
