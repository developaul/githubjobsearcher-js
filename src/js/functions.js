import { form, searchInput, ui } from './references.js';

// Consulta la API
const consultAPI = search => {
    ui.showSpinner();

    const gitHubUrl = `https://jobs.github.com/positions.json?search=${ search }`;
    const url       = `https://api.allorigins.win/get?url=${ encodeURIComponent( gitHubUrl ) }`;

    axios.get( url )
        .then( response => ui.showVacancies( JSON.parse( response.data.contents ) ) );
}

// Valida el formulario
const validateForm = event => {
    event.preventDefault();

    const search = searchInput.value;

    if( search === '' ) {
        ui.showAlert( 'El campo es obligatorio!' );
        return;
    }

    consultAPI( search );
}

const startEventListeners = () => {
    form.addEventListener( 'submit', validateForm );
}

export {
    startEventListeners
}