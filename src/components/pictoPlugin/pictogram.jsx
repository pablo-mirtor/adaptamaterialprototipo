import React from 'react';
import './pictogram.scss'

function Pictogram(props){
    return(<div>
        <img src={props.url} onClick={() => props.onClick(props.url)}></img>
    </div>)
}

export default Pictogram;