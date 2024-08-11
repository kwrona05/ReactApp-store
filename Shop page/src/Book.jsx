
const bookTile = (props) => {
    return(
        <div>
            <img src={props.image} alt={props.title}></img>
            <h2>{props.title}</h2>
            <a>Read more</a>
        </div>
    )
}

function Book() {
    return(
        <div>
            <bookTile 
            image = ""
            title="StarWars"
            />
        </div>
    )
}
export default Book