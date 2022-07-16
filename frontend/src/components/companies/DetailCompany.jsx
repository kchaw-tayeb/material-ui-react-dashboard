import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listCompanyDetails } from "../../actions/companyActions";
import { useParams } from "react-router-dom";
import DetailsCompnay from "../DetailsCompnay";
import Temployers from "../Temployees";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Popup from "../utils/Popup";
import AddFormEmployer from "../employeesForm/AddFormEmployer";
import Grid from "@mui/material/Grid";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function bread() {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{
          margin: "0px 0px 1em",
          fontWeight: 600,
          lineHeight: 1.25,
        }}
      >
        Add a new company
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 5 }}>
        <Link underline="hover" color="blue" href="/">
          home
        </Link>

        <Typography color="text.primary">add </Typography>
      </Breadcrumbs>
      <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} />
    </>
  );
}

export default function DetailCompany() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openPopup, setOpenPopup] = useState(false);
  const hidePopup = () => {
    setOpenPopup(false);
  };
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const companyDetails = useSelector((state) => state.companyDetails);
  const { company } = companyDetails;

  useEffect(() => {
    dispatch(listCompanyDetails(id));
  }, [dispatch, openPopup]);

  return (
    <Paper elevation={0}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ p: 1, pt: 2 }}
          >
            <Tab label="details" {...a11yProps(0)} />
            <Tab label="employees" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* <Box sx={{ ml: 3 }}>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            sx={{
              margin: "0px 0px 1em",
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            company details
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, ml: 2 }}>
                <Link underline="hover" color="blue" href="/">
                  home
                </Link>

                <Typography color="text.primary">add </Typography>
              </Breadcrumbs>
              <Box sx={{ component: "span", ml: 110 }}>
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
              </Box>
            </Grid>
          </Box>
        </Box> */}
        {/* <Divider sx={{ marginTop: "24px", marginBottom: "24px" }} /> */}
        <TabPanel value={value} index={0}>
          <DetailsCompnay company={company} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Temployers id={id} />
        </TabPanel>
      </Box>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <AddFormEmployer hidePopup={hidePopup} id={id} />
      </Popup>
    </Paper>
  );
}
