import { Box, Button, TextareaAutosize, makeStyles} from "@material-ui/core"
import { newcomment,getcomments } from "../../service/api"
import { useState, useEffect } from "react"
import { getprofile } from "../../service/api";
import { useLocation } from "react-router-dom";
import Comment from './Comment';

const useStyle =makeStyles({
    component:{
        marginTop: 100,
        display: 'flex',
    },
    image:{
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea:{
        margin: '0 20px ',
        width: '100%',
        borderRadius: 5
    },
    button:{
        height: 40,
        cursor: 'pointer'
    }
})

const initialvalue = {
    name : '',
    postid: '',
    date: new Date(),
    comment: ''
}

const Comments =({post})=>{
   const classes=useStyle();
    const { search } = useLocation();
   const url = 'https://static.thenounproject.com/png/12017-200.png'
   const [comment, setcomment]=useState(initialvalue);
   const [comments, setcomments]=useState([]);
   const [toggle, settoggle]=useState(false);
   const [inputValue, setInputValue] = useState("");
   const [uesremail,setuseremail]=useState("");

   useEffect(()=>{
       const getdata= async ()=>{
           let response= await getcomments(post._id);
            let data2 = await getprofile(search);
            setcomments(response);
            setuseremail(`${data2.data.firstname} ${data2.data.lastname}`);
       }
       getdata();
   },[post,toggle,search])
   const handlechange=(e)=>{
       setInputValue(e.target.value);
       setcomment({
           ...comment,
           name: uesremail,
           postid: post._id,
           comment: e.target.value
       })
   }

    const postcomment=async()=>{
       await newcomment(comment);
        setInputValue("");
       settoggle(!toggle);
    }
   return (
        
        <Box>
        <Box className={classes.component}>
            <img src={url} alt="dp" className={classes.image} />
            <TextareaAutosize
            className={classes.textarea}
            rowsMin={5}
            onChange={(e)=> handlechange(e)}
            value={inputValue}
            placeholder= "Add a public comment..."
            />
            <Button
            variant= "contained"
            color= "primary"
            size="medium"
            className={classes.button}
            onClick={()=> postcomment()}
            >Comment</Button>
        </Box>
        {
            comments && comments.map(comment=>(
                <Comment comment={comment} settoggle={settoggle} toggle={toggle}/>
            ))
        }
        </Box>

       
    )
}

export default Comments;