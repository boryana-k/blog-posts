import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import useFetch from "../useFetch";

const PostDetails = () => {
    const { id } = useParams()
    const { data: post, isLoading, error } = useFetch('https://json-server-blogposts.herokuapp.com/posts/' + id)


    const navigate = useNavigate()

    const handleClick = () => {
        fetch('https://json-server-blogposts.herokuapp.com/posts/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log('deleted')
            navigate('/')
        })
    }

    return (
        <div className="post-details">
            {isLoading && <Loading />}
            {error && <div> {error} </div>}
            {post && (
                <article>
                    <h2> {post.title} </h2>
                    <div> {post.body} </div>
                    <p> Written by {post.author}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default PostDetails;