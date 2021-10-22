import { FormControl, Button, InputBase, makeStyles } from '@material-ui/core'
import { useState } from 'react';
import { saveprofile } from '../service/api';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  container: {
    boxShadow: '0px 1px 36px 4px rgba(0,0,0,0.76)',
    padding: 20,
    width: 331,
    border: '2px solid black',
    margin: '68px auto',
    borderRadius: 20,
  },
  tittle: {
    backgroundColor: "lightgrey",
        margin: '20px 0px',
        textAlign:"center",
        padding: '25px 0px',
        color: '#64896e',
        fontSize: 30,
        fontWeight: 'bold',
  },
  takefeild: {
    
        flex: 1,
        margin: "0 30px",
        border: "2px solid black",
        borderRadius: '4px'
        // borderBottom: '2px solid black',
    },
    link: {
       flex: 1,
        margin: "0 30px",
        border: "1px solid black",
        borderRadius: '4px'
    },
  component: {
     backgroundColor: '#c0d7c7',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    margin: '0 30px'
  },
  btn: {
    margin: "10px 25px"
  },
  btn1: {
    margin: 25,
    marginTop: 0,
    marginBottom: 0
  },
  btn2: {
    margin: '1px 21px',
    display: "flex",
    width: '18rem',
    color: "white",
    backgroundColor: '#3f51b5',
    borderRadius: 4,
    textDecoration: "none",
    height: 36,
    alignItems: "center",
    justifyContent: "center"
  }

})

const initialvalue = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
  cpassword: "",
}

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const Register = () => {
  const history = useHistory();
  const [profile, setprofile] = useState(initialvalue);
  const classes = useStyle();
  const handleChange = (e) => {
    setprofile({ ...profile, [e.target.name]: e.target.value });
  }
  const updateprofile = async () => {
    if (profile.password !== profile.cpassword ) {
      window.alert('Password and Confirm password are no matching');
    }
    await saveprofile(profile);
    history.push(`/login`)
  }
  return (
    <div className={classes.component}>
      <FormControl className={classes.container}>
        <p className={classes.tittle}>NITA<span>BLOG</span></p>

        <p className={classes.text}>Enter First Name</p>
        <InputBase onChange={(e) => handleChange(e)}
        type='text'
        className={classes.takefeild}
        name="firstname"
        />
        <p className={classes.text}>Enter Last Name</p>
        <InputBase onChange={(e) => handleChange(e)}
        type='text'
        className={classes.takefeild}
        name="lastname"
        />
        <p className={classes.text}>Enter Phone Number</p>
        <InputBase onChange={(e) => handleChange(e)}
        type='text'
          className={classes.takefeild}
          name="phone"
          />

        <p className={classes.text}>Enter Email</p>
        <InputBase onChange={(e) => handleChange(e)}
          type='email'
          className={classes.takefeild}
          name="email"
        />


        <p className={classes.text}>Enter password</p>
        <InputBase onChange={(e) => handleChange(e)}
          type='password'
          className={classes.takefeild}
          name="password"
        />

        <p className={classes.text}>Enter Confirm password</p>
        <InputBase onChange={(e) => handleChange(e)}
          type='password'
          className={classes.takefeild}
          name="cpassword"
        />
        <hr />
        <Button onClick={() => updateprofile()}   className={classes.link} variant="contained" color="primary">Register</Button>
      </FormControl>
      <div>
      </div>



    </div>
  );
}
export default Register;