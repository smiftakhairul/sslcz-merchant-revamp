import {
    getTableSerialIndex
} from "helpers/common";
import moment from "moment";
import { Button } from "reactstrap";

const storeTerminalListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => (
      <p className="text-muted mb-0">
        {getTableSerialIndex(row, currentPage, pageSize)}
      </p>
    ),
  },
  {
    Header: "Terminal Name",
    accessor: "terminal_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Terminal UID",
    accessor: "terminal_uid",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Created On",
    accessor: "created_at",
    Cell: (props) => <p className="">{props.value?moment(props.value,"YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"):''}</p>,
  },
  {
    Header: "View",
    accessor: "ffff",
    Cell: (props) => (
        <Button
          className="btn btn-xs btn-primary"
          title="Details"
          color=""
          onClick={() => modal(props.row.original, "GenerateQR")}
        >
          Generate QR
        </Button>
    ),
  },
  
];

export default storeTerminalListColumns;
