import ReactButtonDropdown from 'components/bootstrap/custom-button-dropdown';
import { fcommerceBaseUrl } from 'constants/default-values';
import { getTableSerialIndex } from 'helpers/common';
import { Badge, Button, ButtonGroup } from "reactstrap";

const fcommerceProductListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Store Name",
        accessor: "store_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Product Name",
        accessor: "product_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Product SKU",
        accessor: "product_sku",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Product Price",
        accessor: "price",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Product Image",
        accessor: "product_thumb_image",
        cellClass: "text-center",
        rowClass: "text-center",
        Cell: props => <a href={props.value} target="_blank" rel="noreferrer">
            <img src={props.value} alt={props.row.original.product_sku} height="50"/>
        </a>
    },
    {
        Header: "Checkout Link",
        accessor: "checkout_link",
        Cell: props => <Button
            className="btn btn-xs btn-primary"
            title="Copy Checkout Link"
            id={`copy-checkout-btn-${props.row.original.id}`}
            color=""
            onClick={(e) => copyCheckoutLink(e, props.row.original)}
        >
            Copy
        </Button>
    },
    {
        Header: "Share",
        accessor: "checkout_link_share",
        Cell: props => <Button
            className="btn btn-xs btn-primary"
            title="Copy Checkout Link"
            color=""
            // onClick={() => modal(props.row.original, "GenerateQR")}
        >
            Share
        </Button>
    },
    {
        Header: "Status",
        accessor: "is_active",
        Cell: props => <Badge className={`badge badge-${
            {
                1: "success",
                0: "danger",
            }[props.value] || "warning"
        } text-white`} color={
            {
                1: "success",
                0: "danger",
            }[props.value] || "warning"
        } pill>
            <span>{
                {
                    1: "Active",
                    0: "Inactive",
                }[props.value] || "Unknown"
            }</span>
        </Badge>
    },
    {
        Header: "Featured Product",
        accessor: "is_featured",
        Cell: props => <Badge className={`badge badge-${
            {
                1: "dark",
                0: "secondary",
            }[props.value] || "warning"
        } text-white`} color={
            {
                1: "dark",
                0: "secondary",
            }[props.value] || "warning"
        } pill>
            <span>{
                {
                    1: "Yes",
                    0: "No",
                }[props.value] || "Unknown"
            }</span>
        </Badge>
    },
    {
        Header: "Stock Enabled",
        accessor: "is_stockable",
        Cell: props => <Badge className={`badge badge-${
            {
                1: "dark",
                0: "secondary",
            }[props.value] || "warning"
        } text-white`} color={
            {
                1: "dark",
                0: "secondary",
            }[props.value] || "warning"
        } pill>
            <span>{
                {
                    1: "Yes",
                    0: "No",
                }[props.value] || "Unknown"
            }</span>
        </Badge>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <ReactButtonDropdown
                    direction="left"
                    className="btn btn-info btn-xs align-middle d-flex align-items-center"
                    title={<i className="glyph-icon simple-icon-settings"></i>}
                    items={[
                        {title: "Edit", onClick: () => {modal(props.row.original, "EditProduct")}, disabled: false},
                        {title: "Variant Products", onClick: () => {window.open(`/app/fcommerce/variant-products/${props.row.original.stid}`, "_blank")}, disabled: false},
                    ]}
                    // disableToggle={true}
                />
            </ButtonGroup>
        </div>
    },
];

export default fcommerceProductListColumns;

const copyCheckoutLink = (e, row) => {
    let checkoutLink = null;
    if (row.has_variants) {
        checkoutLink = fcommerceBaseUrl + '/store/' + row.store_uid + '/product/' + row.product_slug;
    } else {
        checkoutLink = fcommerceBaseUrl + '/checkout/' + row.checkout_ref_code;
    }
    navigator.clipboard.writeText(checkoutLink);

    let elem = document.getElementById(`copy-checkout-btn-${row.id}`);
    let prevText = elem.innerHTML;
    elem.innerHTML = "Copied!"
    setTimeout(() => {
        elem.innerHTML = prevText;
    }, 1000);
};