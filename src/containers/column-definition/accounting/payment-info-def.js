import { getParseFloat } from "helpers/common";

const accountingPaymentInfoColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Cheque Ref',
        accessor: 'cheque_no',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'Acct Payee',
        accessor: 'cheque_payee',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'Amount',
        accessor: 'cheque_amount',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: 'Bank',
        accessor: 'bankname',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'Attachment',
        accessor: 'cheque_attached_path',
        Cell: (props) => <p className="">{props.value}</p>
    },
];

export default accountingPaymentInfoColumns;