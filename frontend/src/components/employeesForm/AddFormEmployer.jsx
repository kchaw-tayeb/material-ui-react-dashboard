import React from "react";
import Title from "../utils/Title";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";

function AddForm({ hidePopup, id }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState(0);
  const [company, setCompany] = useState(id);
  const [data, setData] = useState(null);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      secondName: secondName,
      phone: phone,
      company: company,
    };
    console.log(firstName);
    axios
      .post("/api/employees", data)

      .then((res) => {
        setData(res.data);
        setFirstName("");
        setSecondName("");
        setPhone(0);
        setCompany("");
        // navigate("/");
        // history.push("/");
        hidePopup();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        borderRadius: "6px",
        borderColor: "text.primary",
        border: 1,
        "& .MuiButton-root": {
          backgroundColor: "rgb(55, 111, 208)",
          color: "rgb(255, 255, 255)",
          "&:hover": {
            backgroundColor: "#264E93",
          },
        },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          //   margin: 5,
          //   padding: 3,
          "& .MuiFormLabel-root": {
            fontSize: "0.85rem",
            color: "#495057",
          },

          // width: "995px",
          width: "100%",
          mb: 1,

          borderRadius: "6px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: 1.25,
            color: "black",

            mb: 1,
          }}
        >
          Formik
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiFormControl-root": {
              width: "100%",
              mt: 1,
              mb: 1,
              boxSizing: "content-box",
            },
            "& .MuiInputBase-root": {
              boxSizing: "border-box",
              color: "#495057",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "4px",
            },
            "& .MuiOutlinedInput-input": {
              padding: "16.5px 14px",
            },
            "& .MuiInputLabel-root": {
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
              fontWeight: 400,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Second Name"
            variant="outlined"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            size="small"
          />
          {/* <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        /> */}
          {/* <DropdownCompanies setCompany={setCompany} /> */}
        </Box>
        {/* <Link to="/">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <ArrowBackIcon />
        </IconButton>
      </Link> */}
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          type="submit"
          onClick={handleSubmit}
        >
          <SaveIcon />
        </IconButton>
        {/* </CardContent> */}
      </Paper>
    </Box>
  );
}

export default AddForm;
