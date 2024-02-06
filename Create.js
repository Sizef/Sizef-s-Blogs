import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Sizef');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            history.push('/');
        })

        

    }

    return ( 
        <div className="create">
            <h2>Create a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body :</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author :</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Sizef">Sizef</option>
                    <option value="Rachid">Rachid</option>
                    <option value="Rashid">Rashid</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;