import { Box ,Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle=makeStyles({
 container: {
     backgroundColor: '#d6cde05c',
     boxShadow: '8px 12px 10px #b7aaaa8f',
     height : "350px",
     margin: "10px",
     borderRadius: 10,
     border: "1px solid black",
     display: "flex",
     alignItems: "center",
     flexDirection: "column",
     '& > *': {
         padding: '0 5px 5px 5px'
     }
    
 },
 image:{
     height: "150px",
     width : "100%",
     objectFit: "cover",
     borderRadius: "10px 10px 0 0"
 },
 text:{
     fontSize: 12,
     color: '#878787'
 },
 heading:{
     fontSize: 18,
     fontWeight: 600,
     textAlign: 'center'
 },
 detail:{
      fontSize: 14,
      wordBreak: 'break-word',
       textAlign: 'center'
 }

})

const addlipsis =(string ,limit)=>{
  return ( string.length > limit ? string.substring(0,limit) + "..." : string) ;
}

const Post=({post})=>{
     const url =post.picture ?  post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    const classes =useStyle();
   return(
    <>
    <Box className={classes.container}>
    <img src={url} alt="wrapper" className={classes.image} />
    <Typography className={classes.text}>{post.categories}</Typography>
    <Typography className={classes.heading}>{addlipsis(post.tittle,20)}</Typography>
    <Typography className={classes.text}>Author:<span style={{fontWeight:600}}>{post.username}</span> </Typography>
    <Typography className={classes.detail}>{addlipsis(post.description,120)}</Typography>
    </Box>
    </>
   );
}
export default Post;