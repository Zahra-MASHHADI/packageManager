export default function NewsizeMovie(props){
 const {list , title} = props
 function renderFarm(){
    return list.map(function(name , i ){
        const {title , year , like , image } = name
        return(
                <li key={i}> 
                    <a href="#">
                        <img src={image}/> 
                        <p> {title}</p>
                    </a>
                    <div className="content">
                        <div className="position">
                            <p> {year}</p>
                            <p>{like} </p>
                        </div>
                    </div>
                </li>
        )
    })
}
return(
    <div className='container'> 
    <div className='hover'>
        <a href='#'>
            <h2>
                {title}
            </h2>
        </a>
        <span className='all'>مشاهده همه <i className='fa-solid fa-angle-left'></i> </span>
        </div>
    <ul className="longerMovie"> {renderFarm()} </ul> 
    </div>
)
}