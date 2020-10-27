import React from 'react';

import './editorpage.styles.scss';
import Editor from '../../components/editor/editor.component';
import FileLoader from '../../components/fileLoader/file-loader.component';

class EditorPage extends React.Component {

    constructor(props){
        super();
        this.state = {fileIsLoaded: false, fileL: null};
        this.file = React.createRef();
    }

     uploadFile =  async (event)  => {
        if (event.target.files && event.target.files[0]) {
            await this.setState({ fileL: URL.createObjectURL(event.target.files[0]), fileIsLoaded: true});
        }
    }

    render(){
        return (<div className='editor-page'>
                {this.state.fileIsLoaded ? (<Editor file={this.state.fileL}/>) : (<FileLoader onChangeFunc={this.uploadFile} ref={this.file}/>)}
            </div>
        );
    }

}

export default EditorPage;