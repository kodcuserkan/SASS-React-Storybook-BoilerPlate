interface Props {
    onClickFunc: () => void,
    name: string
}

const Secondary = (props: Props) => {
    return (
        <button className="btn btn-secondary" onClick={props.onClickFunc}>{props.name}</button>
    )
}

export default Secondary
