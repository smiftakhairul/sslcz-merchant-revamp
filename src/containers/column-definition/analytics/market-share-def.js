import { getParseFloat } from "helpers/common";

const marketShareColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Card Type",
        accessor: "card_type_location",
        Cell: props => <p className="">{props.value}</p>
    },
    // {
    //     Header: "Transaction Date",
    //     accessor: "trans_day",
    //     Cell: props => <p className="">{props.value}</p>
    // },
    // {
    //     Header: "Store ID",
    //     accessor: "strid",
    //     Cell: props => <p className="">{props.value}</p>
    // },
    {
        Header: "No of Transactions",
        accessor: "total_transaction",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Amount",
        accessor: "total_amount",
        Cell: props => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Percentage (Based on Amount)",
        accessor: "percentage",
        Cell: props => <p className="">{props.value}%</p>
    },
];

export default marketShareColumns;