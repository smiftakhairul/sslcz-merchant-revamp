import { useEffect, useState } from "react";
import apiClient from "services/axios";
import transactionSummeryColumns from "../../../../containers/column-definition/transaction/summary-def";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";

const TransactionSummary = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [transactionSummaryData, setTransactionSummaryData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getTransactionSummary();
  }, [props.searchData]);

  const getTransactionSummary = async () => {
    setIsLoading(true);
    let params = {};
    let body = props.searchData;

    try {
      await apiClient("transactionSummary", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          let summary = response.data.data.transaction_summary || [];
          setTotalRows(summary.length || 0);

          let sumRow = summary.reduce((acm, item) => {
            Object.keys(item).forEach((key) => {
              if (key === "cardtype") {
                acm[key] = "-Total";
              } else if (key === "total_rows") {
                acm[key] = parseInt(acm[key] || 0) + parseInt(item[key] || 0);
              } else if (
                key === "total_mamount" ||
                key === "total_store_portion"
              ) {
                acm[key] =
                  parseFloat(acm[key] || 0) + parseFloat(item[key] || 0);
              } else if (key === "total_bank_portion") {
                acm[key] =
                  parseFloat(acm[key] || 0) +
                  parseFloat(item[key] || 0) +
                  parseFloat(item["total_ssl_potion"] || 0);
              } else {
                acm[key] = null;
              }
            });

            return acm;
          }, {});

          if (summary.length) summary.push(sumRow);
          setTransactionSummaryData(summary || []);
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const bodyContent = () => {
    return (
      <>
        <ReactTableWithPaginationCard
          data={transactionSummaryData}
          columnDefinition={transactionSummeryColumns}
          defaultPageSize={transactionSummaryData.length}
          serverSide={false}
          disableSearch={false}
          showPagination={false}
          getRowProps={(row) =>
            row.original?.cardtype === "-Total"
              ? { style: { fontWeight: "bold" } }
              : {}
          }
        />
      </>
    );
  };
  return (
    <div className="">
      <CardWrapper
        headerTitle="Transaction Summary"
        toggleOn={true}
        isOpen={false}
        isDefaultHeader={true}
        footerEnabled={false}
        isLoading={isLoading}
        bodyContent={bodyContent}
        totalRows={totalRows}
      />
    </div>
  );
};

export default TransactionSummary;
