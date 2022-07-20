

import '../styles/button.css'

function Button({texto,isclicButton,clicManage}){
    return(
        <button
        className={ isclicButton ? "boton-clic" : "boton-reset" }
        onClick={clicManage}
        >
            {texto}   
        </button>
    )
} 

export default Button