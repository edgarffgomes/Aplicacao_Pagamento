import React from "react"
import "./Modal.css"
const Modal = ({onClose = () =>{}, person}) =>{
		function mask(e){
			var pattern = /[0-9 .,]+/g
			if(pattern.test(e.key) == false){
				e.preventDefault()
			}
			if(e.target.value.length == 0){
				var insert = (e.target.value/10).toFixed(1)
				e.target.value = insert.replace('.',',')
			} else{
				var insert = e.target.value.replace(',','.')
				insert = (parseFloat(insert) * 10).toFixed(1)
				console.log(insert)
				insert = insert.replace('.',',')		
				e.target.value = insert
			}
		}
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
					<input onKeyPress={(event) => mask(event)} type="text" placeholder="R$ 0,00"/>
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