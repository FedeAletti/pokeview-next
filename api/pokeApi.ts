import axios from "axios"

// const pokeApi = async (params: string) =>
// 	await fetch(`https://pokeapi.co/api/v2${params}`)

const pokeApi = axios.create({
	baseURL: "https://pokeapi.co/api/v2",
	timeout: 10000,
})

export default pokeApi
