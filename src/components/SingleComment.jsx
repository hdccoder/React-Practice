import { useParams, Link } from "react-router-dom"

const SingleComment = ({allComments}) => {

    const params = useParams()
    const id = params.id*1

    const singleComment = allComments.find((comment) => {
        return comment.id === id 

    })


    if (!singleComment){
        return null
    }

return (
     <div>
    <h1>{singleComment.name} {singleComment.body} </h1>
    <Link to='/comments'>
        Back to Comments
    </Link>
    </div>

)

}

export default SingleComment