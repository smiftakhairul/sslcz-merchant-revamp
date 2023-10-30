import { getParseFloat } from "helpers/common";
import React from "react";
import { Row } from "reactstrap";
import StatsCardWrapper from "containers/wrapper/stats-card-wrapper";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";

const Summary = (props) => {
  return (
    <React.Fragment>
      <Row className="icon-cards-row mt-0 icon-rows">
        <Colxx className="" xxs="6" md="6">
          <StatsCardWrapper
            // icon="iconsminds-yes"
            icon="iconsminds-home"
            title="No. of Stores"
            data={props.summary.total_stores || 0}
            isLoading={props.isLoading}
          />
        </Colxx>
        <Colxx className="" xxs="6" md="6">
          <StatsCardWrapper
            // icon="iconsminds-arrow-refresh"
            icon="iconsminds-user"
            title="No. of Users"
            data={props.summary.total_users || 0}
            isLoading={props.isLoading}
          />
        </Colxx>
        <Colxx className="" xxs="6" md="6">
          <StatsCardWrapper
            // icon="iconsminds-turn-left"
            icon="iconsminds-add-user"
            title="No. of Active Stores"
            data={props.summary.total_active_stores || 0}
            isLoading={props.isLoading}
          />
        </Colxx>
        <Colxx className="" xxs="6" md="6">
          <StatsCardWrapper
            // icon="iconsminds-pause"
            icon="iconsminds-dollar"
            title="Total Successful Amount"
            data={getParseFloat(props.summary.total_success_amount || 0)}
            isLoading={props.isLoading}
          />
        </Colxx>
      </Row>
    </React.Fragment>
  );
};

export default Summary;
