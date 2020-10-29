import { form, result } from '../references.js';

class UI {

    showAlert( message ) {
        const alertaPrevia = document.querySelector( '.alerta' );

        if( !alertaPrevia ) {   
            const alert = document.createElement( 'div' );
            alert.classList.add( 'bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta' );
            alert.textContent = message;
            
            form.appendChild( alert );
            setTimeout( () => {
                alert.remove();
            }, 3000 );
        }
    }

    showVacancies( vacancies ) {
        this.cleanHTML();

        if( vacancies.length > 0 ) {
            result.classList.add( 'grid' );

            vacancies.forEach( vacancy => {
                const { company, title, type, created_at, url } = vacancy;

                result.innerHTML += `
                    <div class="shadow bg-white p-6 rounded">
                        <h2 class="text-2xl font-light mb-4">${title}</h2>
                        <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                        <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                        <p class="font-bold uppercase">Día de creación:   <span class="font-light normal-case">${created_at} </span></p>
                        <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}" target="_blank">Ver Vacante</a>
                    </div>`;
            });

            return;
        }

        result.classList.remove( 'grid' );
        const noResult = document.createElement( 'p' );
        noResult.classList.add( 'text-center', 'mt-10', 'text-gray-600', 'w-full' );
        noResult.textContent = 'No hay vacantes, intenta con otro término de busqueda';

        result.appendChild( noResult );
    }

    showSpinner() {
        this.cleanHTML();
        result.classList.remove( 'grid' );

        const spinner = document.createElement( 'div' );
        spinner.classList.add( 'sk-fading-circle' );

        spinner.innerHTML = `
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>`;

        result.appendChild( spinner );
    }

    cleanHTML() {
        while( result.firstChild ) {
            result.removeChild( result.firstChild );
        }
    }

}

export default UI;