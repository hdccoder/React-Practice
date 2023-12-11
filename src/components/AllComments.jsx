import { Link } from "react-router-dom"


const AllComments = ({allComments}) => {


    return(
        <div>
            <h1>Comments</h1>
            {
                allComments.map((comment) => {
                    return(
                        <Link key={comment.id} to={`/comments/${comment.id}`}>
                            <li>{comment.id} {comment.name}</li>
                        </Link>
                    )
                })
            }
        
        </div>
    )
}

export default AllComments