import { getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Badge, Button, ButtonGroup } from "reactstrap";

const storeGroupListColumns = (currentPage, pageSize, modal) => [
  {
    Header: "#",
    Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
  },
  {
    Header: "Group Name",
    accessor: "group_name",
    Cell: (props) => <p className="">{props.value}</p>,
  },
  {
    Header: "Created On",
    accessor: "created_on",
    Cell: (props) => <p className="">{props.value
        ? moment(props.value, "YYYY-MM-DD hh:mm:ss")
            .format("DD-MM-YYYY hh:mm A")
            .toString()
        : ""}</p>,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: (props) => <Badge
        className={`badge badge-${
        {
            1: "success",
            0: "danger",
        }[props.value] || "danger"
        } text-white`}
        color={
        {
            1: "success",
            0: "danger",
        }[props.value] || "danger"
        }
        pill
    >
        {{
            1: <span>Active</span>,
            0: <span>De-active</span>,
        }[props.value] || <span>Unknown</span>}
    </Badge>,
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (props) => (
      <div>
          <Button
            className="btn btn-xs btn-primary mr-1"
            color=""
            title="Edit"
            onClick={() => modal(props.row.original, "StoreGroupEdit")}
          >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
          </Button>
      </div>
    ),
  },
];

export default storeGroupListColumns;
