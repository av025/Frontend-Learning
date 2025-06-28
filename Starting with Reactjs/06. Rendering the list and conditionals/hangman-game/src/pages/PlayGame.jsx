import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";

function PlayGame() { 
//? For Accessing the search-params we are using useSearchParams hooks 
//   const params = useSearchParams();
//   const [searchParams] = params

//? For accessing the params we are using useParams()  
// const params = useParams(); 
// console.log(params);  
// const {text} = params   

//? Now we are sending our data as state property in a useNavigation hook for access that data we are using the useLoaction() hook here to access the state property 
const location = useLocation(); 
const {state} = location; 

    return <> 
    <h1> Play Game </h1>
    <Link to="/" className="text-blue-500 m-2" >Navigate to Start Game</Link>
    </>
}
 

export default PlayGame; 
