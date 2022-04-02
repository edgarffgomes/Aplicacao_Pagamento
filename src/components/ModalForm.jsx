import React, {useState} from "react"
import "./ModalForm.css"
import axios from "axios"
import ModalReceipt from "./ModalReceipt"
const ModalForm = ({onClose = () =>{}, person}) =>{
	let status = true
	const [isModalRecVisible, setIsModalRecVisible] = useState(false)
		let cards = [
		  {
		    card_number: '1111111111111111',
		    cvv: 789,
		    expiry_date: '01/18',
		  },
		  {
		    card_number: '4111111111111234',
		    cvv: 123,
		    expiry_date: '01/20',
		  },
		];
		/*Máscara para números no input*/
		function mask(e){
			var pattern = /[0-9]+/g
			if(pattern.test(e.key) == false){
				e.preventDefault()
				return
			}
			if(e.target.value.length == 0){
				var insert = (e.target.value/10).toFixed(1)
				e.target.value = insert.replace('.',',')
			} else{
				var insert = e.target.value.replace(',','.')
				insert = (parseFloat(insert) * 10).toFixed(1)
				insert = insert.replace('.',',')		
				e.target.value = insert
			}
		}
		/*Testando se a input está vazia, caso não esteja será executado método POST */
		function testsInputs(e){
			e.preventDefault()
			if(document.getElementById('payment-money').value == ''){
				alert('Insira algum valor para o pagamento')
			} else{
				 let i = document.getElementById('payment-card').value
				let data = {
					card_number: cards[i].card_number,
					cvv: cards[i].cvv,
					expiry_date: cards[i].expiry_date,
					destination_user_id: person.id,
					value: document.getElementById('payment-money').value
				}
				const addPost = axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', data)
				.then(() => {
					status = true
					setIsModalRecVisible(true)
				})
				.catch(()=>{
					status = false
					setIsModalRecVisible(false)
					})
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
				<div>
					<form onSubmit={(events) => testsInputs(events)}>
						<div className="money">
							<input id="payment-money" onKeyPress={(event) => mask(event)} type="text" placeholder="R$ 0,00"/>
						</div>
						<div className ="card">
							<select id="payment-card">
								{cards.map((card,n) =>(
									<option value={n}>Cartão com final {card.card_number.substr(12)}</option>
									))}
							</select>
						</div>
						<div className="pay-button">
							<button type="submit" className="btn">Pagar</button>
							{isModalRecVisible ? <ModalReceipt onClose={() => setIsModalRecVisible(false)} status={status}/> : null}
						</div>
					</form>
				</div>
			</div>
		</div>
		)
}
export default ModalForm