import React, { useEffect, useState } from "react";
import apiClient from "services/axios";
import { ReactTableWithPaginationCard } from "../../../../../components/table/table";
import invoiceListColumns from "../../../../../containers/column-definition/invoice/details-def";
import CardWrapper from "../../../../../containers/wrapper/card-wrapper";
import ApproveInvoice from "../_modals/approve-invoice";
import CancelInvoice from "../_modals/cancel-invoice";
import InvoiceDetail from "../_modals/invoice-detail";
import ResendMail from "../_modals/resend-mail";

const InvoiceTable = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [defaultPageSize, setDefaultPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [invoices, setInvoices] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  useEffect(() => {
    getInvoices();
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

  const getInvoices = async () => {
    setIsLoading(true);
    let params = { page: currentPage };
    let body = { ...props.searchData, ...{ per_page: defaultPageSize } };

    try {
      await apiClient("getInvoices", params, body).then((response) => {
        if (response.data.code === 200 || response.data.status === "SUCCESS") {
          setInvoices(response.data.data.invoices?.data || []);
          setTotalPage(response.data.data.invoices?.last_page || 0);
          setTotalRows(response.data.data.invoices?.total || 0);
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
          data={invoices}
          columnDefinition={invoiceListColumns(
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
              InvoiceDetail: (
                <InvoiceDetail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
                />
              ),
              ResendMail: (
                <ResendMail
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
                />
              ),
              CancelInvoice: (
                <CancelInvoice
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
                  invoices={invoices}
                  setInvoices={setInvoices}
                />
              ),
              ApproveInvoice: (
                <ApproveInvoice
                  isOpen={isModalOpen}
                  toggle={updateModalLarge}
                  transaction={modalData}
                  invoices={invoices}
                  setInvoices={setInvoices}
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
        headerTitle="Invoice List"
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

export default InvoiceTable;
