import {useEffect, useState} from "react";

const App = () => {
	const [user,setUser] = useState({})

	useEffect(()=>{
		fetch('http://localhost:8001/api/user',{method:'POST'}).then(res=>res.json()).then(res=>{

			setUser(res)
		})
	},[])

	return <div>{JSON.stringify(user)}</div>;
};

export default App;
