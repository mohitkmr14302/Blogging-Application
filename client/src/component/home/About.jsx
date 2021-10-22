import React from "react";
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
const useStyle = makeStyles({
    container: {
        height: '60%',
        //  width: "fit-content",
        backgroundColor: '#5cd0e7a1'
    },
    component1: {
        display: 'flex',
        justifyContent: "space-between",
        alignContent: "center"
    },
    link: {
        backgroundColor: 'black',
        fontSize: 18,
        color: "white",
        margin: '15px 50px 0 0',
        borderRadius: '6px',
        padding: "13px 12px",
        textAlign: "center",
        textDecoration: "none",
        display: "flex"
    },
     link1: {
        color: 'black',
        fontSize: 18,
        fontWeight: 600,
        border: '1px solid black',
        backgroundColor: "#58b0c2",
        borderRadius: '5px',
        width: 'max-content',
        position: 'relative',
        // left: '46%',
        margin: '20px 43%',
        padding: "11px 15px",
        textAlign: "center",
        textDecoration: "none",
        display: "flex"
    },
    text:{
        fontSize: 20,
        fontWeight: 600,
        margin: '30px 0 0 50px'
    },text1: {
        fontSize: 12,
        margin: '0 0 0 50px'
    },para1: {
        fontSize: 100,
        fontWeight: 600,
        textAlign: 'center',
        margin: '0 30px',
         "@media (max-width: 400px)": {
             margin: 0
         }
    },para2: {
        fontSize: 20,
        textAlign: 'center',
        margin: '0 30px'
    },
    component3: {
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 220,
        height: 220,
        marginTop: 15,
        borderRadius: '50%'
    }
})
export default function About() {
    const classes = useStyle();
    return (
        <div class={classes.container}>
            <div className={classes.component1}>
                <div>
                <p className={classes.text}>NITA BLOG</p>
                <p className={classes.text1}>Blog for everyone</p>
                </div>
                <Link to={"/contact"} className={classes.link}>Contact Us</Link>
                {/* <a className={classes.link} href="http://localhost:3000/contact">Contact Us</a> */}
            </div>
            <hr style={{borderColor: 'black',margin: 20, fontSize: '2px'}} />
            <div className={classes.component2}>
                <div className={classes.second1}>
                 <p className={classes.para1}>Nita Blog is a place to write, read, and connect</p>
                 <p className={classes.para2}>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                 {/* <a className={classes.link1} href="http://localhost:3000/">Start Writting</a> */}
                 <Link to={"/"} className={classes.link1}>Start Writting</Link>
                </div>
                <div className={classes.component3}>
                    <img className={classes.image} src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.6435-9/72060782_2422570768011380_6035507620247240704_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PGs_zXG-C0EAX8r5_pb&_nc_ht=scontent.fpat3-2.fna&oh=18dcf7f4038bd4b25260b5d7f31fcd5e&oe=6148811F" alt="" />
                    <p style={{color: 'white' ,marginBottom: 0}}>Created and Managed by : Mohit Kumar</p>
                    <p  style={{color: 'white',marginTop: 5}}>NIT Agartala</p>
                </div>
            </div>
        </div>
    );
}
