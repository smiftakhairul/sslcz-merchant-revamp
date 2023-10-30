import settlementListColumns from "containers/column-definition/my-store/settlement-details-def";
import { getStoreInfo } from "helpers/common";
import { useEffect, useState } from "react";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../../components/table/table";
import CardWrapper from "../../../../../../containers/wrapper/card-wrapper";

const SettlementDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
  
    const [terminalList, setTerminalList] = useState([]);
    const [storeInfo, setStoreInfo] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
  
    useEffect(() => {
      getSettlementList();
    }, [currentPage, defaultPageSize, props.searchData,props.forceUpdate]);
  
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
  
    const getSettlementList = async () => {
      setIsLoading(true);
      let params = { page: currentPage };
      let body = {
        ...props.searchData,
        ...{ per_page: defaultPageSize },
        ...{ stid: props.stid },
      };
  
      try {
        await apiClient("getSettlementDetails", params, body).then((response) => {
          if (response.data.code === 200 || response.data.status === "SUCCESS") {
            setTerminalList(response.data.data.settlement_list?.data || []);
            setStoreInfo(response.data.data?.store_info || []);
            setTotalPage(response.data.data.settlement_list?.last_page || 0);
            setTotalRows(response.data.data.settlement_list?.total || 0);
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
          {getStoreInfo(storeInfo)}
          <ReactTableWithPaginationCard
            data={terminalList}
            columnDefinition={settlementListColumns(
              currentPage,
              defaultPageSize,
            )}
            defaultPageSize={defaultPageSize}
            setDefaultPageSize={setDtDefaultPageSize}
            currentPage={currentPage}
            setCurrentPage={setDtCurrentPage}
            totalPage={totalPage}
            isLoading={isLoading}
          />
        </>
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

export default SettlementDetails;
