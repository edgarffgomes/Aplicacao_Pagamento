import React from "react"
import "./User.css"
const User = ({person})=>{
	console.log(person)
	return(
		<div className="user-container">
			<div className="user-info">
				<div className="profile-pic">
					<img src={person.img}/>
				</div>

				<div className="profile-text">
					<p>Nome do usuário: {person.name}</p>
					<p>ID: {person.id} Username: {person.username}</p>
				</div>
			</div>

			<div className="button-container">
				<button>Pagar</button>
			</div>
		</div>
		)
}
export default User