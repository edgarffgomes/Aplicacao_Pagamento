import React from "react"
import User from "./User"
const UsersList = ({list})=>{
	return(
		<>
			{list.map((user)=>(
				<User key={user.id} person={user}/>
				))}
		</>
	)
}
export default UsersList