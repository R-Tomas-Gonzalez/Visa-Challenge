import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UserCards from '../Components/UserCards';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center"
  },

}));

const Home = (props) => {
  const [search, setSearch] = useState("");
  const userProfiles = props.userData;
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1> Contact List </h1>
        <TextField onChange={event => {setSearch(event.target.value)}} id="Search" label="Search..." variant="outlined" />
      <Container>
        <br></br>
        <Grid container spacing={2} justify="center">
          {userProfiles.filter((val)=> {if (search == "") {
            return val;
          } else if(val.firstName.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }).map((item, key) => 
          <Grid key={item.id} item className={classes.itemContainer} xs={12} sm={6} md={3}>
            <UserCards  key={key} {...props} item={item} handleEdits={props.handleEdits} handleDelete={props.handleDelete} />
          </Grid> 
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
