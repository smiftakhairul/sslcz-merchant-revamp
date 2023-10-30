import { useEffect, useState } from "react";
import apiClient from "services/axios";
import refundColumns from "../../../../containers/column-definition/refund/details-def";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";
import RefundDetail from "../_modals/refund-detail";

const RefundDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [transactionDetailsData, setTransactionDetailsData] = useState([]);
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
      await apiClient("merchantRefundRequestDetails", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setTransactionDetailsData(
              response.data.data.transaction_summary?.data || []
            );
            setTotalPage(
              response.data.data.transaction_summary?.last_page || 0
            );
            setTotalRows(response.data.data.transaction_summary?.total || 0);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };
  const updateModalLarge = (data = {}, type) => {
    setIsModalOpen(!isModalOpen);
    setModalType(type);
    setModalData(modalData ? null : data);
  };

  const bodyContent = () => {
    return (
      <>
        <ReactTableWithPaginationCard
          data={transactionDetailsData}
          columnDefinition={refundColumns(
            currentPage,
            defaultPageSize,
            updateModalLarge
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
              RefundDetail: (
                <RefundDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
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
        headerTitle="Refund Details"
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

export default RefundDetails;
