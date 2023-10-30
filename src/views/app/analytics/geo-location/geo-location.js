import { Colxx, Separator } from "components/bootstrap/custom-bootstrap";
import Breadcrumb from "components/navs/breadcrumb";
import { getSearchParams } from "helpers/form";
import { Fragment, useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import geoLocationColumns from "containers/column-definition/analytics/geo-location-def";
import SearchTransaction from "../_partials/search-transaction";
import Summary from "../_partials/summary";
import TransactionChart from "../_partials/transaction-chart";
import TransactionSummary from "../_partials/transaction-summary";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";

const GeoLocation = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [summaryData, setSummaryData] = useState({});
  const [cardTypeBySuccessTransactions, setCardTypeBySuccessTransactions] =
    useState([]);
  const [chartDataCountryWise, setChartDataCountryWise] = useState({});
  const [chartDataCityWise, setChartDataCityWise] = useState({});
  const [chartDataISPWise, setChartDataISPWise] = useState({});

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
      await apiClient("geoLocationSummaryReport", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setSummaryData(response.data?.data?.market_share_summary || []);
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
      await apiClient("geoLocationDetailsReport", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            let countryData = [];
            let countryLabels = [];
            let total_transactions = 0;
            let total_success_transactions = 0;

            //country wise
            total_transactions = response.data?.data?.cart_type_success?.country_wise?.reduce((sum, el) => 
              +el.total_transaction + sum, 0
            );
            total_success_transactions = response.data?.data?.cart_type_success?.country_wise?.reduce((sum, el) => 
              +el.total_success_transaction + sum, 0
            );
            const tableObject = response.data?.data?.cart_type_success?.country_wise?.map(
                (el) => {
                  el.percentage = Math.ceil(
                    (+el.total_transaction / total_transactions) * 100
                  );
                  el.success_percentage = Math.ceil(
                    (+el.total_success_transaction / total_success_transactions) * 100
                  );
                  countryData.push(el?.percentage);
                  countryLabels.push(el?.country_location || "Unknown");
                  return el;
                }
              );

            setChartDataCountryWise({
              labels: countryLabels || [],
              data: countryData || [],
            });
            setCardTypeBySuccessTransactions(tableObject);

            //city wise
            const cityData = [];
            const cityLabels = [];
            total_transactions = 0;
            total_transactions =
              response.data?.data?.cart_type_success?.city_wise?.reduce(
                (sum, el) => +el.total_transaction + sum,
                0
              );
            response.data?.data?.cart_type_success?.city_wise?.forEach((el) => {
              el.percentage = Math.ceil(
                (+el.total_transaction / total_transactions) * 100
              );
              countryData.push(el?.percentage);
              countryData.push(el?.city_location || "Unknown");
            });
            setChartDataCityWise({
              labels: cityLabels || [],
              data: cityData || [],
            });

            //isp wise
            const ispData = [];
            const ispLabels = [];
            total_transactions = 0;
            total_transactions =
              response.data?.data?.cart_type_success?.isp_wise?.reduce(
                (sum, el) => +el.total_transaction + sum,
                0
              );
            response.data?.data?.cart_type_success?.isp_wise?.forEach((el) => {
              el.percentage = Math.ceil(
                (+el.total_transaction / total_transactions) * 100
              );
              ispData.push(el.percentage);
              ispLabels.push(el?.isp || "Unknown");
            });
            setChartDataISPWise({
              labels: ispLabels || [],
              data: ispData || [],
            });
            setChartDataCityWise({
              labels: cityLabels || [],
              data: cityData || [],
            });
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
          heading="menu.geo-location"
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
            title="Market Share on Geo Location"
            data={chartDataCountryWise}
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
            columns={geoLocationColumns}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="6">
          <TransactionChart
            title="Market Share on Geo Location (City)"
            data={chartDataCityWise}
            isLoading={isLoading}
          />
        </Colxx>
        <Colxx xxs="6">
          <TransactionChart
            title="Market Share on Geo Location (ISP)"
            data={chartDataISPWise}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default GeoLocation;
