import { Box, makeStyles, FormControl, InputBase} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { createpost, uploadfile, getuseremail } from "../../service/api";
const initialvalue = {
    tittle: "",
    description: "",
    picture: "",
    username: "Mohit kumar",
    categories: "All",
    currentDate: new Date().toLocaleDateString()
}

const useStyle = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        //  margin: '10px 50px',
        [theme.breakpoints.down('md')]: {
            padding: 0
            // margin: 0
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover"
    },
    form: {
        display: "flex",
        flexDirection: "row",
        // marginTop: 10
        justifyContent: "center",
        alignItems: "center"
    },
    takefeild: {
        flex: 1,
        margin: "0 30px",
        fontSize: "20px",
        height: 40,marginTop: "1.6em" ,
        border: '1px solid black',
        borderRadius: 5,
    //    backgroundColor: '#87cae542',
    },
    textarea: {
        display: "block",
        minWidth: "99%",
        marginBottom: '2em',
        fontSize: 18,
        // backgroundColor: '#87cae542',
        border: '1px solid black',
        borderRadius: 5,
        // '&:focus-visible': {
        //     // outline: "none"
        // }
    }
}));


const Createview = () => {
    const classes = useStyle();
    const history = useHistory();
    const { search } = useLocation();
    const [post, setpost] = useState(initialvalue);
    const [file, setfile] = useState('');
    const [useremail, setuseremail] = useState('');
    const [image, setimage] = useState('');
    const url = post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    useEffect(() => {
        const getimage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const image = await uploadfile(data);

                post.picture = image.data;
                setimage(image.data)
            }
            const useremail1 = await getuseremail(search);
            setuseremail(useremail1);
        }
        getimage();
    }, [file])

    const handleChange = (e) => {

        setpost({ ...post, [e.target.name]: e.target.value })
    }

    const savepost = async () => {
        post.username = useremail;
        await createpost(post);
        history.push('/');
    }
    // const history=useHistory();
     if(document.cookie===""){
         window.alert("please login first !!");
        console.log("please login first");
        history.push('/login');
     }
    return (
        <>
            <Box className={classes.container}>
                <img className={classes.image} src={url} alt="banner" />
                <FormControl className={classes.form}>
                    <label htmlFor="fileinput">
                        <AddCircle  style={{ marginTop: "1em" }} fontSize="large" color="action" />
                    </label>
                    <input type="file" id="fileinput" style={{ display: "none"  }} onChange={(e) => setfile(e.target.files[0])} />
                    {/* <input type="file" id="fileinput" style={{ display: "none"  }} onChange={(e)=>console.log(e.target.files[0])} /> */}
                    <InputBase onChange={(e) => handleChange(e)}
                        placeholder="Add tittle"
                        className={classes.takefeild}
                        name="tittle"
                    />
                    <Button onClick={() => savepost()}  style={{ height: 40,marginTop: "1.6em" }} variant="contained" color="primary">Publish</Button>
                </FormControl>

                <input
                    onChange={(e) => handleChange(e)}
                    className={classes.textarea}
                    minRows={1}
                    style={{ height: 40,marginTop: "1.6em" }}
                    placeholder="Add category"
                    name="categories"
                />

                <textarea
                    onChange={(e) => handleChange(e)}
                    className={classes.textarea}
                    rows={5}
                    placeholder="Tell your story..."
                    name="description"
                />
            </Box>
        </>
    );
}

export default Createview;