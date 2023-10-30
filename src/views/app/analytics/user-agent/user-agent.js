import { Colxx, Separator } from "components/bootstrap/custom-bootstrap";
import Breadcrumb from "components/navs/breadcrumb";
import BreadcrumbWrapper from "containers/wrapper/breadcrumb-wrapper";
import { getSearchParams } from "helpers/form";
import { Fragment, useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";
import SearchTransaction from "../_partials/search-transaction";
import TransactionChart from "../_partials/transaction-chart";

const UserAgent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAgentChartData, setUserAgentChartData] = useState({});
  const [userPlatformChartData, setUserPlatformChartData] = useState({});
  const [userDevicesChartData, setUserDevicesChartData] = useState({});
  const [cellPhoneNameCartData, setCellPhoneNameCartData] = useState({});

  const [searchData, setSearchData] = useState(getSearchParams());

  useEffect(() => {
    marketShareOnCardTypeBySuccessTransactionsHandle();
  }, [searchData]);

  const prepareChartData = (data, label) => {
    let total_transactions = 0;
    const Labels = data?.map((el) => {
      total_transactions += +el.total_transaction;
      return el[label] || "Unknown";
    });
    const Data = data?.map((el) => {
      const percentage = Math.ceil(
        (el.total_transaction / total_transactions) * 100
      );
      el.percentage = percentage;
      return percentage;
    });
    return { labels: Labels || [], data: Data || [] };
  };

  const marketShareOnCardTypeBySuccessTransactionsHandle = async () => {
    setIsLoading(true);
    let params = {};
    let body = searchData;

    try {
      await apiClient("userAgentReport", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setUserAgentChartData(
            prepareChartData(
              response.data?.data?.transaction_details?.user_agent || [],
              "ua_name"
            )
          );
          setUserPlatformChartData(
            prepareChartData(
              response.data?.data?.transaction_details?.user_platform || [],
              "ua_platform"
            )
          );
          setUserDevicesChartData(
            prepareChartData(
              response.data?.data?.transaction_details?.user_device || [],
              "ua_device"
            )
          );
          setCellPhoneNameCartData(
            prepareChartData(
              response.data?.data?.transaction_details?.cell_phone_name || [],
              "ua_phone_company_name"
            )
          );
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
          heading="menu.user-agent"
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
            title="User Agent"
            data={userAgentChartData}
            isLoading={isLoading}
          />
        </Colxx>
        <Colxx xxs="6">
          <TransactionChart
            title="User Platform"
            data={userPlatformChartData}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="6">
          <TransactionChart
            title="User Device"
            data={userDevicesChartData}
            isLoading={isLoading}
          />
        </Colxx>
        <Colxx xxs="6">
          <TransactionChart
            title="Cell Phone Name"
            data={cellPhoneNameCartData}
            isLoading={isLoading}
          />
        </Colxx>
      </Row>
    </Fragment>
  );
};

export default UserAgent;
