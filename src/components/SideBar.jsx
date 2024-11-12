function SideBar(props){
    return(
        <div className="sidebar">
            <div onClick={props.handleToggleModal} className="bgOverlay" ></div>
            <div className="sidebarContents">
            <h2>{props.data?.title}</h2>
            <div>
                <p className="date">{props.data?.date}</p>
                <p>{props.data?.explanation}</p>
            </div>
            <button onClick={props.handleToggleModal} >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    )
}
export default SideBar