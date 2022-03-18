import React from "react"
import "./Modal.css"
const Modal = ({onClose = () =>{}, person}) =>{
	return(
		<div className="modal">
			<div className= "container">
				<header>
						 <span className="phrase">
						 	Pagamento para <span className="name">{person.name}</span>
						 </span>
						 <button className="header-btn" onClick={onClose}>x</button>
				</header>
				<div className="money">
					<input type="text" placeholder="R$ 0,00"/>
				</div>
				<div className ="card">
					<select>
						<option>Cartão com final 1111</option>
						<option>Cartão com final 1234</option>
					</select>
				</div>
				<div className="pay-button">
					<button className="btn">Pagar</button>
				</div>
			</div>
		</div>
		)
}
export default Modal