import { ReactTableWithPaginationCard } from "components/table/table";
import React from "react";
import latestTransactionsColumns from "containers/column-definition/dashboard/latest-trans-def";
import CardWrapper from "containers/wrapper/card-wrapper";

const LatestTransactions = (props) => {
  const tableContent = () => {
    return <ReactTableWithPaginationCard
        serverSide={false}
        data={props.transactions || []}
        columnDefinition={latestTransactionsColumns}
        defaultPageSize={10}
        disableSearch={false}
    />
  };

  return (
    <React.Fragment>
      <CardWrapper
        headerTitle="Latest Successful Transactions (Last 30 Days)"
        toggleOn={false}
        isDefaultHeader={true}
        footerEnabled={false}
        isLoading={props.isLoading}
        bodyContent={tableContent}
        totalRows={(props.transactions).length || 0}
      />
    </React.Fragment>
  );
};

export default LatestTransactions;
