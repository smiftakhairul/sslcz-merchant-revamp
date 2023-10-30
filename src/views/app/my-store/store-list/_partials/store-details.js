import { useEffect, useState } from "react";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../components/table/table";
import storeListColumns from "../../../../../containers/column-definition/my-store/details-def";
import CardWrapper from "../../../../../containers/wrapper/card-wrapper";
import SetGWSettings from "../_modals/gw-settings/set-gw-settings";
import SetIPNSettings from "../_modals/ipn-settings/set-ipn-settings";
import SetStoreGroup from "../_modals/set-store-group";
import SettlementBankDetail from "../_modals/settlement-bank-detail";
import StoreDetail from "../_modals/store-detail";

const StoreDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);
  
  const [stores, setStores] = useState([]);
  const [storeGroups, setStoreGroups] = useState([]);
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
      await apiClient("getStoreList", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setStoreGroups(response.data.data.store_groups || []);
          setStores(response.data.data.store_list?.data || []);
          setTotalPage(response.data.data.store_list?.last_page || 0);
          setTotalRows(response.data.data.store_list?.total || 0);
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
          data={stores}
          columnDefinition={storeListColumns(
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
              "StoreDetail": <StoreDetail
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                store={modalData}
              />,
              "SettlementBankDetail": <SettlementBankDetail
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                store={modalData}
              />,
              "SetStoreGroup": <SetStoreGroup
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                storeGroups={storeGroups}
                store={modalData}
                stores={stores}
                setStores={setStores}
              />,
              "SetIPNSettings": <SetIPNSettings
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                storeGroups={storeGroups}
                store={modalData}
                stores={stores}
                setStores={setStores}
              
              />,

              "SetGWSettings":<SetGWSettings
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                storeGroups={storeGroups}
                store={modalData}
                stores={stores}
                setStores={setStores}
              
              
              />
            }[modalType] || ""
          : ""}
      </>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Store Details"
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

export default StoreDetails;
