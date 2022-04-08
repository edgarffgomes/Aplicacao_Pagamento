import React, {useState} from "react"
import User from "./User"
import ModalForm from "./ModalForm"
const UsersList = ({list})=>{
	const [selectedUser, setSelectedUser] = useState('')
	return(
		<>
			{/*Mapeando lista de usuários e chamando componente para imprimí-los na tela*/}
			{list.map((user)=>(
				<User key={user.id} person={user} setSelectedUser={setSelectedUser}/>
			))}
			{selectedUser.length && <ModalForm selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>} 
		</>
	)
}
export default UsersList