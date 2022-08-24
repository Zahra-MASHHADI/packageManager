import './style.css';

export default function Movielist(props){
    const {list , title} = props
    function renderFarm(){
        return list.map(function(movie , index){
            const {title , image , year , like, subtitle , IMDb , more , player} = movie
            return(
                <li key={index}>
                    <img className='player' src= {player}/>
                    <img src={image}/>
                    <p>{title}</p>
                    <span>{more} </span>
                    <div className='content'>
                        <div className='position'>
                            <p>{year}</p>
                            <p>{like}</p>
                            <p>{subtitle}</p>
                            <p>{IMDb}</p>
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
         <ul className="movie"> {renderFarm()} </ul> 
         </div>
   )
}