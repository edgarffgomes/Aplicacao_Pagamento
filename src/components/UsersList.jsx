import React from "react"
import User from "./User"
const UsersList = ({list, selectedUser, setSelectedUser, setSelectedId})=>{
	
	return(
		<>
			{/*Mapeando lista de usuários e chamando componente para imprimí-los na tela*/}
			{list.map((user)=>(
				<User key={user.id} person={user} setSelectedUser={setSelectedUser} setSelectedId={setSelectedId}/>
			))}
		</>
	)
}
export default UsersList