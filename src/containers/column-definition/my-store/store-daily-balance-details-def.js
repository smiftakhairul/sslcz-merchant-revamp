import { getParseFloat, getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Badge } from "reactstrap";

const storeDailyBalanceListColumns = (currentPage, pageSize) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Transaction Date",
    accessor: "trnx_date",
    Cell: (props) => (
      <p className="">
        {props.value
          ? moment(props.value, "YYYY-MM-DD ").format("YYYY-MM-DD")
          : ""}
      </p>
    ),
  },
  {
    Header: "Transaction Balance",
    accessor: "trnx_bal",
    Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>,
  },
  {
    Header: "Credit Balance",
    accessor: "credit_bal",
    Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>,
  },
  {
    Header: "Debit Balance",
    accessor: "debit_bal",
    Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => (
      <Badge
        className={`badge badge-${
          {
            'Settled': "success",
            'Unsettled': "danger",
          }[props.value.toString()] || "danger"
        } text-white`}
        color={
          {
            'Settled': "success",
            'Unsettled': "danger",
          }[props.value.toString()] || "danger"
        }
        pill
      >
        {{
          'Unsettled': <span>Unsettled</span>,
          'Settled': <span>Settled</span>
        }[props.value.toString()] || <span>Unknown</span>}
      </Badge>
    ),
  },
  {
    Header: "Server Date",
    accessor: "server_date",
    Cell: (props) => (
      <p className="">
        {props.value
          ? moment(props.value, "YYYY-MM-DD HH:mm:ss").format(
              "YYYY-MM-DD HH:mm:ss"
            )
          : ""}
      </p>
    ),
  },
];

export default storeDailyBalanceListColumns;
