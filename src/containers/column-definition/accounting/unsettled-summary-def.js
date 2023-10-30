import { getParseFloat } from "helpers/common";

const unsettledSummaryColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{row.row.original.strid === 'Total' ? '' : Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Store ID',
        accessor: 'strid',
        rowClass: 'bg-info',
        cellClass: 'bg-lite-info',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: "No. of Unsettled Trans",
        accessor: "no_of_trans",
        Cell: (props) => <p className="">{props.value || 0}</p>
    },
    {
        Header: "Unsettled Trans Amt",
        accessor: "trans_amt",
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Unsettled Payable",
        accessor: "payable_amt",
        rowClass: 'bg-gray',
        cellClass: 'bg-lite-gray',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Currency Type",
        accessor: "t_currency",
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: "No. of Unsettled Refund",
        accessor: "no_of_refund",
        Cell: (props) => <p className="">{props.value || 0}</p>
    },
    {
        Header: "Unsettled Refund Amt",
        accessor: "refund_settled_amt",
        rowClass: 'bg-warning',
        cellClass: 'bg-lite-warning',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "No. of Unsettled Chargeback",
        accessor: "no_of_chargeback",
        Cell: (props) => <p className="">{props.value || 0}</p>
    },
    {
        Header: "Unsettled Chargeback Amount",
        accessor: "chargeback_settled_amt",
        rowClass: 'bg-warning',
        cellClass: 'bg-lite-warning',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Total Payable",
        accessor: "total_payable",
        rowClass: 'bg-success',
        cellClass: 'font-weight-bold bg-lite-success',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
];

export default unsettledSummaryColumns;