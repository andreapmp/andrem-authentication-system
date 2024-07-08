const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			signupMessage: null,
			isSignUpSuccessful: false,
			loginMessage: null,
			invoiceMessage: null,
			invoices: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			signUp: async(userEmail, userPassword) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: userEmail,
						password: userPassword
					})
				}

				const response = await fetch(`${process.env.BACKEND_URL}api/signup`, options)

				if(!response.ok) {
					const data = await response.json()
					setStore({signupMessage: data.msg})
					return{
						error: {
							status: response.status,
							statusText: response.statusText
						}
					}
				}
				
				const data = await response.json()
				setStore({
					signupMessage: data.msg,
					isSignUpSuccessful: response.ok
				})
				return data;
			},
			login: async(userEmail, userPassword) => {
				const options = {
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: userEmail,
						password: userPassword
					})
				}

				const response = await fetch(`${process.env.BACKEND_URL}api/token`, options)

				if(!response.ok) {
					const data = await response.json()
					setStore({loginMessage: data.msg})
					return{
						error: {
							status: response.status,
							statusText: response.statusText
						}
					}
				}
				
				const data = await response.json()
				setStore({
					loginMessage: data.msg,
					token: data.access_token
				})
				return data;
			}
		}
	};
};

export default getState;
