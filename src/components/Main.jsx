function Main(props){
    return(
        <div className="imgContainer">
            <img className="bgImage" src={props.data.hdurl} alt={ props.data.title || "mars surface"} />
        </div>
         
    )
}
export default Main