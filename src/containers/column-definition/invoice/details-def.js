import { invBaseUrl } from "constants/default-values";
import {
  getParseFloat,
  getTableSerialIndex,
  stringToJson
} from "helpers/common";
import moment from "moment";
import React from "react";
import { Badge, Button, ButtonGroup } from "reactstrap";

const badgeColor = (paymentStatus,approvalStatus) => {
  if (paymentStatus === 1) return "success";
  else if (paymentStatus === 2) return "danger";
  else if (paymentStatus === 0 && approvalStatus === 1) return "success";
  else return "info";
}

const badgeText = (paymentStatus,approvalStatus) => {
  if (paymentStatus === 1) return "Pending";
  else if (paymentStatus === 2) return "Cancelled";
  else if (paymentStatus === 0 && approvalStatus === 1) return "Approved";
  else return "Pending";
}

const invoiceListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Invoice Info",
    accessor: "refer_no",
    Cell: (props) => {
      return (
        <div>
          <h6 className="text-primary">{props.value}</h6>
          {props.row.original?.trans_id ? (
            <p className="mb-0">
              Reference:{" "}
              <span className="font-weight-bold">
                {props.row.original?.trans_id}
              </span>
            </p>
          ) : (
            ""
          )}
          <p className="mb-0">
            Invoice Date:{" "}
            <span className="font-weight-bold">
              {props.row.original?.created_on
                ? moment(props.row.original?.created_on, "YYYY-MM-DD hh:mm:ss")
                    .format("DD-MM-YYYY hh:mm A")
                    .toString()
                : ""}
            </span>
          </p>
          <p className="mb-0">
            Expire Date:{" "}
            <span className="font-weight-bold">
              {props.row.original?.created_on
                ? moment(props.row.original?.created_on, "YYYY-MM-DD hh:mm:ss")
                    .add(props.row.original.max_cycle || 0, "days")
                    .format("DD-MM-YYYY hh:mm A")
                    .toString()
                : ""}
            </span>
          </p>
          {/* <p className="">Expire Date: <span className="font-weight-bold">{props.row.original.expiredate}</span></p> */}
          <p className="mb-0">
            Created By: <span className="">{props.row.original?.uname}</span>
          </p>
        </div>
      );
    },
  },
  {
    Header: "Customer Information",
    accessor: "cus_email",
    Cell: (props) => (
      <div>
        <p className="mb-0 font-weight-bold">{props.value}</p>
        <p className="mb-0 font-weight-bold">
          {stringToJson(props.row.original?.fields_value)?.cus_name || ""}
        </p>
        <p className="mb-0">
          {stringToJson(props.row.original?.fields_value)?.cus_add1 || ""}
        </p>
        <p className="mb-0 font-weight-bold">{props.row.original?.cus_phone}</p>
      </div>
    ),
  },
  {
    Header: "Invoice Amount",
    accessor: "amount",
    Cell: (props) => (
      <p className="">
        {getParseFloat(props.value || 0)} {props.row.original?.t_currency || ""}
      </p>
    ),
  },
  {
    Header: "Payment Status",
    accessor: "payment_status",
    Cell: (props) => (
      <React.Fragment>
        {
          props.row.original?.approval_process === 1 ? 
          <Badge
          className={`badge badge-${badgeColor(props.value,props.row.original?.approval_status)} text-white`}
          color={badgeColor(props.value,props.row.original?.approval_status)}
          pill
        >
          {badgeText(props.value,props.row.original?.approval_status)}
        </Badge>
        :<Badge
        className={`badge badge-${
          {
            1: "success",
            0: "danger",
            2: "danger",
            3: "warning",
          }[props.value] || "danger"
        } text-white`}
        color={
          {
            1: "success",
            0: "danger",
            2: "danger",
            3: "warning",
          }[props.value] || "danger"
        }
        pill
      >
        {{
          1: <span>Paid</span>,
          0: <span>Unpaid</span>,
          2: <span>Cancelled</span>,
          3: <span>Partially Paid</span>,
        }[props.value] || <span>Unknown</span>}
      </Badge>}
        {props.row.original?.approval_status === 1 ?
          <div className="mt-2">
            <p className="mb-0">
              <b>Approval Remarks:</b> {props.row.original?.approved_desc}
            </p>
            <p className="mb-0">
              <b>Approved On:</b>{" "}
              {props.row.original?.approved_on
                ? moment(
                    props.row.original?.approved_on,
                    "YYYY-MM-DD hh:mm:ss"
                  )
                    .format("DD-MM-YYYY hh:mm A")
                    .toString()
                : ""}
            </p>
            <p className="mb-0">
              <b>Approved By:</b> {props.row.original?.ab_uname}
            </p>
          </div>
          : ""
        }
        {parseInt(props.value || 0) === 2 ? (
          <div className="mt-2">
            <p className="mb-0">
              <b>Cancelled Remarks:</b> {props.row.original?.cancelled_desc}
            </p>
            <p className="mb-0">
              <b>Cancelled On:</b>{" "}
              {props.row.original?.cancelled_on
                ? moment(
                    props.row.original?.cancelled_on,
                    "YYYY-MM-DD hh:mm:ss"
                  )
                    .format("DD-MM-YYYY hh:mm A")
                    .toString()
                : ""}
            </p>
            <p className="mb-0">
              <b>Cancelled By:</b> {props.row.original?.cb_uname}
            </p>
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (props) => (
      <div>
        <ButtonGroup>
        <Button
          className="btn btn-xs btn-primary mr-1"
          title="Details"
          color=""
          onClick={() => modal(props.row.original, "InvoiceDetail")}
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
        <a
          href={
            invBaseUrl + "/download-invoice/" + props.row.original?.refer_no
          }
          target="_blank"
          title="Download"
          className="btn btn-xs btn-success mr-1"
          rel="noreferrer"
        >
          <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-cloud-download"></i></span>
        </a>
        {props.row.original?.approval_process === 1 && props.row.original?.payment_status === 0 ?
          props.row.original?.approval_status === 1 && props.row.original.cus_email && 
          <Button
          className="btn btn-xs btn-warning mr-1"
          title="Resend Email"
          color=""
          onClick={() => modal(props.row.original, "ResendMail")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-envelope"></i></span>
          </Button>
        : props.row.original?.approval_process !== 1 && props.row.original?.payment_status === 0 ?
            props.row.original.cus_email && 
            <Button
            className="btn btn-xs btn-warning mr-1"
            title="Resend Email"
            color=""
            onClick={() => modal(props.row.original, "ResendMail")}
            >
              <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-envelope"></i></span>
            </Button>
        :""
        }
        {!props.row.original.payment_status ? (
          <Button
            className="btn btn-xs btn-danger mr-1"
            title="Cancel Invoice"
            color=""
            onClick={() => modal(props.row.original, "CancelInvoice")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-close"></i></span>
          </Button>
        ) : (
          ""
        )}
        {props.row.original?.approval_process === 1 && props.row.original?.payment_status === 0 ? 
            props.row.original?.payment_status===0 && props.row.original?.approval_status === 0 &&
            <Button
            className="btn btn-xs btn-success"
            title="Approve Invoice"
            color=""
            onClick={() => modal(props.row.original, "ApproveInvoice")}
            >
              <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-check"></i></span>
            </Button>      
        :"" }
        </ButtonGroup>
      </div>
    ),
  },
];

export default invoiceListColumns;
