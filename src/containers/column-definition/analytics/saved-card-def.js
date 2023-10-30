import { getParseFloat } from "helpers/common";

const savedCardColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Store ID",
        accessor: "strid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "All Card Trans",
        accessor: "all_cards",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Logged in Card Trans",
        accessor: "total_transaction",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Saved Card Trans",
        accessor: "no_of_saved_transaction",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Saved Card (%)",
        accessor: "saved_card_percentage",
        Cell: props => <p className="">{props.value}%</p>
    },
    {
        Header: "Moto Trans",
        accessor: "no_of_moto_transaction",
        Cell: props => <p className="">{props.value}</p>
    },
];

export default savedCardColumns;