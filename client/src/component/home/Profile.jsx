import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import { getprofile, userpost } from "../../service/api";
import Post1 from "./Post1"
const useStyle = makeStyles({
    icons: {
        float: "right"
    },
    icon: {
        margin: 5,
        border: "1px solid #878787",
        borderRadius: 10,

    },
    photot: {
        backgroundColor: '#245279',
        height: 300,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: "white"

    },
    container:{
        backgroundColor: '#245279',
        padding: "0 100px",
          "@media (max-width: 591px)": {
              padding: 0
          }
    },
    button: {
        backgroundColor: '#26b390',
        color: 'white',
        height: '2rem',
        cursor: 'pointer',
        borderRadius: 3,
        padding: 8,
        border: '2px solid #685959b5',

    },
    postdiv: {
        backgroundColor: '#ff6347d9',
        height: '3em',
        margin: '25px',
        borderRadius: '10px',
        boxShadow: '6px 6px #af796f'
    },
    headdiv: {

        height: '2em',
        margin: '25px',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontStyle: 'italic',
        backgroundColor: '#38b27d',
        fontWeight: 'bolder',
        color: 'beige',
    },
    lastdiv: {
        height: '8rem',
        backgroundColor: "#245279"
    },
    para: {
    margin: "initial",
    fontSize: '3em',
    textAlign: 'center',
    color: 'antiquewhite',
    }
});
const About = () => {
    const { search } = useLocation();
    const [toggle, settoggle]=useState(false);
    const [data, setdata] = useState({ profile: {}, posts: [] });

    useEffect(() => {
        const fetchData = async () => {

            let data2 = await getprofile(search);
            let data1 = await userpost();
            setdata({ profile: data2.data, posts: data1.data })
        }
        fetchData();

    }, [search,toggle]);
    const history=useHistory();
     if(document.cookie===""){
         window.alert("please login first !!");
        console.log("please login first");
        history.push('/login');
     }

    const classes = useStyle();
   
        return (
            <>

            <div className={classes.container}>
                <div className={classes.photot}>
                    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png" alt="fhj" style={{overflow: "hidden"}} height="300px" width="300px" />
                    <div className={classes.data}>
                        Name:<span> {data.profile.firstname} {data.profile.lastname}</span>
                        <p></p>
                        Email:<span> {data.profile.email}</span>
                        <p></p>
                        Phone No.: <span> {data.profile.phone}</span>
                        <p></p>
                        Status: <span>Active</span>
                        <p></p>
                        <button className={classes.button}>Update Profile</button>
                    </div>
                </div>


                <div className={classes.headdiv}>Your Post</div>

                {data.posts.map(function (val) {
                    return <Post1 post={val} settoggle={settoggle} toggle={toggle}/>

                })
                }

            <div className={classes.lastdiv}>
                <p className={classes.para}>Thanks to be here !!</p>
            </div>
            </div>
        </>
    )
}
export default About;