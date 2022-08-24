export default function Stars(props){
    const {acter , title} = props
    function renderFarm(){
        return acter.map(function( item , index){
            const {image, name} = item
            return(
                <li key={index}>
                    <img src={image}/>
                    <p> {name}</p>
                </li>
            )
        })
    }
    return (
        <div className="container">
            <h2> {title} </h2>
            <ul className="star">
                {renderFarm()}
            </ul>
        </div>
    )
}