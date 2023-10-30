
const inputtedParameterColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Parameter',
        accessor: 'parameter',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'Reason',
        accessor: 'reason',
        Cell: (props) => <p className="">{props.value}</p>
    },
    {
        Header: 'Mandatory',
        accessor: 'mandatory',
        Cell: (props) => <p className="">{props.value}</p>
    },
];

export default inputtedParameterColumns;
