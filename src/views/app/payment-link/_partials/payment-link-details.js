import { useEffect, useState } from "react";
import apiClient from "services/axios";
import paymentLinkListColumns from "../../../../containers/column-definition/payment-link/details-def";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";
import PaymentLinkDetail from "../_modals/payment-link-detail";

const PaymentLinkDetails = (props) => {
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
      await apiClient("getPaymentLinkList", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setTransactionDetailsData(
            response.data.data.payment_links?.data || []
          );
          setTotalPage(response.data.data.payment_links?.last_page || 0);
          setTotalRows(response.data.data.payment_links?.total || 0);
        }
      });
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
          columnDefinition={paymentLinkListColumns(
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
              PaymentLinkDetail: (
                <PaymentLinkDetail
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
        headerTitle="Payment Link Details"
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

export default PaymentLinkDetails;
