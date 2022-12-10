const getFavorites = () => JSON.parse(localStorage.getItem("favorites") || "[]")

const toggleFavorite = (id: number) => {
	let favorites: number[] = getFavorites()

	if (favorites.includes(id)) {
		favorites.splice(favorites.indexOf(id), 1)
	} else {
		favorites.push(id)
	}

	localStorage.setItem("favorites", JSON.stringify(favorites))
}

const isFavorite = (id: number): Boolean => {
	return getFavorites().includes(id)
}

const pokemons = (): number[] => {
	return JSON.parse(localStorage.getItem("favorites") || "[]")
}

export default { toggleFavorite, isFavorite, pokemons }
