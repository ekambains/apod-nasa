function Footer(props){
    return(
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{props.data?.title}</h2>
                <h1>ਬੈਂਸ</h1>
            </div>
           
            <button onClick={props.handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
export default Footer