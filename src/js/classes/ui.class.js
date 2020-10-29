import { form } from '../references.js';

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

}

export default UI;