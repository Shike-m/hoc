import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//         overflowY: 'auto',
//     },
//     table: {
//         minWidth: 650
//     }
// })
// );

// const classes = useStyles();

class DisplayItems extends React.Component {

    render() {
        const { movies } = this.props;
        return (
            <Paper >
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name of Movie</TableCell>
                            <TableCell align="right">Directors</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">casts</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.directors}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                                <TableCell align="right">{row.casts}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default DisplayItems;