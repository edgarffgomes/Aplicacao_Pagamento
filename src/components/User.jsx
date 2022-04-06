import React, {useState} from "react"
import ModalForm from './ModalForm'
import "./User.css"
const User = ({person, setSelectedUser}) =>{
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
				<button className="pay-btn" onClick={() => setSelectedUser(person.name)}>Pagar</button>
				
			</div>
		</div>
		)
}
export default User