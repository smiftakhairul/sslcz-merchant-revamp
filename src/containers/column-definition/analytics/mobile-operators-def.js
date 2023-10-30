import { getParseFloat } from "helpers/common";

const mobileOperatorsColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Operator Name",
        accessor: "operator_name",
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
    // {
    //     Header: "No of Transactions",
    //     accessor: "total_transaction",
    //     Cell: props => <p className="">{props.value}</p>
    // },
    {
        Header: "No of Success Transactions",
        accessor: "total_success_transaction",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Successful Amount",
        accessor: "total_success_amount",
        Cell: props => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Percentage (Based on Amount)",
        accessor: "success_percentage",
        Cell: props => <p className="">{props.value}%</p>
    },
];

export default mobileOperatorsColumns;