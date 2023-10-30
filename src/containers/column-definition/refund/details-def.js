import { getParseFloat, getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Badge, Button } from "reactstrap";

const refundColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Requested On",
    accessor: "request_on",
    Cell: (props) => (
      <p className="">
        {props.value
          ? moment(props.value, "YYYY-MM-DD hh:mm:ss")
              .format("DD-MM-YYYY hh:mm A")
              .toString()
          : ""}
      </p>
    ),
  },
  {
    Header: (
      <div>
        Refund Ref. Id
        <br />
        Merchant Ref. Code
      </div>
    ),
    accessor: "refund_ref_id",
    Cell: (props) => (
      <div className="">
        <p className="mb-0">{props.value}</p>
        {props.row.original?.merchant_ref_id ? (
          <p className="mb-0">{props.row.original?.merchant_ref_id}</p>
        ) : (
          ""
        )}
      </div>
    ),
  },
  {
    Header: (
      <div>
        Transaction ID
        <br />
        Store Name
      </div>
    ),
    accessor: "transaction_id",
    Cell: (props) => (
      <div className="">
        <p className="mb-0 font-weight-bold">{props.value}</p>
        {props.row.original?.strid && props.row.original?.store_name ? (
          <p className="mb-0">{props.row.original?.strid} - {props.row.original?.store_name}</p>
        ) : (
          ""
        )}
      </div>
    ),
  },
  {
    Header: "Refund Amount",
    accessor: "refund_amt",
    Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>,
  },
  {
    Header: "Card/Ref No",
    accessor: "scredit_card_num",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Request Status",
    accessor: "request_status",
    Cell: (props) => (
      <Badge
        className={`badge badge-${
          {
            2: "info",
            1: "success",
            0: "danger",
          }[props.value] || "danger"
        } text-white`}
        color={
          {
            2: "info",
            1: "success",
            0: "danger",
          }[props.value] || "danger"
        }
        pill
      >
        {{
          2: <span>Processing</span>,
          1: <span>Success</span>,
          0: <span>Cancelled</span>,
        }[props.value] || <span>Unknown</span>}
      </Badge>
    ),
  },
  {
    Header: "Approval Status",
    accessor: "approved_status",
    Cell: (props) => (
      <Badge
        className={`badge badge-${
          {
            3: "secondary",
            2: "info",
            1: "success",
            0: "danger",
          }[props.value] || "danger"
        } text-white`}
        color={
          {
            3: "secondary",
            2: "info",
            1: "success",
            0: "danger",
          }[props.value] || "danger"
        }
        pill
      >
        {{
          3: <span>Initiate</span>,
          2: <span>Processing</span>,
          1: <span>Success</span>,
          0: <span>Cancelled</span>,
        }[props.value] || <span>Unknown</span>}
      </Badge>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (props) => {
      return (
        <div>
          <Button
            className="btn btn-xs btn-primary"
            color=""
            title="Details"
            onClick={() => modal(props.row.original, "RefundDetail")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
          </Button>
        </div>
      );
    },
  },
];

export default refundColumns;
