import { Card, Container, Grid, Image, Text } from "@nextui-org/react"
import React, { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { NoFavorites } from "../../components/ui"
import { FavoritesPokemons } from "../../components/ui/FavoritePokemons"
import localFavorites from "../../utils/localFavorites"

const FavoritesPage = () => {
	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

	useEffect(() => {
		setFavoritesPokemons(localFavorites.pokemons())
	}, [])

	return (
		<Layout title="Pokémons - Favoritos">
			{favoritesPokemons.length === 0 ? (
				<NoFavorites />
			) : (
				<FavoritesPokemons pokemonsList={favoritesPokemons} />
			)}
		</Layout>
	)
}

export default FavoritesPage
