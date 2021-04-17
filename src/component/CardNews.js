import React from 'react'
import imgplace from '../img/imgplace.png'
import './CardNews.css';
export default function CardNews({item}) {
    const fldate = new Date(item.publishedAt);
    let dt = fldate.toString().split(" ");
    const hr = parseInt(dt[4].substring(0,2));
    let is;
    if(hr>12)
    {
        is='pm'
    }
    else{
        is='am'
    }


    return (
        <div className="cardnews">
            <img src={item.urlToImage?item.urlToImage:imgplace} alt={item.title} className="imgnews"/>
            <div className="textnews">
                <div>
                    <span className="title">
                        {item.title}
                    </span>
                    <br/>
                    <span className="author">
                        <a href={item.url} target="__blank"  className="source"><b>short</b></a>
                       <span className="muted"> by {item.author? item.author:"unknow"} / {hr%12}:{dt[4].substring(3,5)} {is} {"on"} {dt[2].substring(0,3)} {dt[1].substring(0,4)} {dt[3].substring(0,5)}{","} {dt[0].substring(0,3)}</span>
                    </span>
                </div>
                <div className="lowertext">
                <div className="desc">
                    {item.description}
                    </div>
                    <br/>
                    <span className="readm">
                        read more at {" "}
                        <a href={item.url} target="__blank"  className="source"><b>{item.source.name}</b></a>
                    </span>
               

                </div>
            </div>
        </div>
    )
}
