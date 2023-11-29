import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { type RootState } from "../store";
import { TypeActions } from "../redux/types";
import { setUserSlice } from "../redux/slice/UserSlice";

export default function MyTable() {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.users);

  useEffect(() => {
    // dispatching action by its type
    // watcherSaga is going to take that action, do asynchronous code with its handler getUsersSaga: axios.get()
    dispatch({ type: TypeActions.GET_USERS });
  }, [dispatch]); // FIXME: update on every new user (rows??)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.password}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={() =>
                    dispatch({ type: TypeActions.GET_USER_BY_ID, payload: row })
                  }
                  fullWidth
                  variant="contained"
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  onClick={() =>
                    dispatch({
                      type: TypeActions.DELETE_USER_BY_ID,
                      id: row.id,
                    })
                  }
                  fullWidth
                  variant="contained"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
