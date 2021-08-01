import React, { useState,useEffect} from "react";
import { Box, Grid, makeStyles, TextField,Button,Typography} from "@material-ui/core";
import Search from './SearchBar'
const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "#fff",
    boxShadow: "0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius: "5px",
    "& > *": {
      height: "56px",
    },
  },
}));

export default function Header(props) {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("suggestion"));
    if(!items){
      localStorage.setItem("suggestion",JSON.stringify(['cat']))
    }
  }, [])
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={4}>
        <Box className={classes.wrapper} mt={-3}>
          <Search placeholder="Enter a Book Name..." values={props.data} />
        </Box>
      </Grid>
    </Grid>
  );
}


