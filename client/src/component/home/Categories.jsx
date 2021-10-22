import { Button, Table, TableRow,TableCell,TableHead,TableBody } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { categories } from "../home/constant/data";
import { Link } from "react-router-dom";
const useStyle =makeStyles({
    create: {
        margin: 20,
        color: "#ffffff",
        backgroundColor: "#6219ED",
        width: "85%"
    },
    table: {
        border: "1px solid rgba(224,224,224,1)"
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
});

const Categories =()=>{

    const classes=useStyle();
return (
   <>
   <Link to='/create' className={classes.link}><Button variant="contained" className={classes.create}>Create Blog</Button></Link>
   <Table className={classes.table}>
       <TableHead>
           <TableRow>
               <TableCell>
                     <Link to={'/'}className={classes.link}> All Categories</Link>
            
                </TableCell>
           </TableRow>
       </TableHead>
       <TableBody>
           {
           categories.map((category,ind)=>(
               <TableRow key={ind}>
                   <TableCell key={ind}>
                        <Link to={`/?categories=${category}`}  className={classes.link}>{category}</Link>
                   </TableCell>
               </TableRow>
           ))
         }
       </TableBody>
   </Table>
   </>
)
}
export default Categories;