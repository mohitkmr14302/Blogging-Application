import { makeStyles, Box, Typography } from "@material-ui/core";
// import { lineHeight } from "@material-ui/system";
// import { width } from "@material-ui/system";
 const useStyle =makeStyles({
     image:{
        // background: `url(${"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"}) center/55% repeat-x #000`,
        // background: `url(${"https://p0.pikist.com/photos/11/508/whitespace-desktop-business-office-desktop-background-wallpaper-blog-blogging-create.jpg"}) center/55% repeat-x #fff`,
        background: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3WmOMbUqet7zWT9P86KAE7vqETXCCA3dSg&usqp=CAU"}) center/55% repeat-x #000`,
        width: "100%" ,
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#638868",
        justifyContent: "center",
        '& :first-child':{
            fontSize: 65,
            color: '#302c6de0',
            lineHeight:1,
             textShadow: '5px 3px #a1829c'
        },
        '& :last-child':{
            fontSize: 20,
            color: "#302c6de0",
            textShadow: '1px 1px #a1829c'
        },
         "@media (max-width: 340px)": {
             height: "22vh",
         },
          "@media (max-width: 591px)": {
              height: "32vh"
          }
     }
 })

const Banner=()=>{
    const classes=useStyle();
    // const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    return (
        <Box className={classes.image}>
        <Typography>NITA BLOG</Typography>
        <Typography>Blog for everyone</Typography>
        </Box>
    );
}
export default Banner;