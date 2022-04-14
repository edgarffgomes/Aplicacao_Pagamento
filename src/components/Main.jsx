import React, {useState, useEffect} from "react"
import Header from "./Header"
import "./Main.css"
import UsersList from "./UsersList"
import ModalForm from "./ModalForm"

const Main = () =>{

	//declarando state, que irá receber os dados da api
	const [state, setState] = useState([])
	//declarando selectedUser, que irá receber o nome do usuário selecionado
	const [selectedUser, setSelectedUser] = useState('')
	const [selectedId, setSelectedId] = useState('')
	//realizando requisição da api de forma assíncrona
	useEffect( async () => {
		const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
		const response = await fetch(api)

		const body = await response.json()

		setState(body)
	}, [])
	
		return(
			<div>
				{/*Imprimindo header*/}
				<Header/>
			{/*Imprimindo lista de usuários*/}
				<UsersList list= {state} selectedUser={selectedUser} setSelectedUser={setSelectedUser} setSelectedId={setSelectedId}/>
			{/*Imprimindo o Modal do formulário ao setar um usuário*/}
				{ selectedUser && <ModalForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} selectedId={selectedId} setSelectedId={setSelectedId}/>} 

			</div>
			)
}
export default Main