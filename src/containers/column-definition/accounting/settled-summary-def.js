import { getParseFloat, getTableSerialIndex } from "helpers/common";
import moment from "moment";
import { Button } from "reactstrap";

const settledSummaryColumns = (currentPage = 1, pageSize = 1, modal, download) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: 'Date',
        accessor: 'settled_date',
        Cell: props => <p className="">{props.value ? moment(props.value, 'YYYY-MM-DD').format('DD-MM-YYYY').toString() : ''}</p>
    },
    // {
    //     Header: "Company Name",
    //     accessor: "company_name",
    //     Cell: (props) => <p className="">{props.value}</p>
    // },
    {
        Header: "Bank Account Name",
        accessor: "store_acct_title",
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: "Store Amount",
        accessor: "current_cr_amt",
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Refund & Charge Amount",
        accessor: "current_dr_amt",
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Paid Amount",
        accessor: "paid_amount",
        Cell: (props) => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Payment Info",
        accessor: "payment_info",
        Cell: props => <Button
            className="btn btn-xs btn-primary"
            title="Details"
            color=""
            onClick={()=>modal(props.row.original, 'PaymentInfo')}
        >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    },
    {
        Header: "Trx Summary",
        accessor: "trx_summary",
        Cell: props => <Button
            className="btn btn-xs btn-primary"
            title="Details"
            color=""
            onClick={()=>modal(props.row.original, 'TrxSummary')}
        >
            <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-eye"></i></span>
        </Button>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <Button
                className="btn btn-xs btn-primary"
                color=""
                title="Generate Excel"
                onClick={()=>download(props.row.original)}
            >
                <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-doc"></i></span>
            </Button>
        </div>
    },
];

export default settledSummaryColumns;