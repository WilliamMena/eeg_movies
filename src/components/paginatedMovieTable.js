import React from 'react';
import { useTable } from 'react-table';
// import MovieRow from './movieRow.js';
import MovieRowButtons from './movieRowButtons.js';

const PaginatedMovieTable = ({ movies, editMovie, deleteMovie }) => {

    function Table({ columns, data }) {
        // Use the state and functions returned from useTable to build your UI
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
        })
    
        // Render the UI for your table
        return (
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
                    {rows.map(
                        (row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                    <MovieRowButtons  details={row.original} key={i} editMovie={editMovie} deleteMovie={deleteMovie} />
                                    {/* {console.log(row)} */}
                                    {/* {console.log(movies)} */}
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
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


