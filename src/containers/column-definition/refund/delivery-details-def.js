import moment from "moment";

const refundDeliveryColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Noticed On",
        accessor: "created_at",
        Cell: props => <p className="">{props.value ? moment(props.value, "YYYY-MM-DD hh:mm:ss").format("DD-MM-YYYY hh:mm A").toString() : ""}</p>
    },
    {
        Header: "Store ID",
        accessor: "strid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "SSL Bank ID",
        accessor: "bank_ssl_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Invoice ID",
        accessor: "invoice_id",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Shipment Code",
        accessor: "delivery_com_code",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Delivery Date",
        accessor: "delivery_date",
        Cell: props => <p className="">{props.value ? moment(props.value, "YYYY-MM-DD").format("DD-MM-YYYY").toString() : ""}</p>
    },
];

export default refundDeliveryColumns;