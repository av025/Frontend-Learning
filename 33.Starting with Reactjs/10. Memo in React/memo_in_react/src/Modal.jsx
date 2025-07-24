export default function Modal({onClickHandler}) {
    return <div style={{width: "100%", backgroundColor: "crimson", color: "white", fontSize: "2rem", textAlign:"center"}}>
        <h3>Modal</h3> 
        <button  onClick ={onClickHandler} style={{cursor:"pointer"}}>Close</button>
    </div>
}