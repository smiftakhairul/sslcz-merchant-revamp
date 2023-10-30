const bulkOrderUploadInstructionsColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Column No',
        accessor: 'column_no',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Column Name',
        accessor: 'column_name',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Comment',
        accessor: 'comment',
        Cell: (props) => <p className="">{props.value}</p>,
    },
];

export default bulkOrderUploadInstructionsColumns;