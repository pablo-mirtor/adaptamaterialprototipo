import React from 'react';
import './file-loader.styles.scss';

const FileLoader = (props) => (<div className='file-loader'>
        <span>Selecciona un fichero:</span>
        <input type='file' onChange={props.onChangeFunc} accept='.pdf' required/>
</div>);

export default FileLoader;