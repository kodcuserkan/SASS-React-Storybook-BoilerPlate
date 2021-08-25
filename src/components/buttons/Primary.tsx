import './buttons.scss'

interface Props {
    onClickFunc: () => void,
    name: string
}

const Primary = (props: Props) => {
    return (
        <button className="btn btn-primary" onClick={props.onClickFunc}>{props.name}</button>
    )
}

export default Primary
