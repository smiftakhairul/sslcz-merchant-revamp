import { getParseFloat } from "helpers/common";
import React from "react";
import { Row, Card, CardBody, Table } from "reactstrap";
import CardWrapper from "containers/wrapper/card-wrapper";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import { ReactTableWithPaginationCard } from "components/table/table";

const ComparisonSummary = (props) => {
  const getGrowthContent = (type) => {
    let percentage = 0;
    let icon = "";
    let status = "";
    let statusText = "";

    if (type === "amount") {
      percentage =
        (((props.transaction.today_amount || 0) -
          (props.transaction.yesterday_amount || 0)) /
          (props.transaction.yesterday_amount || 1)) *
        100;
    } else if (type === "transaction") {
      percentage =
        (((props.transaction.today_transactions || 0) -
          (props.transaction.yesterday_transactions || 0)) /
          (props.transaction.yesterday_transactions || 1)) *
        100;
    }
    percentage = getParseFloat(percentage, 1);

    if (percentage < 0) {
      status = "danger";
      statusText = "downward";
      icon = (
        <React.Fragment>
          <i className="icon-down iconsminds-down" color="white"></i>&nbsp;
        </React.Fragment>
      );
    } else if (percentage > 0) {
      status = "success";
      statusText = "upward";
      icon = (
        <React.Fragment>
          <i className="icon-up iconsminds-up" color="white"></i>&nbsp;
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <p className={`text-${status} text-center mb-0`}>
          {icon}
          {Math.abs(percentage)}% {statusText}
        </p>
      </React.Fragment>
    );
  };

  const bodyContent = () => {
    return (
      <React.Fragment>
        <ReactTableWithPaginationCard 
          data={[
            {
              title: "Transaction",
              today: props.transaction.today_transactions || 0,
              yesterday: props.transaction.yesterday_transactions || 0,
            },
            {
              title: "Amount",
              today: "৳" + getParseFloat(props.transaction.today_amount || 0),
              yesterday: "৳" + getParseFloat(props.transaction.yesterday_amount || 0),
            },
            {
              title: "Amount Per Transaction",
              today: "৳" + getParseFloat((props.transaction.today_amount || 0) / (props.transaction.today_transactions || 1), 2),
              yesterday: "৳" + getParseFloat((props.transaction.yesterday_amount || 0) / (props.transaction.yesterday_transactions || 1), 2),
            },
          ]} 
          columnDefinition={[
            {
              Header: "#",
              accessor: "title",
              Cell: (props) => <div className="font-weight-bold">{props.value}</div>,
            },
            {
              Header: "Today",
              accessor: "today",
              Cell: (props) => <div className="">{props.value}</div>,
            },
            {
              Header: "Yesterday",
              accessor: "yesterday",
              Cell: (props) => <div className="">{props.value}</div>,
            },
          ]}
          defaultPageSize={3} 
          serverSide={false}
          showPagination={false}
        />
        <Row>
          <Colxx xxs="6" className="">
            <Card className="">
              <CardBody className="py-2 px-2">
                <p className="mb-1 text-center">Amount Growth</p>
                {getGrowthContent("amount")}
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="6" className="">
            <Card className="">
              <CardBody className="py-2 px-2">
                <p className="mb-1 text-center">Transaction Growth </p>
                {getGrowthContent("transaction")}
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="">
        <CardWrapper
          headerTitle="Today vs Yesterday"
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

export default ComparisonSummary;
