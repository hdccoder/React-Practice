import { useState } from "react";
import { Axios } from "axios";


const AddComment = ({allComments, setAllComments}) => {
    const [postId, setPostId] = useState(1)
    const [name, setName] = useState("")
    const [body, setBody] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()
        const addComment = {
            postId,
            name,
            body
        }
        //console.log(addComment)
        const response = await axios.post('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/comments', addComment)
       console.log(response)
        // setAllComments([...allComments, response.data])
    }




    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
                <input
                    type="number"
                    Name="postId"
                    value={postId}
                    onChange={(event) => {setPostId(event.target.value)}}
                />
            </label>
            <label>
                <input
                    type="text"
                    Name="name"
                    value={name}
                    placeholder="Enter Comment Title Here"
                    onChange={(event) => {setName(event.target.value)}}
                />
            </label>
            <label>
                <input
                    type="text"
                    Name="body"
                    value={body}
                    placeholder="Enter Comment Here"
                    onChange={(event) => {setBody(event.target.value)}}
                />
            </label>

            <button type="submit">Submit</button>
          </form>
         
        </div>

    )
}

export default AddComment