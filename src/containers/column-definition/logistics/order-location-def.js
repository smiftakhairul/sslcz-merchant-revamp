const orderLocationColumns = (current, next, refresh) => [
    {
        Header: 'Name',
        accessor: 'name',
        Cell: (props) => <a href="#." onClick={() => refreshLocations(current, next, refresh, props.row.original)}>
            {props.value}
            <span className="ml-2 text-success text-small" id={`ol-${current}-${next}-${props.row.original.id}`}></span>
        </a>,
    },
];

export default orderLocationColumns;

const refreshLocations = (current, next, refresh, row) => {
    navigator.clipboard.writeText(row.value);
    let elem = document.getElementById(`ol-${current}-${next}-${row.id}`);
    elem.innerHTML = 'Copied!';
    setTimeout(() => {elem.innerHTML = ''}, 1000);
    refresh(current, next, row);
};