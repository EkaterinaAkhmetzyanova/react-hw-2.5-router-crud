import { useState } from 'react';
import useJsonFetch from './useJsonFetch';
import Form from './Form';
import Post from './Post';

export default function PostReviewCard({match, history}) {
    const [isEdit, setEdit] = useState(false);
    const [posts] = useJsonFetch('http://localhost:7777/posts', isEdit);
    console.log(posts);

    const handleEdit = () => {
        setEdit(true);
    }

    const handleSubmit = (text) => {
        const data = JSON.stringify({id: Number(match.params.id), content: text});
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: data,
        })
        .then(() => {
            setEdit(false);
        })
    }

    const handleDelete = () => {
        fetch(`http://localhost:7777/posts/${match.params.id}`, {
            method: 'DELETE',
        })
        .then(() => {
            history.push('/');
        })
    }

    const handleClose = () => {
        setEdit(false);
    }
    
    //const selectedCard = posts.find((el) => el.id === Number(match.params.id));

    return (
        <div className='PostCard'>
            {posts && ((!isEdit && 
                <div className='PostWrapper'>
                    <button onClick={() => history.push('/')}>X</button>
                    <Post post={posts.find((el) => el.id === Number(match.params.id))} />
                    <button className='EditBtn' onClick={handleEdit}>Изменить</button>
                    <button className='DeleteBtn' onClick={handleDelete}>Удалить</button>
                </div>
            ) || 
                (isEdit && 
                    <div className='FormWrapper'>
                        <Form post={posts.find((el) => el.id === Number(match.params.id))} onSubmit={handleSubmit} onClose={handleClose} />
                    </div>
                ))
           }
        </div>
    )
}