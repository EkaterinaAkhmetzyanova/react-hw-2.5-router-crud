import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Form({post, onSubmit, onClose}) {
    const [form, setForm] = useState({text: post.content});

    const handleChange = (event) => {
        setForm(prevState => ({...prevState, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(form.text);
    }

    return (
        <form className='PostForm' onSubmit={handleSubmit}>
            <button className='CloseBtn' onClick={onClose}>X</button>
            <textarea className='FormInput' onChange={handleChange} name='text' value={form.text}></textarea>
            <button className='AddBtn'>Опубликовать</button>
        </form>
    )
}

Form.propTypes = {
    post: PropTypes.shape({
      content: PropTypes.string,
    }),
  }

Form.defaultProps = {
    post: {content: ''}
}