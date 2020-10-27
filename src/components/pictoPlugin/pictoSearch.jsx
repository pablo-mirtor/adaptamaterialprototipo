import React from 'react';
import Pictogram from './pictogram';
class PictoSearch extends React.Component{

    constructor(){
            super();
            this.state = {searchInput: "", url: undefined};
    }

    handleChange = async event => {
        const {value} = event.target;
        let array = await fetch(`https://api.arasaac.org/api/pictograms/es/search/${value}`)
        .then((response) => response.json())
        .then(data => data);
        let url = [];
        for(let i = 0; i < array.length; i++){
            url.push(`https://static.arasaac.org/pictograms/${array[i]._id}/${array[i]._id}_500.png`)
        }
        this.setState({searchInput: value, url: url});
    }

    render(){
        return(<div>
            <input type="text" onChange={this.handleChange}/>
            {this.state.url ? this.state.url.map(url => <Pictogram url={url} onClick={this.props.onClick}/>) : <span>No hay resultados</span>}
        </div>
        );
    }
}

export default PictoSearch;