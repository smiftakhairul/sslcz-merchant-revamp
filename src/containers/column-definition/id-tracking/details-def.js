import {
  getBinInfo,
  getParseFloat,
  getStatusColumnContent,
  getTableSerialIndex,
} from "helpers/common";
import moment from "moment";
import { Button } from "reactstrap";

const merchantTransactionColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
  },
  {
    Header: "Date",
    accessor: "incommingtime",
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
    Header: "Merchant Info",
    accessor: "mtxnid",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-2">Merchant Transaction ID: <span className="font-weight-bold">{props.value}</span></p>
          <p className="mb-0">SSL Transaction ID: <span className="font-weight-bold">{props.row.original?.sslid}</span></p>
          <p className="mb-0">Bank Transaction ID: <span className="font-weight-bold">{props.row.original?.banksslid}</span></p>
        </div>
      );
    },
  },
  {
    Header: "Transaction Info",
    accessor: "cardtype",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-0">Card Type: <span className="font-weight-bold">{props.value}</span></p>
          <p className="mb-0">
            Card Number: <span className="font-weight-bold">{props.row.original?.scredit_card_num}</span>
          </p>
          <p className="mb-2">
            Bank Gateway:{" "}
            <span className="font-weight-bold">{getBinInfo(props.row.original?.issuerbank)?.bin_info_bank || ""}</span>
          </p>
          <p className="mb-0">
            Card Holder Name: <span className="font-weight-bold">{props.row.original?.cardholdername}</span>
          </p>
          <p className="mb-0">
            Card Issuer Bank: <span className="font-weight-bold">{props.row.original?.issuerbank}</span>
          </p>
        </div>
      );
    },
  },
  {
    Header: "Store",
    accessor: "strid",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Amount",
    accessor: "mamount",
    Cell: (props) => {
      return (
        <div>
          <p className="mb-0">
            {getParseFloat(props.value || 0)}
          </p>
        </div>
      );
    },
  },
  {
    Header: "Status",
    accessor: "notice",
    Cell: (props) => {
      return <div>{getStatusColumnContent(props.value)}</div>;
    },
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
            onClick={() => modal(props.row.original, "TransactionDetail")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
          </Button>
        </div>
      );
    },
  },
];

export default merchantTransactionColumns;
