import { getParseFloat } from "helpers/common";

const fcommerceOrderDetailsCartColumns = [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{
            (row.row.original.amount === 'Shipping Amount' || row.row.original.amount === 'Total Amount') ? '' : Number(row.row.id) + 1
        }</p>,
    },
    {
        Header: 'Product Name',
        accessor: 'product_name',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Product SKU',
        accessor: 'product_sku',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        Cell: (props) => <p className="">{(props.value === 'Shipping Amount' || props.value === 'Total Amount') ? props.value : getParseFloat(props.value || 0)}</p>,
    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
        Cell: (props) => <p className="">{props.value}</p>,
    },
    {
        Header: 'Quantity Amount',
        accessor: 'quantity_amount',
        Cell: (props) => <p className="">{(props.value === 'Shipping Amount' || props.value === 'Total Amount') ? props.value : getParseFloat(props.value || 0)}</p>,
    },
];

export default fcommerceOrderDetailsCartColumns;