import { Box ,makeStyles, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState ,useEffect } from "react";
import { getpost } from "../../service/api";
import Comments from '../comments/Comments'
const useStyle=makeStyles((theme)=>({
    container:{
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover"
    },
    icons: {
        float: "right"
    },
     icon: {
        margin: 5,
        border: "1px solid #878787",
        borderRadius: 10,
        
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0 10px 0"
    },
    subheading: {
        color: "#878787",
        display: "flex",
        margin: "20px 0 ",
        [theme.breakpoints.down('md')]: {
            display: "block",
            textAlign: "center"
        }
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}));

const Detailview=({match})=>{
    const url="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const classes=useStyle();

    const [post,setpost]=useState({});
    useEffect(()=>{
        const fetchdata=async()=>{
            const data=await getpost(match.params.id);
            //console.log(data);
            setpost(data);
        }
        fetchdata();
    },[match.params.id])

   
    return (
       <Box className={classes.container}>
           <img className={classes.image} src={post.picture || url} alt="banner" />
           <Typography className={classes.heading}>{post.tittle}</Typography>
           <Box  className={classes.subheading}>

               <Link to={`/?username=${post.username}`} className={classes.link}>
               <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>
               </Link>
               
               <Typography style={{marginLeft: 'auto'}}>{new Date(post.currentDate).toDateString()}</Typography>
           </Box>

       <Typography>{post.description} </Typography>
       <Comments post={post}/>
       </Box>
    );
}
export default Detailview;