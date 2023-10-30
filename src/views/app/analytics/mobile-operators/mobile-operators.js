import { Colxx, Separator } from "components/bootstrap/custom-bootstrap";
import Breadcrumb from "components/navs/breadcrumb";
import { getSearchParams } from "helpers/form";
import { Fragment, useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import mobileOperatorsColumns from "containers/column-definition/analytics/mobile-operators-def";
import SearchTransaction from "../_partials/search-transaction";
import Summary from "../_partials/summary";
import TransactionChart from "../_partials/transaction-chart";
import TransactionSummary from "../_partials/transaction-summary";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";

const MobileOperators = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [summaryData, setSummaryData] = useState({});
  const [chartData, setChartData] = useState({});
  const [cardTypeBySuccessTransactions, setCardTypeBySuccessTransactions] =
    useState([]);

  const [searchData, setSearchData] = useState(getSearchParams());

  useEffect(() => {
    summaryReportHandle();
    marketShareOnCardTypeBySuccessTransactionsHandle();
  }, [searchData]);

  const summaryReportHandle = async () => {
    setIsLoading(true);
    let params = {};
    let body = searchData;

    try {
      await apiClient("mobileOperatorsSummaryReport", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setSummaryData(response.data?.data?.transaction_summary || []);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const marketShareOnCardTypeBySuccessTransactionsHandle = async () => {
    setIsLoading(true);
    let params = {};
    let body = searchData;

    try {
      await apiClient("mobileOperatorsDetailsReport", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            let total_transaction_card_type = 0;
            let total_success_transaction_card_type = 0;
            const tLabels = response.data?.data?.transaction_details?.map(
              (el) => {
                total_transaction_card_type += +el.total_transaction;
                total_success_transaction_card_type += +el.total_success_transaction;
                return el?.operator_name;
              }
            );
            const tableObject = [];
            const tData = response.data?.data?.transaction_details?.map(
              (el) => {
                const percentage = Math.ceil(
                  (el.total_transaction / total_transaction_card_type) * 100
                );
                const successPercentage = Math.ceil(
                  (el.total_success_transaction / total_success_transaction_card_type) * 100
                );
                el.percentage = percentage;
                el.success_percentage = successPercentage;
                tableObject.push(el);
                return percentage;
              }
            );
            setChartData({ labels: tLabels || [], data: tData || [] });
            setCardTypeBySuccessTransactions(tableObject);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.mobile-operators"
          match={props.match}
        />
      </Row>
      <Row>
        <Colxx xxs="12">
          <SearchTransaction onSubmitHandler={setSearchData} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="6">
          <TransactionChart
            title="Bangladeshi Operators Analytics on Total Data"
            data={chartData}
            isLoading={isLoading}
          />
        </Colxx>
        <Colxx xxs="6">
          <Summary data={summaryData} isLoading={isLoading} />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <TransactionSummary
            title={"Total Successful Transaction (" + (summaryData?.total_success || 0) + ") Market Statistics"}
            totalSuccessTransaction={summaryData?.total_success || 0}
            marketShareData={cardTypeBySuccessTransactions}
            totalRows={cardTypeBySuccessTransactions.length}
            columns={mobileOperatorsColumns}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default MobileOperators;
