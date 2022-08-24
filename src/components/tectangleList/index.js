export default function Rectanglelist(props){
    const {item , title} = props
    function renderFarm(){
        return item.map(function(name , i){
            const {title , image } = name
            return(
                <li key={i}>
                    <img src={image}/>
                        <p> {title}</p>
                </li>
            )
        })
    }
    return(
        <div className='container'> 
        <h2> {title}</h2>
        <ul className="rectangle"> {renderFarm()} </ul> 
        </div>
    )
    }