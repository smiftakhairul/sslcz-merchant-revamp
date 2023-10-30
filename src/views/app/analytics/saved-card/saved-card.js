import { Colxx, Separator } from "components/bootstrap/custom-bootstrap";
import Breadcrumb from "components/navs/breadcrumb";
import { getSearchParams } from "helpers/form";
import { Fragment, useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import SearchTransaction from "../_partials/search-transaction";
import Summary from "../_partials/summary";
import TransactionChart from "../_partials/transaction-chart";
import TransactionSummary from "../_partials/transaction-summary";
import savedCardColumns from "containers/column-definition/analytics/saved-card-def";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";

const SavedCard = (props) => {
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
      await apiClient("savedCardSummaryReport", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setSummaryData(response.data?.data?.saved_card_summary || []);
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
      await apiClient("savedCardDetailsReport", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          let tLabels = [];
          let tData = [];

          let totalTrx = 0;
          let savedCardTrx = 0;
          let unsavedCardTrx = 0;
          let motoTrx = 0;
          response.data?.data?.saved_card_details.map((el) => {
            totalTrx += +el.total_transaction;
            savedCardTrx += +el.no_of_saved_transaction;
            motoTrx += +el.no_of_moto_transaction;
          });
          if (totalTrx) {
            tLabels = ['Not Saved Cards', 'Saved Cards', 'Moto Trans'];
            unsavedCardTrx = (totalTrx - savedCardTrx) || 0;
            tData = [unsavedCardTrx, savedCardTrx, motoTrx];
          }

          const tableObject = [];
          response.data?.data?.saved_card_details?.map(
            (el) => {
              const savedCardPercentage = Math.ceil(
                (el.no_of_saved_transaction / savedCardTrx) *
                  100
              );
              el.saved_card_percentage = savedCardPercentage;
              tableObject.push(el);
              return el;
            }
          );

          setChartData({ labels: tLabels || [], data: tData || [] });
          setCardTypeBySuccessTransactions(tableObject);
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Fragment>
      <Row>
        <BreadcrumbWrapper
          heading="menu.analytics-saved-card"
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
            title="Statistics of Transactions"
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
            title={"Store-Wise Transactions"}
            totalSuccessTransaction={summaryData?.total_success || 0}
            marketShareData={cardTypeBySuccessTransactions}
            totalRows={cardTypeBySuccessTransactions.length}
            columns={savedCardColumns}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default SavedCard;
