import { ReactTableWithPaginationCard } from "components/table/table";
import GatewayListColumns from "containers/column-definition/my-store/gateway-details-def";
import CardWrapper from "containers/wrapper/card-wrapper";
import { useEffect, useState } from "react";
import apiClient from "services/axios";

const GatewayList = (props) => {
    const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  const [gatewaysDetailsData, setGatewayDetailsData] = useState([]);
  const[gateways,setGateways]=useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getGatewayDetails();
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

  const getGatewayDetails = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = { ...props.searchData, ...{ per_page: defaultPageSize } };

    try {
      await apiClient("getStoreGatewayList", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setGatewayDetailsData(response.data.data.gateway_list?.data || []);
          setGateways(response.data.data?.gateways||[])
          setTotalPage(response.data.data.gateway_list?.last_page || 0);
          setTotalRows(response.data.data.gateway_list?.total || 0);
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
          data={gatewaysDetailsData}
          columnDefinition={GatewayListColumns(
            currentPage,
            defaultPageSize,
            gateways
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
        headerTitle="Bank Gateways"
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

export default GatewayList;