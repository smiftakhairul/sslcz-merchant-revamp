import { ReactTableWithPaginationCard } from "components/table/table";
import storeDiscountListColumns from "containers/column-definition/my-store/discount-details-def";
import CardWrapper from "containers/wrapper/card-wrapper";
import React, { useEffect, useState } from "react";
import apiClient from "services/axios";
import CardDetail from "../../_modals/store-discounts/card-detail";
import DiscountDetail from "../../_modals/store-discounts/discount-detail";
import OfferDetail from "../../_modals/store-discounts/offer-detail";
import StoreDiscountEdit from "../../_modals/store-discounts/store-discount-edit";

const DiscountDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [discounts, setDiscounts] = useState([]);
  const [banks, setBanks] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getDiscounts();
  }, [currentPage, defaultPageSize, props.searchData, props.forceUpdate]);

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

  const getDiscounts = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = { ...props.searchData, ...{ per_page: defaultPageSize },...{stid:props.stid} };

    try {
      await apiClient("storeDiscountList", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setBanks(response.data.data.banks || []);
          setDiscounts(response.data.data.discounts?.data || []);
          setTotalPage(response.data.data.discounts?.last_page || 0);
          setTotalRows(response.data.data.discounts?.total || 0);
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
      <React.Fragment>
        <ReactTableWithPaginationCard
          data={discounts}
          columnDefinition={storeDiscountListColumns(
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
                "OfferDetail": <OfferDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  offer={modalData}
                />,
                "DiscountDetail": <DiscountDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  offer={modalData}
                />,
                "CardDetail": <CardDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  offer={modalData}
                />,
                "EditDiscount": <StoreDiscountEdit
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  offer={modalData}
                  banks={banks}
                  discounts={discounts}
                  setDiscounts={setDiscounts}
                  stid={props.stid}
                />,
            }[modalType] || ""
          : ""}
      </React.Fragment>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Discount Offers"
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

export default DiscountDetails;
