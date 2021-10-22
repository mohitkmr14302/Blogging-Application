import Post from "./Post"
import { Grid } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { gatallpost } from "../../service/api";
const Posts = () => {
    const [posts, setposts] = useState([]);
    const { search } = useLocation();
    // let posts=[1,2,3,4,5,6,7,8,9];
    useEffect(() => {
        const fetchData = async () => {
            let data = await gatallpost(search);
            setposts(data);
        }
        fetchData();
    }, [search]);

   
    return (
        posts.map((post,ind) => (
            <Grid item lg={3} sm={4} xs={12} key={ind}>
                <Link to={`/details/${post._id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Post post={post} />
                </Link>
            </Grid>
        ))

    )
}
export default Posts;