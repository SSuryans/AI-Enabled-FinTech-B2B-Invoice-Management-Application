import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Table } from "@material-ui/core";
import Mainbody from "./components/Mainbody";
import table from "./components/table";
const axios = require("axios");

function App() {
  return (
    <>
      
      <Mainbody />
      <table />
    </>
  );
}

export default App;
