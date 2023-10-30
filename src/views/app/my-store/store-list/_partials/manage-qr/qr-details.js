import qrListColumns from "containers/column-definition/my-store/qr-details-def";
import { useEffect, useState } from "react";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../../components/table/table";
import CardWrapper from "../../../../../../containers/wrapper/card-wrapper";
import GetQRDetails from "../../_modals/manage-qr/get-qr-details";

const SubscriptionDetails = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [defaultPageSize, setDefaultPageSize] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);
    const [modalData, setModalData] = useState(null);
  
    const [subscriptionList, setSubscriptionList] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
  
    useEffect(() => {
        getSubscriptionList();
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
  
    const getSubscriptionList = async () => {
      setIsLoading(true);
      let params = { page: currentPage };
      let body = {
        ...props.searchData,
        ...{ per_page: defaultPageSize },
        ...{ stid: props.stid },
      };
  
      try {
        await apiClient("subscriptionOptionDetailsStrategy", params, body).then((response) => {
          if (response.data.code === 200 || response.data.status === "SUCCESS") {
            setSubscriptionList(response.data.data.subscription_list?.data || []);
            setTotalPage(response.data.data.subscription_list?.last_page || 0);
            setTotalRows(response.data.data.subscription_list?.total || 0);
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
            data={subscriptionList}
            columnDefinition={qrListColumns(
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
              "GetQrDetails": <GetQRDetails
                isOpen={isModalOpen}
                toggle={updateModalLarge}
                subscription={modalData}
              />,
              
            }[modalType] || ""
          : ""}
        </>
      );
    };
  
    return (
      <div className="">
        <CardWrapper
          headerTitle="Payment Option"
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

export default SubscriptionDetails;
