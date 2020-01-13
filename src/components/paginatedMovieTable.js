import React from 'react';
import { useTable, usePagination } from 'react-table';
// import MovieRow from './movieRow.js';
import MovieRowButtons from './movieRowButtons.js';

const PaginatedMovieTable = ({ movies, editMovie, deleteMovie }) => {

    function Table({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,

            // UnComment when not using Pagination
            // rows,
            
            // Page should have all the rows of each page
            page,

            pageOptions,
            state: { pageIndex, pageSize },
            gotoPage,
            previousPage,
            nextPage,
            setPageSize,
            canPreviousPage,
            canNextPage,
        } = useTable({
            columns,
            data,
            initialState: { pageIndex: 0 },
        },
            usePagination
        )

        // Render the UI for your table
        return (
            <div>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
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
            </table>
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous Page
                   </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                   </button>
                <div>
                    Page{' '}
                    <em>
                        {pageIndex + 1} of {pageOptions.length}
                    </em>
                </div>
                <div>Go to page:</div>
                <input
                    type="number"
                    defaultValue={pageIndex + 1 || 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                />
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
                    },
                    // {
                    //     Header: 'Edit/Delete',
                    // },
                ],
            }
        ],
        []
    )

    // const center = {
    //     margin: 'auto'
    // }

    return (
        <div className="List">
            <h4>Showing {movies.length} results</h4>
            <div>Paginated Version</div>
            {/* <table style={center}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                        <th>Run Time</th>
                        <th>Rating</th>
                        <th>Main Actors</th>
                    </tr>
                </thead>

                {movies.map((movie, index) => (
                    <MovieRow details={movie} key={index} editMovie={editMovie} deleteMovie={deleteMovie} />
                ))}
            </table> */}

            <Table columns={columns} data={movies} />

        </div>
    )
}

export default PaginatedMovieTable;


