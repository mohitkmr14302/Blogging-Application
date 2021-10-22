
import { Typography, Box, makeStyles } from "@material-ui/core";
import { Delete} from '@material-ui/icons'
import { deletecomment } from '../../service/api'
const useStyle=makeStyles({
    conponent: {
        marginTop: 30,
        backgroundColor: '#F5F5F5',
        padding: 10
    },
    container: {
        display: 'flex',
        marginBottom: 5
    },
    name: {
        fontSize: 18,
        fontWeight: 600,
        marginRight: 20
    },
    date:{
        color: '#878787'
    },
    delete: {
        marginLeft: 'auto',
    }
})


const Comment = ({ comment,settoggle,toggle })=>{
    const classes = useStyle();
    const removecomment= async ()=>{
        await deletecomment(comment._id);
        settoggle(prev => !prev);
        //  settoggle(!toggle);
    }
    
    return (
        <Box className={classes.conponent}>
            <Box className={classes.container}>
            <Typography className={classes.name}>{comment.name}</Typography>
            <Typography className={classes.date}>{new Date(comment.date).toDateString()}</Typography>
            <Delete cursor = "pointer" onClick={(e)=> removecomment()} className={classes.delete}/>
            </Box>
            <Typography>{comment.comment}</Typography>
        </Box>
    )
}
export default Comment;