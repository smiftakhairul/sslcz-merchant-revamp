import { invBaseUrl } from 'constants/default-values';
import { getParseFloat, getTableSerialIndex, titleCase } from 'helpers/common';
import moment from 'moment';
import { Badge, Button, ButtonGroup } from "reactstrap";

const fcommerceOrderListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Tracking ID",
        accessor: "order_tracking_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Customer Mobile",
        accessor: "cus_mob_org",
        Cell: props => <p className="">{props.row.original.shipping_info?.customer_mobile}</p>
    },
    {
        Header: "Placement Time",
        accessor: "order_placement_time",
        Cell: (props) => <p className="">{props.value ? moment(props.value, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : ""}</p>,
    },
    {
        Header: "Amount",
        accessor: "total_amount",
        Cell: props => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Order Status",
        accessor: "order_status",
        Cell: props => <Badge className={`badge badge-${
            {
                "PENDING": "secondary",
                "PROCESSING": "warning",
                "SHIPMENT": "info",
                "DELIVERED": "primary",
                "RECEIVED": "success",
                "CANCELLED": "danger",
                "DISPUTE": "warning",
                "REFUNDED": "primary",
                "EXPIRED": "info",
                "CONFIRMED": "success"
            }[props.value] || "warning"
        } text-white`} color={
            {
                "PENDING": "secondary",
                "PROCESSING": "warning",
                "SHIPMENT": "info",
                "DELIVERED": "primary",
                "RECEIVED": "success",
                "CANCELLED": "danger",
                "DISPUTE": "warning",
                "REFUNDED": "primary",
                "EXPIRED": "info",
                "CONFIRMED": "success"
            }[props.value] || "warning"
        } pill>
            <span>{titleCase(props.value || 'Unknown')}</span>
        </Badge>
    },
    {
        Header: "Payment Status",
        accessor: "order_payment_status",
        Cell: props => <Badge className={`badge badge-${
            {
                "PAID": "success",
                "UNPAID": "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                "PAID": "success",
                "UNPAID": "danger",
            }[props.value] || "warning"
        } pill>
            <span>{titleCase(props.value || 'Unknown')}</span>
        </Badge>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <Button
                    className="btn btn-xs btn-success mr-1"
                    color=""
                    title="Download"
                    onClick={() => window.open(`${invBaseUrl}/shop/invoice/${props.row.original.order_tracking_id}`, "_blank")}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-cloud-download"></i></span>
                </Button>
                <Button
                    className="btn btn-xs btn-info"
                    color=""
                    title="Update"
                    onClick={()=>modal(props.row.original, 'UpdateOrderDetails')}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
                </Button>
            </ButtonGroup>
        </div>
    },
];

export default fcommerceOrderListColumns;