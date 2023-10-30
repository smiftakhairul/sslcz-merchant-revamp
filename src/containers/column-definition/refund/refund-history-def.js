import { getParseFloat } from "helpers/common";
import moment from "moment";
import { Badge } from "reactstrap";

const refundHistoryColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Requested On",
        accessor: "request_on",
        Cell: props => <p className="">{props.value ? moment(props.value, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : ""}</p>
    },
    {
        Header: "Refund Ref. ID",
        accessor: "refund_ref_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Store Name",
        accessor: "strid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Transaction ID",
        accessor: "transaction_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Refund Amount",
        accessor: "refund_amt",
        Cell: props => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Refund Status",
        accessor: "request_status",
        Cell: props => <div>
            {
                {
                    1: <Badge className="badge badge-success text-white" color="success" pill>Success</Badge>,
                    0: <Badge className="badge badge-danger text-white" color="danger" pill>Cancelled</Badge>,
                    2: <Badge className="badge badge-warning text-white" color="warning" pill>Processing</Badge>,
                }[parseInt(props.value || 0)] || <Badge className="badge badge-warning text-white" color="warning" pill>Unknown</Badge>
            }
        </div>
    },
    {
        Header: "Approval Status",
        accessor: "approved_status",
        Cell: props => <div>
            {
                {
                    1: <Badge className="badge badge-success text-white" color="success" pill>Success</Badge>,
                    0: <Badge className="badge badge-danger text-white" color="danger" pill>Cancelled</Badge>,
                    2: <Badge className="badge badge-warning text-white" color="warning" pill>Processing</Badge>,
                    3: <Badge className="badge badge-info text-white" color="info" pill>Initiate</Badge>,
                    4: <Badge className="badge badge-secondary text-white" color="secondary" pill>Submit to Bank</Badge>,
                }[parseInt(props.value || 0)] || <Badge className="badge badge-warning text-white" color="warning" pill>Unknown</Badge>
            }
        </div>
    },
];

export default refundHistoryColumns;