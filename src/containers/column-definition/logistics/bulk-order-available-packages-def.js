const bulkOrderAvailablePackagesColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{Number(row.row.id) + 1}</p>,
    },
    {
        Header: 'Parcel Type',
        accessor: 'parcel_type',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Delivery Type',
        accessor: 'delivery_type',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Inside Dhaka',
        accessor: 'inside_dhaka',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Weight From',
        accessor: 'weight_from',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Weight To',
        accessor: 'weight_to',
        Cell: (props) => <p className="">{props.value}</p>,
    },
];

export default bulkOrderAvailablePackagesColumns;