import { useEffect, useState } from "react";
import apiClient from "services/axios";
import transactionDetailsColumns from "../../../../containers/column-definition/transaction/details-def";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";
import TransactionDetail from "../_modals/transaction-detail";

const TransactionDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [transactionDetailsData, setTransactionDetailsData] = useState([]);
  const [bankList, setBankList] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getTransactionDetails();
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
  }, [props.searchData]);

  const getTransactionDetails = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = { ...props.searchData, ...{ per_page: defaultPageSize } };

    try {
      await apiClient("transactionDetails", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setTransactionDetailsData(
            response.data.data.transaction?.details?.data || []
          );
          setBankList(response.data.data.transaction?.bank_info || []);
          setTotalPage(response.data.data.transaction?.details?.last_page || 0);
          setTotalRows(response.data.data.transaction?.details?.total || 0);
        }
      });
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const markTransactionRead = async (row) => {
    try {
      await apiClient("markTransactionRead", {}, { tid: row.tid }).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            if (response.data.data.transaction) {
              row.is_viewed = 1;
              let transactions = transactionDetailsData.map((obj) =>
                obj.tid === row.tid ? row : obj
              );
              setTransactionDetailsData(transactions);
            }
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const updateModalLarge = (data = {}, type) => {
    setIsModalOpen(!isModalOpen);
    setModalType(type);
    setModalData(modalData ? null : data);
    if (type === "TransactionDetail" && !data.is_viewed) {
      markTransactionRead(data);
    }
  };

  const bodyContent = () => {
    return (
      <>
        <ReactTableWithPaginationCard
          data={transactionDetailsData}
          columnDefinition={transactionDetailsColumns(
            currentPage,
            defaultPageSize,
            updateModalLarge,
            markTransactionRead
          )}
          defaultPageSize={defaultPageSize}
          setDefaultPageSize={setDtDefaultPageSize}
          currentPage={currentPage}
          setCurrentPage={setDtCurrentPage}
          totalPage={totalPage}
          isLoading={isLoading}
        />
        {modalType && modalData
          ? {
              TransactionDetail: (
                <TransactionDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
                  bankList={bankList}
                />
              ),
            }[modalType] || ""
          : ""}
      </>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Transaction Details"
        toggleOn={true}
        isOpen={true}
        isDefaultHeader={true}
        footerEnabled={false}
        isLoading={isLoading}
        bodyContent={bodyContent}
        totalRows={totalRows}
      />
    </div>
  );
};

export default TransactionDetails;
