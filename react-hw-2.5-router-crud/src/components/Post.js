import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

export default function Post({post}) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/posts/${post.id}`);
        console.log(post.created)
    };

    return (
        <div className='Post' onClick={handleClick}>
            <div className='PostCreated'>{new Date(post.created).toLocaleString('ru')}</div>
            <div className='PostContent'>{post.content}</div>
        </div>
    )
}
Post.propTypes = {
    post: PropTypes.shape({
      content: PropTypes.string,
    }).isRequired,
  }