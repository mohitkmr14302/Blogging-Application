import { Box,makeStyles,FormControl,InputBase,TextareaAutosize } from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";
import {Button} from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getpost,updatepost,uploadfile } from "../../service/api";


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
    form:{
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    takefeild: {
        flex: 1,
        margin: "0 30px",
        fontSize: "25px",
    },
    textarea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        '&:focus-visible': {
            outline: "none"
        }
    }
}));

const initialvalue = {
    tittle: "",
    description: "",
    picture: "",
    username: "Mohit kumar",
    categories: "All",
    currentDate: new Date().toLocaleDateString()
}

const Updateview = ({match})=>{
  //  const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
  const [file,setfile]=useState('');
    const [image,setimage]=useState('');
    
 
  const classes=useStyle();
  const history = useHistory();
  const [post,setpost]=useState(initialvalue);
  const url =post.picture ?  post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
    
     useEffect(()=>{
        const getimage=async ()=>{
            if(file){
                const data=new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const image=await uploadfile(data);

               post.picture = image.data;
               setimage(image.data)
            }
        }
        getimage();
    },[file,post])
  
    useEffect(()=>{
        const fetchdata=async()=>{
            const data=await getpost(match.params.id);
           //   console.log(data);
            setpost(data);
        }
        fetchdata();
    }, [match.params.id])
    const handleChange =async (e)=>{
         await setpost({...post,[e.target.name] : e.target.value})
      }

    const updateblog= async ()=>{
        await updatepost(match.params.id,post);
        history.push(`/details/${match.params.id}`);
    }
    return (
        <>
        <Box className={classes.container}>
         <img className={classes.image} src={url} alt="banner" />
         <FormControl className={classes.form}>
            <label htmlFor="fileinput">
             <AddCircle fontSize="large" color="action"/>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}} onChange={(e) => setfile(e.target.files[0])}/>
           
            <InputBase 
            placeholder="Add tittle"  
            onChange={(e) => handleChange(e)}  
            className={classes.takefeild} 
            value={post.tittle}
            name= "tittle"
            />
            <Button onClick={()=> updateblog()} variant="contained" color="primary">Update</Button>
            </FormControl>
            <TextareaAutosize
            className={classes.textarea}
            minRows={5}
            placeholder="Tell your story..."
            value= {post.description}
            onChange={(e) => handleChange(e)} 
            name= "description"
            />
         </Box>
        </>
    );
}

export default Updateview;