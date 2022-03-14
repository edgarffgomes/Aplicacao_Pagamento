import React, {Component} from "react"
import Header from "./Header"
import "./Main.css"
import UsersList from "./UsersList"

class Main extends Component{

	//declarando variável data que irá receber os dados da api
	state = {
		data: []
	}

	//realizando requisição da api de forma assíncrona
	async componentDidMount(){
		const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
		const response = await fetch(api)

		const body = await response.json()


		this.setState({data: body})
	}
	
	render(){
		return(
			<div>
				<Header/>
				<UsersList list= {this.state.data}/>
			</div>
		)
	}
}
export default Main