import Form from "./Form";

export default function NewPost({history}) {
    const handleClose = () => {
        history.push('/');
    }

    const handleSubmit = (text) => {
        const data = JSON.stringify({id: 0, content: text});
        fetch('http://localhost:7777/posts', {
            method: 'POST',
            body: data,
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className='NewPost'>
            <Form onSubmit={handleSubmit} onClose={handleClose} />
        </div>
    )
}