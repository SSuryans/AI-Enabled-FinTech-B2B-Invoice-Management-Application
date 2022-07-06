import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { Typography } from '@material-ui/core';
import './Mainbody.jsx';
import RefreshIcon from '@material-ui/icons/Refresh';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './table.jsx';
import DataTable from './table.jsx';
import pic from "D:\\Cooollege Stuffs\\6th Semester\\High Radius\\finallllllyyyy frontend new folder\\HRC80324W-front_end\\src\\components\\1.png";
import pic1 from "D:\\Cooollege Stuffs\\6th Semester\\High Radius\\finallllllyyyy frontend new folder\\HRC80324W-front_end\\src\\components\\3.png";

function Mainbody(){
  return(
    <div>
      <img src = {pic1} alt="logo" id="abcproductslogo"></img>
      <img src = {pic} alt="logo" id="highradiuslogo"></img>
      <Typography id="Invoice">
        Invoice List
        </Typography>
        <Button id="new" size="large" variant="contained">Predict</Button>
        <Button id="new" size="large" variant="contained">Analytics View</Button>
        <Button id="new" size="large" variant="contained">Advance Search</Button>
        <RefreshIcon id="refresh"color='secondary' fontSize="large"> </RefreshIcon>
        <TextField
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" id="inputadornment">
            <SearchIcon id="searchicon"></SearchIcon>
            </InputAdornment>
          ),
        }}></TextField>
        <Button id="newother" size="large" variant="contained">Add</Button>
        <Button id="new" size="large" variant="contained">Edit</Button>
        <Button id="new" size="large" variant="contained">Delete</Button>
        <DataTable></DataTable>
        </div>
  )
};
export default Mainbody;