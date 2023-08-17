const Reklam=(props)=>{
    return (
        <div className="product-info">
            <span className="reklam">Bozkurt Yazılım</span>
            {props.children}
            
        </div>
    )
}

export default Reklam;