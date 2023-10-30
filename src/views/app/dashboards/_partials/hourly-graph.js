import React from "react";
import {
    Row,
    Card,
    CardBody,
    CardHeader,
    Nav,
    NavItem,
    TabContent,
    TabPane
} from "reactstrap";
import { Colxx } from "../../../../../components/common/CustomBootstrap";
import { AreaChart } from "../../../../../components/charts";
import {NavLink} from "react-router-dom";
import classnames from "classnames";
import { liveChartData, liveChartData2 } from "constants/charts";

const HourlyGraph = (props) => {
    return (
        <React.Fragment>
            <Card>
                <CardHeader>
                    <Nav tabs className="card-header-tabs">
                    <NavItem>
                            <NavLink
                                className={classnames({
                                    active: props.activeFirstTab === "1",
                                    "nav-link": true
                                })}
                                onClick={() => {
                                    props.toggleFirstTab("1");
                                }}
                                to="#"
                            >
                                Hourly Transaction
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({
                                    active: props.activeFirstTab === "2",
                                    "nav-link": true
                                })}
                                onClick={() => {
                                    props.toggleFirstTab("2");
                                }}
                                to="#"
                            >
                                Hourly Amount
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>

                <TabContent activeTab={props.activeFirstTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <div className="chart-container">
                                        <AreaChart data={liveChartData} />
                                    </div>
                                </CardBody>
                            </Colxx>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Colxx sm="12">
                                <CardBody>
                                    <div className="chart-container">
                                        <AreaChart data={liveChartData2} tabable={1} />
                                    </div>
                                </CardBody>
                            </Colxx>
                        </Row>
                    </TabPane>
                </TabContent>
            </Card>
        </React.Fragment>
    );
}
 
export default HourlyGraph;