import { getTableSerialIndex } from 'helpers/common';
import { Button, ButtonGroup } from "reactstrap";

const fcommerceCategoryListColumns = (currentPage, pageSize, modal) => [
    {
        Header: "#",
        Cell: (row) => <p className="text-muted mb-0">{getTableSerialIndex(row, currentPage, pageSize)}</p>,
    },
    {
        Header: "Name",
        accessor: "category_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Description",
        accessor: "category_description",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Category UID",
        accessor: "category_uid",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Slug",
        accessor: "category_slug",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Parent Name",
        accessor: "parent_name",
        Cell: props => <p className="">{props.value}</p>
    },
    {
        Header: "Action",
        accessor: "action",
        Cell: props => <div>
            <ButtonGroup>
                <Button
                    className="btn btn-xs btn-info"
                    color=""
                    title="Update"
                    onClick={()=>modal(props.row.original, 'UpdateCategory')}
                >
                    <span className="align-middle d-flex align-items-center"><i className="glyph-icon simple-icon-note"></i></span>
                </Button>
            </ButtonGroup>
        </div>
    },
];

export default fcommerceCategoryListColumns;