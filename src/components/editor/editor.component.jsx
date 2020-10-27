import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import PictoSearch from '../pictoPlugin/pictoSearch';
import './editor.styles.scss'
import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import Pictogram from '../pictoPlugin/pictogram';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ReactDOM from 'react-dom';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';

import PictogramEditing from '../pictoPlugin/pictogramEditing';
class Editor extends React.Component{
    
    constructor(){
        super();
        this.state = {editorData: "<p>Hola</p>"};
        this.handleEditorDataChange = this.handleEditorDataChange.bind( this );
        this.handleEditorInit = this.handleEditorInit.bind( this );
        this.editor = null;
        this.editorConfig = {
            language: 'es',
            plugins: [ExportPdf, Essentials, Heading, Bold, Italic, Underline,
                    Link, Paragraph, Table, TableToolbar, PictogramEditing
                ],
            toolbar: [  'exportPdf', '|',
                        'heading',
                        '|',
                        'bold', 'italic', 'underline',
                        '|',
                        'link', 'insertTable',
                        '|',
                        'undo', 'redo'
            ],
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            pictograms: {
                pictogramRenderer: ( url, domElement ) => {
                    console.log(url);
                    ReactDOM.render(
                        <Pictogram url={url} />,
                        domElement
                    );
            }},
            exportPdf: {
                stylesheets: [
                    './path/to/fonts.css',
                    'EDITOR_STYLES',
                    './path/to/style.css'
                ],
                fileName: 'my-file.pdf',
                converterOptions: {
                    format: 'A4',
                    margin_top: '20mm',
                    margin_bottom: '20mm',
                    margin_right: '12mm',
                    margin_left: '12mm',
                    page_orientation: 'portrait'
                }
            }
        }
    }

    

    handleEditorDataChange( evt, editor ) {
        console.log(editor.getData());
        this.setState( {
            editorData: editor.getData()
        } );
    }

    handleEditorInit( editor ) {
        this.editor = editor;
        this.setState( {
            editorData: editor.getData()
        } );
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );

    }

    render() {
        return (<div className='editor-container'>
        <div className='editor-half'>
            <CKEditor editor={DecoupledEditor} data={this.state.editorData} config={this.editorConfig} onChange={this.handleEditorDataChange} onInit={this.handleEditorInit}/>
            <PictoSearch onClick={( url ) => {
                    this.editor.execute( 'insertPictogram', url );
                    this.editor.editing.view.focus();
                }}/>
        </div>
        <object className='pdf-file' data={this.props.file} type="application/pdf">
            <embed src={this.props.file} type="application/pdf" />
        </object>

    </div>);
    }
}

export default Editor;