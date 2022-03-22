import React, {useState} from "react"
import ModalForm from './ModalForm'
import "./User.css"
const User = ({person})=>{
	const [isModalVisible, setIsModalVisible] = useState(false)
	
	return(
		<div className="user-container">
			<div className="user-info">
				<div className="profile-pic">
					<img src={person.img}/>
				</div>

				<div className="profile-text">
					<h3>{person.name}</h3>
					<p>ID: {person.id} Username: {person.username}</p>
				</div>
			</div>

			<div className="button-container">
				<button className="pay-btn" onClick={() => setIsModalVisible(true)}>Pagar</button>
				{isModalVisible ? <ModalForm onClose = {() => setIsModalVisible(false)}  person ={person}/> : null}
			</div>
		</div>
		)
}
export default User