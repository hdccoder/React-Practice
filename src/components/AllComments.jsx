import { Link } from "react-router-dom"


const AllComments = ({allComments}) => {


    return(
        <div>
            <h1>Comments</h1>
            {
                allComments.map((comment) => {
                    return(
                        <Link className="Commentz" key={comment.id} to={`/comments/${comment.id}`}>
                            <li>{comment.name}</li>
                        </Link>
                    )
                })
            }
        
        </div>
    )
}

export default AllComments