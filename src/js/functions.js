import { form, searchInput, ui } from './references.js';

// Valida el formulario
const validateForm = event => {
    event.preventDefault();

    const search = searchInput.value;

    if( search === '' ) {
        ui.showAlert( 'El campo es obligatorio!' );
        return;
    }

    
}

const startEventListeners = () => {
    form.addEventListener( 'submit', validateForm );
}

export {
    startEventListeners
}