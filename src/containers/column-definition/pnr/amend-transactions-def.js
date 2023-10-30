import { getTableSerialIndex } from "helpers/common";
import moment from "moment";

const amendTrxColumns = (currentPage, pageSize) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: 'SSL ID',
        accessor: 'sslid',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Old Transaction ID',
        accessor: 'old_mtxnid',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: "New Transaction ID",
        accessor: "new_mtxnid",
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: "Created On",
        accessor: "created_on",
        Cell: props => <p className="">{props.value ? moment(props.value, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY hh:mm A').toString() : ''}</p>
    },
    {
        Header: "Created By",
        accessor: "created_by",
        Cell: (props) => <p className="">{props.value}</p>
    },
];

export default amendTrxColumns;