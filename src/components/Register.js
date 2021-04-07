import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./Register.css";

import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {

  const [currency, setCurrency] = React.useState("...");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const { id } = useParams();
  const [type, setType] = useState("")
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("");
  const [wheight, setWheight] = useState("");
  const [skincolor, setSkinColor] = useState("");
  const [pic, setPic] = useState("");
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  //   const onSubmit=(data)=>{
  //         console.log(data)
  //     }
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password, gender, size, wheight, skincolor, pic, categories };
    fetch("http://localhost:3001/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => {
      console.log(response.status);

      ;
      //history.go(-1);
    });
    history.push("/");
  };

  const classes = useStyles();



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit ={handleSubmit} action="/action_page.php" class="needs-validation" novalidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstName}
                onChange={(e)=> setFirstName(e.target.value)}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastName}
                onChange ={(e)=> setLastName(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange ={(e)=>setEmail(e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>


            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                value={gender} 
                onChange={(e)=> setGender(e.target.value)}
                id="outlined-select-currency"
                select
                fullWidth
                name="Gender"
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your Gender"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <div class="row">
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={wheight}
                    onChange={(e)=>setWheight(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="wheight"
                    label="wheight"

                    id="wheight"
                    autoComplete="wheight"
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={size} 
                    onChange={(e)=>setSize(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="size"
                    label="size"

                    id="size"
                    autoComplete="size"
                  />
                </Grid>
              </div>
              <div class="col">
                <Grid item xs={12}>
                  <TextField
                    value={skincolor}
                    onChange={(e)=>setSkinColor(e.target.value)}
                    variant="outlined"
                    required
                    fullWidth
                    name="skincolor"
                    label="skincolor"

                    id="skincolor"
                    autoComplete="skincolor"
                  />
                </Grid>
                </div>
            </div>
                
                <Grid item xs={12}>
                <TextField type="file" value={pic}
                  onChange={(e) => setPic(e.target.value)} 
                  variant="outlined"
                  required
                  fullWidth
                  

                  id="image"
                  autoComplete="image"
                  ></TextField>
                                  
                </Grid>
                
              
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );

};


export default Register;
{/* <div className="re">
    <div className="container">
      
      <form onSubmit ={handleSubmit} action="/action_page.php" class="needs-validation" novalidate>
        <div class="row">
          <div class="col">
        <div class="form-group">
        <label><h3>First Name :</h3></label>
        <input type="text" required value={firstName}
        onChange={(e)=> setFirstName(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col">
        <div class="form-group">
        <label><h3>Last Name :</h3></label>
        <input type="text" required value={lastName}
        onChange ={(e)=> setLastName(e.target.value)}class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        </div>
         <div class="row">
           <div class="col">
        <div class="form-group">
        <label><h3>Email :</h3></label>
        <input type="email" required value={email}
        onChange ={(e)=>setEmail(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col">
        <div class="form-group">
        <label><h3>Pasword :</h3></label>
        <input type="password" required value={password}
        onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg" id="pwd" placeholder="Enter password" name="pswd" required />
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        </div>
        <div class="row">
        <div class="col"></div>
          <div class="col">
        <div class="form-group">
        <label><h3>Gender :</h3></label>
        <select value={gender} onChange={(e)=> setGender(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required>
        <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col"></div>
        </div>
        <div class="row">
          <div class="col">
        <div class="form-group">
        <label><h3>Wheight :</h3></label>
        <input type ="text" required value={wheight}
        onChange={(e)=>setWheight(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col">
        <div class="form-group">
        <label><h3>Size :</h3> </label>
        <input type="text" required value={size} 
        onChange={(e)=>setSize(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col">
        <div class="form-group">
        <label><h3>Skin-Color :</h3></label>
        <input type ="text" required value={skincolor}
        onChange={(e)=>setSkinColor(e.target.value)} class="form-control form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        </div>
        <div class="row">
          <div class="col"></div>
          <div class="col">
        <div class="form-group">
        <label><h3>Please add a picture</h3> </label>
         <input type="file" value={pic} 
        onChange={(e)=>setPic(e.target.value)} name="picture" class="form-control-file form-control-lg"  placeholder="Enter username" name="uname" required></input>
          <div class="valid-feedback">Valid.</div>
          <div class="invalid-feedback">Please fill out this field.</div>
        </div>
        </div>
        <div class="col"></div>
        </div>

        <button type="submit" class="btn btn-primary"><h3>Submit</h3></button>
       
      </form>
     
      </div>
    


    </div> */}