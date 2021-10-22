import React from "react";
import { Box} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Edit, Delete, Visibility } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { deletepost } from "../../service/api";
const useStyle = makeStyles({
    icons1: {
        display: "flex",
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        alignItems: "center",
    },
    icons: {
        width: "85%",
        display: "flex",
        justifyContent: 'space-between',


    },
    icons2: {

        overflow: "hidden",
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        width: 190,
    },
    icon: {
        margin: 5,
        borderRadius: 4,
        border: '1px solid black',

    },
    photot: {
        backgroundColor: 'aliceblue',
        height: 300,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'


    },
    container: {
        backgroundColor: '#3f6c5d',
        // height: '100vh',
        margin: '3rem',
    },
    button: {
        backgroundColor: '#3f8598',
        color: 'white',
        height: '2rem',
        cursor: 'pointer',
        borderRadius: 2,
        padding: 5,
        border: '2px solid green'
    },
    postdiv: {
        color: "black",
        fontSize: "large",
        display: "flex",
        backgroundColor: '#009688',
        margin: '25px',
        borderRadius: '4px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '5px 9px 15px 5px #ab2f2f',
        border: '1px solid black'
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
    }
});
const Post1 = ({ post,settoggle,toggle })=>{
    const deleteblog = async () => {
        await deletepost(post._id);
         settoggle(prev => !prev);
        window.alert('Deletion successfully !!');
    }

    const classes = useStyle();
    return (
        <>
            <div className={classes.postdiv}>
                <Box className={classes.icons}>
                    <Box className={classes.icons2}>{post.tittle}</Box>
                    <Box className={classes.icons2}>{post.categories} </Box>
                    <Box className={classes.icons2}> {new Date(post.currentDate).toDateString()} </Box>

                </Box>

                <Box className={classes.icons1}>

                    <Link to={`/details/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <Visibility cursor="pointer" className={classes.icon} />
                    </Link>

                    <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary" /></Link>
                    <Delete cursor="pointer" onClick={() => deleteblog()} className={classes.icon} color="error" />
                </Box>
            </div>

        </>
    );
}
export default Post1;