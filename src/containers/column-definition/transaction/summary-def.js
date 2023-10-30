import { getCardInfo, getParseFloat } from "helpers/common";

const transactionSummeryColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{row.row.original.cardtype === '-Total' ? '' : Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Gateway',
        accessor: 'gateway',
        // cellClass: 'list-item-heading',
        Cell: (props) => <p className="">{getCardInfo(props.row.original.cardtype)['gateway_bank'] || ''}</p>,
    },
    {
        Header: 'Card Type',
        accessor: 'cardtype',
        // cellClass: 'text-muted',
        Cell: (props) => {
            return (
                <div>
                    <span className="">{getCardInfo(props.value)['card_type'] || ''}</span>
                </div>
            )
        },
    },
    {
        Header: "No. of Transaction",
        accessor: "total_rows",
        Cell: (props) => <p className="">{props.value || 0}</p>
    },
    {
        Header: "Amount",
        accessor: "total_mamount",
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    // {
    //     Header: "Bank Charge",
    //     accessor: "total_bank_portion",
    //     Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    // },
    // {
    //     Header: "SSL Charge",
    //     accessor: "total_ssl_potion",
    //     Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    // },
    {
        Header: "SSL Charge",
        accessor: "total_bank_portion",
        Cell: (props) => <p className="">{getParseFloat(parseFloat(props.value || 0) + parseFloat(props.row.original.total_ssl_potion || 0))}</p>
    },
    {
        Header: "Receivable",
        accessor: "total_store_portion",
        // cellClass: 'font-weight-bold',
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    }
];

export default transactionSummeryColumns;