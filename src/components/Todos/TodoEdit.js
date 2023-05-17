import { useState } from 'react';
import useAPI from '../../requests/useAPI';
import DeleteButton from '../DeleteButton';


function TodoEdit({ value, url, completed }) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(value);
    const [complete, setComplete] = useState(completed);

    const { fetchData } = useAPI();

    function handleEdit() {
        setIsEditing(true);
    }

    function handleCancel() {
        setIsEditing(false);
        setText(value);
    }

    function handleCheck() {
        setComplete(!complete)
        fetchData(url, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: complete,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    function handleSave() {
        setIsEditing(false)
        fetchData(url, {
            method: 'PATCH',
            body: JSON.stringify({
                title: text,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }


    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <div className='todos'>
            {isEditing ?

                <div className='flex'>
                    <input type="text" value={text} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>

                : <div>
                    <div className='flex'>
                        <input type='checkbox' checked={complete} onChange={handleCheck} />
                        <span>{text}</span>
                    </div>
                    <div className='flex'>
                        <button onClick={handleEdit}>Edit</button>
                        <DeleteButton url={url} />
                    </div>
                </div>
            }
        </div>
    );
}

export default TodoEdit;