import React from 'react';
import { useTable, usePagination, useSortBy, useFilters, useGlobalFilter } from 'react-table';
import matchSorter from "match-sorter";
// import MovieRow from './movieRow.js';
import MovieRowButtons from './movieRowButtons.js';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const PaginatedMovieTable = ({ movies, editMovie, deleteMovie }) => {

    // Define a default UI for filtering
    function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter
    }) {
        const count = preGlobalFilteredRows.length;

        return (
            <span>
                Search:{" "}
                <input
                    value={globalFilter || ""}
                    onChange={e => {
                        setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                    }}
                    placeholder={`${count} records...`}
                    style={{
                        fontSize: "1.1rem",
                        border: "0"
                    }}
                />
            </span>
        );
    }

    // Define a default UI for filtering
    function DefaultColumnFilter({
        column: { filterValue, preFilteredRows, setFilter }
    }) {
        const count = preFilteredRows.length;

        return (
            <input
                value={filterValue || ""}
                onChange={e => {
                    setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`Search ${count} records...`}
            />
        );
    }

    function fuzzyTextFilterFn(rows, id, filterValue) {
        return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
    }

    fuzzyTextFilterFn.autoRemove = val => !val;


    function ShowTable({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI

        const filterTypes = React.useMemo(
            () => ({
                // Add a new fuzzyTextFilterFn filter type.
                fuzzyText: fuzzyTextFilterFn,
                // Or, override the default text filter to use
                // "startWith"
                text: (rows, id, filterValue) => {
                    return rows.filter(row => {
                        const rowValue = row.values[id];
                        return rowValue !== undefined
                            ? String(rowValue)
                                .toLowerCase()
                                .startsWith(String(filterValue).toLowerCase())
                            : true;
                    });
                }
            }),
            []
        );

        const defaultColumn = React.useMemo(
            () => ({
                // Let's set up our default Filter UI
                Filter: DefaultColumnFilter
            }),
            []
        );


        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,

            // UnComment when not using Pagination
            // rows,

            // Page should have all the rows of each page
            page,
            // Below for Pagination
            pageOptions,
            state,
            state: { pageIndex, pageSize },
            gotoPage,
            previousPage,
            nextPage,
            setPageSize,
            canPreviousPage,
            canNextPage,

            // Below for filtering
            flatColumns,
            preGlobalFilteredRows,
            setGlobalFilter
        } = useTable({
            columns,
            data,
            initialState: { pageIndex: 0 },

            // Below for filtering
            defaultColumn,
            filterTypes

        },
            useFilters,
            useGlobalFilter,
            useSortBy,
            usePagination
        )

        // We don't want to render all of the rows for this example, so cap
        // it for this use case
        // const firstPageRows = rows.slice(0, 10);

        // Render the UI for your table
        return (
            <div>
                <Table striped hover size="sm" {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    // <th {...column.getHeaderProps()}>
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                            {/* ⇩▼ ⇧▲   https://unicode-table.com/en/sets/arrow-symbols/*/}
                                        </span>


                                        {/* Render the columns filter UI */}
                                        {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
                                    </th>

                                ))}
                            </tr>
                        ))}
                        <tr>
                            <th
                                colSpan={flatColumns.length}
                                style={{
                                    textAlign: "left"
                                }}
                            >
                                <GlobalFilter
                                    preGlobalFilteredRows={preGlobalFilteredRows}
                                    globalFilter={state.globalFilter}
                                    setGlobalFilter={setGlobalFilter}
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {/* {row.map( */}
                        {page.map(
                            (row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })}
                                        <MovieRowButtons details={row.original} key={i} editMovie={editMovie} deleteMovie={deleteMovie} />
                                        {/* {console.log(row)} */}
                                        {/* {console.log(movies)} */}
                                    </tr>
                                )
                            }
                        )}
                    </tbody>
                </Table>
                <div>
                    <Button variant="success" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous Page
                   </Button>
                    <Button variant="success" onClick={() => nextPage()} disabled={!canNextPage}>
                        Next Page
                   </Button>
                    <div>
                        Page{' '}
                        <em>
                            {pageIndex + 1} of {pageOptions.length}
                        </em>
                    </div>
                    <br></br>
                    <div>
                        Go to page: 
                        <input
                        type="number"
                        defaultValue={pageIndex + 1 || 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                    />
                    </div>
                    <br></br>
                    
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                    >
                        {[10, 20].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Title',
                        accessor: 'title',
                    },
                    {
                        Header: 'Genre',
                        accessor: 'genre',
                    },
                    {
                        Header: 'Year',
                        accessor: 'year',
                    },
                    {
                        Header: 'Run Time',
                        accessor: 'run_time',
                    },
                    {
                        Header: 'Rating',
                        accessor: 'rating',
                    },
                    {
                        Header: 'Main Actors',
                        accessor: 'main_actors',
                        sortType: 'basic'
                    },
                    // {
                    //     Header: 'Edit/Delete',
                    // },
                ],
            }
        ],
        []
    )

    return (
        <div className="list">
            {/* <h4>Paginated Table</h4> */}
            <div>There are a total of {movies.length} results</div>

            <sub>To toggle sorting, click the header of the column</sub>
            <ShowTable columns={columns} data={movies} />

        </div>
    )
}

export default PaginatedMovieTable;


