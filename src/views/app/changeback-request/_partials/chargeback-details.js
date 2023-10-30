import { useEffect, useState } from "react";
import apiClient from "services/axios";
import chargebackColumns from "../../../../containers/column-definition/chargeback/details-def";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";
import { ReactTableWithPaginationCard } from "../../../../components/table/table";
import ChargebackDetail from "../_modals/chargeback-detail";

const ChargebackDetails = (props) => {
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
      await apiClient("chargebackRequestDetails", params, body).then(
        (response) => {
          if (
            response.data.code === 200 ||
            response.data.status === "SUCCESS"
          ) {
            setTransactionDetailsData(
              response.data.data.transaction_details?.data || []
            );
            setTotalPage(
              response.data.data.transaction_details?.last_page || 0
            );
            setTotalRows(response.data.data.transaction_details?.total || 0);
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
          columnDefinition={chargebackColumns(
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
              ChargebackDetail: (
                <ChargebackDetail
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
        headerTitle="Chargeback Details"
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

export default ChargebackDetails;
