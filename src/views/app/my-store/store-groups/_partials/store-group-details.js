import storeGroupListColumns from "containers/column-definition/my-store/group-details-def";
import { useEffect, useState } from "react";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../components/table/table";
import CardWrapper from "../../../../../containers/wrapper/card-wrapper";
import StoreGroupEdit from "../_modals/store-group-edit";

const StoreGroupDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);
  
  const [storeGroups, setStoreGroups] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getTransactionDetails();
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

  const getTransactionDetails = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = { ...props.searchData, ...{ per_page: defaultPageSize } };

    try {
      await apiClient("storeGroupList", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setStoreGroups(response.data.data.store_group_list?.data || []);
          setTotalPage(response.data.data.store_group_list?.last_page || 0);
          setTotalRows(response.data.data.store_group_list?.total || 0);
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
          data={storeGroups}
          columnDefinition={storeGroupListColumns(
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
              "StoreGroupEdit": (
                <StoreGroupEdit
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  store={modalData}
                  storeGroups={storeGroups}
                  setStoreGroups={setStoreGroups}
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
        headerTitle="Store Group List"
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

export default StoreGroupDetails;
