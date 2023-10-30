import { getParseFloat, numberFormatterKmb } from "helpers/common";
import { useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import StatsCardWrapper from "../../../../containers/wrapper/stats-card-wrapper";

const ChargebackStats = (props) => {
  const [summary, setSummary] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getSummary();
  }, [props.searchData]);

  const getSummary = async () => {
    setIsLoading(true);
    let params = {};
    let body = props.searchData;

    try {
      await apiClient("chargebackRequestSummary", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setSummary(response.data.data.transaction_summary || {});
          }
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Row className="icon-cards-row mt-0 icon-rows">
      <Colxx className="" xxs="6" md="3">
        <StatsCardWrapper
          title="Total Requests"
          icon="iconsminds-files"
          data={summary?.total_rows || 0}
          isLoading={isLoading}
        />
      </Colxx>
      <Colxx className="" xxs="6" md="3">
        <StatsCardWrapper
          title="Pending Requests"
          icon="iconsminds-arrow-refresh"
          data={summary?.total_processing || 0}
          isLoading={isLoading}
        />
      </Colxx>
      <Colxx className="" xxs="6" md="3">
        <StatsCardWrapper
          title="Successful Refunds"
          icon="iconsminds-yes"
          data={summary?.total_success_transaction || 0}
          isLoading={isLoading}
        />
      </Colxx>
      <Colxx className="" xxs="6" md="3">
        <StatsCardWrapper
          title="Refunded Amount"
          icon="iconsminds-wallet"
          data={`BDT ${numberFormatterKmb(
            getParseFloat(summary?.total_success_amount || 0, 0)
          )} `}
          isLoading={isLoading}
        />
      </Colxx>
    </Row>
  );
};

export default ChargebackStats;
