import { ReactTableWithPaginationCard } from "components/table/table";
import storeTerminalListColumns from "containers/column-definition/my-store/terminal-details-def";
import CardWrapper from "containers/wrapper/card-wrapper";
import { getStoreInfo } from "helpers/common";
import React, { useEffect, useState } from "react";
import apiClient from "services/axios";
import GenerateQR from "../../_modals/manage-terminal/generate-qr";

const ManageTerminal = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [terminalList, setTerminalList] = useState([]);
  const [storeInfo, setStoreInfo] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getTerminalList();
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

  const getTerminalList = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = {
      ...props.searchData,
      ...{ per_page: defaultPageSize },
      ...{ stid: props.stid },
    };

    try {
      await apiClient("getStoreTerminals", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setTerminalList(response.data.data.terminal_list?.data || []);
          setStoreInfo(response.data.data?.store_info || []);
          setTotalPage(response.data.data.terminal_list?.last_page || 0);
          setTotalRows(response.data.data.terminal_list?.total || 0);
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
        {getStoreInfo(storeInfo)}
        <ReactTableWithPaginationCard
          data={terminalList}
          columnDefinition={storeTerminalListColumns(
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
              GenerateQR: (
                <GenerateQR
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  terminal={modalData}
                />
              ),
            }[modalType] || ""
          : ""}
      </React.Fragment>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Terminal List"
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

export default ManageTerminal;
