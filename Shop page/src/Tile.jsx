function Tile(props) {
    return (
<div>
<img src={props.img} alt={props.title}></img>
<h3>{props.title}</h3>
<p>{props.description}</p>
</div>
    )
}
export default Tile()