import {
    getTableSerialIndex
} from "helpers/common";
import moment from "moment";
import { Badge } from "reactstrap";

const settlementListColumns = (currentPage, pageSize) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Reference No",
    accessor: "reference_no",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Payee Name",
    accessor: "payee_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Settlement Amount",
    accessor: "settlement_amt",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Settlement Status",
    accessor: "approval_status",
    Cell: (props) => <Badge
        className={`badge badge-${
        {
            1: "success",
            0: "danger",
            2:  "info"
        }[props.value] || "danger"
        } text-white`}
        color={
        {
            1: "success",
            0: "danger",
            2: "info"
        }[props.value] || "danger"
        }
        pill
    >
        {{
            1: <span>Approved</span>,
            0: <span>Cancelled</span>,
            2: <span>Processing</span>
        }[props.value] || <span>Unknown</span>}
    </Badge>,
  },
  {
    Header: "Created On",
    accessor: "created_on",
    Cell: (props) => <p className="">{props.value?moment(props.value,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"):''}</p>,
  },
  
];

export default settlementListColumns;
