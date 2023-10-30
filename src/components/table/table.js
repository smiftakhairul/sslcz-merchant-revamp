import classnames from "classnames";
import FormGroupField from "components/bootstrap/custom-form-groups";
import DatatablePagination from "components/table/table-pagination";
import React from "react";
import { useEffect } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { Alert, Spinner } from "reactstrap";

const defaultPropGetter = () => ({});
const defaultEventGetter = () => {};

function Table({
  columns,
  data,
  divided = false,
  striped = false,
  bordered = false,
  showPagination,
  defaultPageSize = 5,
  setDefaultPageSize,
  currentPage = 1,
  setCurrentPage,
  totalPage = 0,
  isLoading = false,
  tableClass = "",
  getRowProps = defaultPropGetter,
  getHeaderGroupProps = defaultPropGetter,
  columnOnClickTrigger = defaultEventGetter,
  getCellProps = defaultPropGetter,
  hiddenColumns = [],
  serverSide = true,
  showPageSizeOptions = true,
  showPageJump = true,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: defaultPageSize,
        hiddenColumns: hiddenColumns,
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <React.Fragment>
      {isLoading
        ? <div className="text-center my-4">
          <Spinner color="primary" size="sm" />
        </div>
        : (data.length ? <React.Fragment>
        <div className="table-responsive table-sm">
          <table
            {...getTableProps()}
            className={`r-table table ${tableClass} ${classnames({
              "table-divided": divided,
              "table-striped": striped,
              "table-bordered": bordered,
            })}`}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr
                  {...headerGroup.getHeaderGroupProps(
                    getHeaderGroupProps(headerGroup)
                  )}
                >
                  {headerGroup.headers.map((column, columnIndex) => (
                    <th
                      key={`th_${columnIndex}`}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className={
                        column.isSorted
                          ? column.isSortedDesc
                            ? "sorted-desc"
                            : "sorted-asc"
                          : "" + " " + (column?.rowClass || "")
                      }
                    >
                      {column.render("Header")}
                      <span />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps(getRowProps(row))}>
                    {row.cells.map((cell, cellIndex) => (
                      <td
                        key={`td_${cellIndex}`}
                        {...cell.getCellProps([
                          {
                            className: cell.column.cellClass,
                          },
                          getCellProps(cell),
                        ])}
                        onClick={() =>
                          columnOnClickTrigger(cell.column.id, row)
                        }
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {showPagination ? (
          <div className="">
            <DatatablePagination
              page={serverSide ? currentPage - 1 : pageIndex}
              pages={serverSide ? totalPage : pageCount}
              canPrevious={
                serverSide
                  ? totalPage > 0 && currentPage - 1 > 0
                  : canPreviousPage
              }
              canNext={
                serverSide
                  ? totalPage > 0 && currentPage < totalPage
                  : canNextPage
              }
              pageSizeOptions={[5, 10, 20].filter(
                (item) => item !== defaultPageSize
              )}
              showPageSizeOptions={showPageSizeOptions}
              showPageJump={showPageJump}
              defaultPageSize={defaultPageSize}
              onPageChange={
                serverSide ? (p) => setCurrentPage(p + 1) : (p) => gotoPage(p)
              }
              onPageSizeChange={
                serverSide
                  ? (s) => setDefaultPageSize(s)
                  : (s) => setPageSize(s)
              }
              paginationMaxSize={10}
            />
          </div>
        ) : (
          ""
        )}
      </React.Fragment> : (
        <Alert color="warning" className="py-1 rounded-pill mt-0 mb-2">
          <span className="align-middle"><i className="glyph-icon simple-icon-info"></i></span> No data found.
        </Alert>
      ))}
    </React.Fragment>
  );
}

export const ReactTableWithPaginationCard = ({
  data,
  columnDefinition,
  divided = false,
  striped = false,
  bordered = false,
  showPagination = true,
  defaultPageSize = 5,
  setDefaultPageSize,
  currentPage = 1,
  setCurrentPage,
  totalPage = 0,
  isLoading = false,
  tableClass = "",
  getRowProps = defaultPropGetter,
  getHeaderGroupProps = defaultPropGetter,
  columnOnClickTrigger = defaultEventGetter,
  getCellProps = defaultPropGetter,
  hiddenColumns = [],
  serverSide = true,
  disableSearch = true,
  searchGrid = 3,
  showPageSizeOptions = true,
  showPageJump = true,
}) => {
  const [filteredData, setFilteredData] = React.useState([...data]);
  const cols = React.useMemo(() => [...columnDefinition], []);

  useEffect(() => {
    setFilteredData([...data]);
  }, [data])

  const searchHandler = (e) => {
    let pData = [...data].filter(item => {
      let flag = false;
      for (let [key, value] of Object.entries(item)) {
        if (('' + value).toLowerCase().match((e.target.value).toLowerCase())) {
          flag = true;
          break;
        }
      }
      return flag;
    });
    setFilteredData(pData);
  };

  return (
    <React.Fragment>
      <div className="modal_custom_padding">
      {
        !isLoading && !disableSearch
          ? <div className="row">
          <div className={"col-md-" + searchGrid.toString()}>
            <FormGroupField
              type="text"
              placeholder="Search..."
              required={false}
              formGroupClass="mb-2"
              onKeyup={searchHandler}
            />
          </div>
        </div>
        : ''
      }
      <div className="row">
        <div className="col-md-12">
          <Table
            columns={cols}
            data={filteredData}
            divided={divided}
            striped={striped}
            bordered={bordered || true}
            showPagination={showPagination}
            defaultPageSize={defaultPageSize}
            setDefaultPageSize={setDefaultPageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
            isLoading={isLoading}
            tableClass={tableClass}
            getRowProps={getRowProps}
            getHeaderGroupProps={getHeaderGroupProps}
            columnOnClickTrigger={columnOnClickTrigger}
            getCellProps={getCellProps}
            hiddenColumns={hiddenColumns}
            serverSide={serverSide}
            showPageSizeOptions={showPageSizeOptions}
            showPageJump={showPageJump}
          />
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};
