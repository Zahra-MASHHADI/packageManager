export default function LiveList(props){
const {item , title} = props
function renderFarm(){
    return item.map(function(name , i){
        const {title , image , live , more} = name
        return(
            <li key={i}>
                <img src={image}/>
                <div className="extra">
                    <p> {title}</p>
                    <p> {more}</p>
                    <span>{live} </span>
                </div>
            </li>
        )
    })
}
return(
    <div className='container'> 
    <h2> {title}</h2>
    <ul className="live"> {renderFarm()} </ul> 
    </div>
)
}