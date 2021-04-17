import { Container } from '@material-ui/core'
import React from 'react'
import CardNews from '../component/CardNews'
import playstore from '../img/playstore.png'
import './NewsContent.css'
export default function NewsContent({loadmore,setLoadmore,newslist,newsresult}) {
    return (
        <Container maxWidth="md">
           <div className="content">
               <div className="downloadmess">
                   <span className="downloadtext">
                       for the best experience use inshorts app on your support
                   </span>
                   <img className="newslogo" src={playstore} alt="play-store"/>
                    <img className="newslogo" src={playstore} alt="play-store"/>
                  
               </div>
               {newslist.map((item) => (
                <CardNews item= {item} key={item.title}/>
               ))}
               {loadmore <= newsresult && (
                
                    <>
                       <button className="load" onClick={() => setLoadmore(loadmore+20)}>Load More</button>
                       </>
                  
                      
               )}
              
           </div>
        </Container>
    )
}
