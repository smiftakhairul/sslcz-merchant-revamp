import { Colxx } from "components/bootstrap/custom-bootstrap";
import { getParseFloat } from "helpers/common";
import React from "react";
import { Card, CardBody, Row } from "reactstrap";
import CardWrapper from "containers/wrapper/card-wrapper";

const Summary30Days = (props) => {
  const bodyContent = () => {
    return (
      <React.Fragment>
        <Row className="thirty-days-card">
          <Colxx xxs="6" className="mb-2">
            <Card className="dashboard-small-chart h-100">
              <CardBody>
                <div>
                  <p className="lead color-theme-1 mb-1 value">
                    {props.transaction["30_days_attempted_transactions"] || 0}
                  </p>
                  <p className="mb-0 label">Total Attempts</p>
                  {/* <p className="mb-0 label text-small">Total Attempts</p> */}
                </div>
                {/*<SmallLineChart data={smallChartData1} />*/}
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" className="mb-2">
            <Card className="dashboard-small-chart h-100">
              <CardBody>
                <div>
                  <p className="lead color-theme-1 mb-1 value">
                    {props.transaction["30_days_successful_transactions"] || 0}
                  </p>
                  <p className="mb-0 label">Total Successful Transactions</p>
                </div>
                {/*<SmallLineChart data={smallChartData2} />*/}
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" className="mb-2">
            <Card className="dashboard-small-chart h-100">
              <CardBody>
                <div>
                  <p className="lead color-theme-1 mb-1 value">
                    {getParseFloat(
                      props.transaction["30_days_successful_amount"] || 0
                    )}
                    <sup>৳</sup>
                  </p>
                  <p className="mb-0 label">Total Successful Amount</p>
                </div>
                {/*<SmallLineChart data={smallChartData3} />*/}
              </CardBody>
            </Card>
          </Colxx>
          {/* <Colxx xxs="6" className="mb-2">
                    <Card className="dashboard-small-chart h-100">
                    <CardBody>
                        <div>
                            <p className="lead color-theme-1 mb-1 value">{
                                getParseFloat(((props.transaction['30_days_successful_transactions'] || 0) / (props.transaction['30_days_attempted_transactions'] || 1)) * 100)
                            }%</p>
                            <p className="mb-0 label">Successful Rate</p>
                        </div>
                    </CardBody>
                    </Card>
                </Colxx> */}
        </Row>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="">
        <CardWrapper
          headerTitle="Last 30 Days Summary"
          toggleOn={false}
          isDefaultHeader={true}
          footerEnabled={false}
          isLoading={props.isLoading}
          bodyContent={bodyContent}
        />
      </div>
    </React.Fragment>
  );
};

export default Summary30Days;
