import React from 'react';
import { getParseFloat, getStatusColumnContent } from 'helpers/common';
import moment from 'moment';

const latestTransactionsColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: "Transaction ID",
        accessor: "mtxnid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Amount",
        accessor: "mamount",
        Cell: props => <p className="">{getParseFloat(props.value || 0)}</p>
    },
    {
        Header: "Status",
        accessor: "notice",
        Cell: props => <div>{getStatusColumnContent(props.value)}</div>
    },
    {
        Header: "Time",
        accessor: "incommingtime",
        Cell: props => <p className="">{props.value ? moment(props.value, 'YYYY-MM-DD hh:mm:ss').format('DD-MM-YYYY hh:mm A').toString() : ''}</p>
    },
];

export default latestTransactionsColumns;