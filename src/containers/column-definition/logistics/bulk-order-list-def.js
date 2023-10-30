import { getTableSerialIndex } from 'helpers/common';
import { Link } from 'react-router-dom';
import { Badge, Button, ButtonGroup } from "reactstrap";
import moment from "moment";

const bulkOrderListColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Bulk ID",
        accessor: "bulk_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Total Orders",
        accessor: "total_orders",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Successful Orders",
        accessor: "successful_orders",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Failed Orders",
        accessor: "failed_orders",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Status",
        accessor: "is_upload_completed",
        Cell: props => <Badge className={`badge badge-${
            {
                true: "success",
                false: "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                true: "success",
                false: "danger",
            }[props.value] || "warning"
        } pill>
            {
                {
                    true: <span>Completed</span>,
                    false: <span>Pending</span>,
                }[props.value] || <span>Unknown</span>
            }
        </Badge>
    },
    {
        Header: "Date",
        accessor: "created_at",
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
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <Button
                    className="btn btn-xs btn-primary"
                    color=""
                    title="Details"
                    onClick={()=>window.open(`/app/logistics/bulk-order-details/${props.row.original.bulk_id}`, "_blank")}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
                </Button>
            </ButtonGroup>
        </div>
    },
];

export default bulkOrderListColumns;