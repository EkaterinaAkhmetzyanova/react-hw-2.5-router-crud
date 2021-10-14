import useJsonFetch from "./useJsonFetch";
import Post from "./Post";

export default function HomePage({history}) {
    const [posts] = useJsonFetch('http://localhost:7777/posts');
    const addPost = () => {
        history.push('/posts/new');
    }
    
    console.log(posts);
    return (
        <div className='HomePage'>
            <button className='AddBtn' onClick={addPost}>Создать пост</button>
            <div className='Posts'>
                {posts && posts.map((el) => <Post post={el} key={el.id} />)}
            </div>
        </div>
    )
}