import PostsList from "./PostsList"
import Loading from "../Loading"
import useFetch from "../useFetch";

const Home = () => {
    const { data: posts, isLoading, error } = useFetch('https://json-server-blogposts.herokuapp.com/posts/')

    return (
        <div className="home">
            {isLoading && <Loading />}
            {posts && <PostsList posts={posts}/>}
        </div>
    );
}

export default Home;