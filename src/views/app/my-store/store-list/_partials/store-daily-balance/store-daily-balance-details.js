import { Colxx } from "components/bootstrap/custom-bootstrap";
import { ReactTableWithPaginationCard } from "components/table/table";
import storeDailyBalanceListColumns from "containers/column-definition/my-store/store-daily-balance-details-def";
import CardWrapper from "containers/wrapper/card-wrapper";
import StatsCardWrapper from "containers/wrapper/stats-card-wrapper";
import { getParseFloat } from "helpers/common";
import React, { useEffect, useState } from "react";
import { Row } from "reactstrap";
import apiClient from "services/axios";

const StoreDailyBalance = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [totalBalance, setTotalBalance] = useState(0);
  const [unsettledBalance, setUnsettledBalance] = useState(0);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [dailyBalanceList, setDailyBalanceList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getDailyBalanceList();
  }, [currentPage, defaultPageSize, props.searchData]);

  const setDtCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const setDtDefaultPageSize = (size) => {
    setCurrentPage(1);
    setDefaultPageSize(size);
  };

  useEffect(() => {
    setDefaultPageSize(defaultPageSize);
    setCurrentPage(1);
    setTotalPage(0);
  }, []);

  const getDailyBalanceList = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = {
      ...{ per_page: defaultPageSize },
      ...{ strid: props.strid },
    };

    try {
      await apiClient("getStoreDailyBalanceList", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setDailyBalanceList(
              response.data.data.merchant_daily_balance_list?.data
                ?.transactions || []
            );
            setTotalBalance(
              response.data.data.merchant_daily_balance_list?.data
                ?.total_balance || 0
            );
            setUnsettledBalance(
              response.data.data.merchant_daily_balance_list?.data
                ?.unsettled_balance || 0
            );
            setTotalPage(
              response.data.data.merchant_daily_balance_list?.data?.paginator
                ?.total_pages || 0
            );
            setTotalRows(response.data.data.merchant_daily_balance_list?.data
              ?.transactions?.length || 0);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const bodyContent = () => {
    return (
      <React.Fragment>
        <ReactTableWithPaginationCard
          data={dailyBalanceList}
          columnDefinition={storeDailyBalanceListColumns(
            currentPage,
            defaultPageSize
          )}
          defaultPageSize={defaultPageSize}
          setDefaultPageSize={setDtDefaultPageSize}
          currentPage={currentPage}
          setCurrentPage={setDtCurrentPage}
          totalPage={totalPage}
          isLoading={isLoading}
        />
      </React.Fragment>
    );
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Row className="icon-cards-row mt-0 icon-rows">
            <Colxx className="" xxs="12" md="6">
              <StatsCardWrapper
                title="Total balance"
                icon="iconsminds-wallet"
                data={`BDT ${getParseFloat(totalBalance||0,0)}`}
                isLoading={isLoading}
              />
            </Colxx>
            <Colxx className="" xxs="12" md="6">
              <StatsCardWrapper
                title="Unsettled Balance"
                icon="iconsminds-wallet"
                data={`BDT ${getParseFloat(unsettledBalance||0,0)}`}
                isLoading={isLoading}
              />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <div className="">
        <CardWrapper
          headerTitle="Daily Balance List"
          toggleOn={true}
          isOpen={true}
          isDefaultHeader={true}
          footerEnabled={false}
          isLoading={isLoading}
          bodyContent={bodyContent}
          totalRows={totalRows}
        />
      </div>
    </>
  );
};

export default StoreDailyBalance;
