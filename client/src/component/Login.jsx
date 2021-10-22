import { FormControl, InputBase, makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from "react-router";
import { loginprofile } from '../service/api';
import bcrypt from 'bcryptjs';
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
    component: {
        height: "100vh",
        backgroundColor: '#c0d7c7',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        margin: '0 30px'
    },
    btn: {
        margin: "0px 35px"
    },
    link: {
        borderRadius: 4,
        textDecoration: 'none',
        // width: '100%',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
         margin: "1.5rem 30px",
        height: 36,
        color: "white",
        backgroundColor: '#3f51b5',
    }

})

const initialvalue = {
    email: '',
    password: ''
}
const Login = ({ match }) => {
    const [data, setdata] = useState(initialvalue);
    const classes = useStyle();
    const history = useHistory();
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const checkprofile = async () => {

        let res = await loginprofile(data.email);
        const ismatch = (await bcrypt.compare(data.password, res[0].password));
        // const token = await res.generateAuthToken();
        // console.log('token is genatrated as ', token)

        if (ismatch) {
            history.push(`/`);
        //       const token = await res.generateAuthToken();
        // console.log('token is genatrated as ', token)
            console.log('correct login details');
        } else {
            window.alert('Invalid Email or password');
            history.push(`/login`);
        }
    }


    return (
        <div className={classes.component}>
            <FormControl className={classes.container}>
                <p className={classes.tittle}>NITA<span>BLOG</span></p>
                <p className={classes.text}>Enter Email</p>
                <InputBase onChange={(e) => handleChange(e)}
                    className={classes.takefeild}
                    name="email"
                />
                <p className={classes.text}>Enter password</p>
                <InputBase onChange={(e) => handleChange(e)}
                    type='password'
                    className={classes.takefeild}
                    name="password"
                />
                <Link className={classes.link} to={`/login/${data.email}`} onClick={(e) => { checkprofile(e) }} >Log In </Link>

                <details className={classes.btn}>
                    <summary>Need Help?</summary>
                    <div>
                        <Link to="/">Forgot password</Link>
                    </div>
                    <Link to="/">Other issues with Sign-In</Link>
                </details>
                <Link to='/register' className={classes.link} >Create a new account</Link>
            </FormControl>
            <div>
            </div>



        </div>
    );
}
export default Login;