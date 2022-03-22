import React from "react"
import "./ModalReceipt.css"
const ModalReceipt = ({onClose = () =>{}}) =>{
	return(
		<div className="modalRec">
			<div className="containerRec">
				<header>
					<span className="header-phrase">Recibo do pagamento</span>
					
				</header>
				<div className="modalRec-content">
					<span>
						O pagamento foi concluído com sucesso
					</span>
				</div>
				<button className="close-btn" onClick={onClose}>Fechar</button>
			</div>
		</div>
		)
}
export default ModalReceipt