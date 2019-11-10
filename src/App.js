import React from 'react';
import {ValidEmail} from './ValidEmail';
import {ValidPass} from './ValidPass';
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      mail: '',
      password: '',
      message: ''
     }
 }
  mailHandle = (e)=> {
    const mailValue =  e.target.value;
   this.setState({
      mail: mailValue
     })
     console.log(mailValue)
    }
  passwordHandle =(e) =>{
      const passwordValue = e.target.value;
      this.setState({
       password: passwordValue
      })
      console.log(passwordValue)
    }


chekvalid=()=>{
   const isEmailValid = ValidEmail(this.state.mail);
   const isPasswordValid = ValidPass(this.state.password);
   if(!isEmailValid){
     this.setState({
      message: 'email is not valid'
     })
  }
   if(!isPasswordValid){
     this.setState({
       message: 'password should have more then 5 character'
     })
   }
   if(this.state.mail.length ===0){
    this.setState({
      message: 'you should fill your email'
    })
  }
    if(this.state.password.length ===0){
      this.setState({
        message: 'you should fill your password'
      }) 
   }
   if(this.state.password.length ===0 && this.state.mail.length ===0){
    this.setState({
      message: 'you should fill your email and password'
    }) 
 }
   if(isEmailValid && isPasswordValid){
     this.setState({
       message: 'success'
     })
   }
}

//arji tanel chekvalid@ durs arandzin komponent sarqel te voch???

   
render(){
    return(
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
         <div className="MuiAvatar-root MuiAvatar-circle jss2 MuiAvatar-colorDefault">
          <svg className="MuiSvgIcon-root" focusable="false"
           viewBox="0 0 24 24" aria-hidden="true" role="presentation">
             <g fill="none"><path d="M0 0h24v24H0V0z">
               </path><path d="M0 0h24v24H0V0z" opacity=".87"></path>
               </g><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                 </path></svg></div> 

        
         <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.mail} onChange={this.mailHandle}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password} onChange={this.passwordHandle}
          />
          <div className='message'>{this.state.message}</div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
             type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.chekvalid} 
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    )
  }
}
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



export default App;
