let Button = (props) => {
    return (
        <button onClick={props.func} className={props.nClass}> {props.btnVal}</button>
    )
}

export default Button;