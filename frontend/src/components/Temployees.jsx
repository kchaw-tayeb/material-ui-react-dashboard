import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Popup from "../components/utils/Popup";
import { useState, useEffect } from "react";
import AddFormEmployer from "../components/employeesForm/AddFormEmployer";
import EditFormEmployer from "../components/employeesForm/EditFormEmployer";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../components/utils/Title";
import axios from "axios";

import TableEditButtonEmployer from "../components/employeesForm/TableEditButtonEmployer";
import TableDeleteButtonEmployer from "../components/employeesForm/TableDeleteButtonEmployer";
import GetCompanyFromId from "../components/employeesForm/GetCompanyFromId";

import Paper from "@mui/material/Paper";
import useTable from "../../src/components/utils/useTable";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import { Box, Tooltip } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const headCells = [
  { id: "firstName", label: "First Name" },
  { id: "secondName", label: "Second Name" },
  { id: "phone", label: "Phone" },
  { id: "company", label: "Company" },
  { id: "action", label: "Actions", disableSorting: true },
];
function Temployers({ id }) {
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  // ********************

  const [employers, setEmployers] = useState([]);
  const [deleteIE, setDeleteIE] = useState(false);
  const [editEmployer, setEditEmployer] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/employees");
        setEmployers(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [openPopup, editEmployer, deleteIE]);
  // }, [deleteIE]);
  const employees = employers.filter((employee) => employee.company === id);
  // *************************
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(employees, headCells, filterFn);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.firstName.toLowerCase().includes(target.value)
          );
      },
    });
  };
  // ************************
  return (
    <>
      <Paper elevation={0} sx={{ minWidth: 275 }}>
        {/* <Box sx={{ ml: 20 }} component="span">
          <Tooltip title="Add a new employee">
            <IconButton
              color="default"
              aria-label="upload picture"
              component="span"
              onClick={() => setOpenPopup(true)}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box> */}

        <React.Fragment>
          <Box sx={{ ml: 2, mt: 1 }}>
            <Title>Employees list</Title>
          </Box>
          {/* <Toolbar>
          <Controls.Input
            label="Search Employees"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar> */}
          <Table size="small">
            {/* <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Second Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Company</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead> */}
            <TblHead />
            <TableBody>
              {recordsAfterPagingAndSorting().map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.secondName}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  {/* <TableCell>{row.company}</TableCell> */}
                  <TableCell>
                    <GetCompanyFromId id={row.company} />
                  </TableCell>
                  <TableCell align="right">
                    {/* <TableEditButton row={row} /> */}
                    {/* <TableDeleteButton row={row} setDeleteI={} /> */}
                    {/* <TableDeleteButton row={row} setDeleteI={setDeleteI} /> */}
                    <TableDeleteButtonEmployer
                      row={row}
                      setDeleteIE={setDeleteIE}
                      id={id}
                    />
                    <TableEditButtonEmployer
                      row={row}
                      setEditEmployer={setEditEmployer}
                      id={id}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* <TblPagination /> */}
        </React.Fragment>
        <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
          <AddFormEmployer hidePopup={hidePopup} id={id} />
        </Popup>
      </Paper>
    </>
  );
}

export default Temployers;
