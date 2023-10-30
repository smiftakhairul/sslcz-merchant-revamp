import { getParseFloat, getSettlementType } from "helpers/common";

const accountingTrxInfoColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Type',
        accessor: 'transaction_type',
        Cell: (props) => <p className="">{getSettlementType(props.value)}</p>
    },
    {
        Header: 'No of Trans',
        accessor: 'no_of_trans',
        Cell: (props) => <p className="">{props.value || 0}</p>
    },
    {
        Header: 'Credit Amount',
        accessor: 't_cr_amount',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: 'Deduct Amount',
        accessor: 't_dr_amount',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
];

export default accountingTrxInfoColumns;
