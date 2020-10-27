import { createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';

const dropdownView = createDropdown( locale );

dropdownView.buttonView.set( {
    withText: true,
    label: 'Label of the button',
} );