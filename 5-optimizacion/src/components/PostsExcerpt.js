import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPostById } from "../features/postsSlice";

const PostsExcerpt = ({ postId }) => {
    
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p >
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
                <Link to={`post/${post.id}`}>See more</Link>
            </p>
            <ReactionButtons post={post} />
        </div>
    )
}
export default PostsExcerpt
