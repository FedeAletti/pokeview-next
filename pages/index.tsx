import { Button, Card, Grid, Row, Text } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"
import { GetStaticProps } from "next"
import { pokeApi } from "../api"
import { PokemonListResponse, SmallPokemon } from "../interfaces"
import Image from "next/image"
import { PokemonCard } from "../components/pokemon"

interface Props {
	pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
	return (
		<>
			<Layout title="Listado de Pokémons">
				<Grid.Container gap={2} justify="flex-start">
					{pokemons.map((pokemon) => (
						<PokemonCard pokemon={pokemon} key={pokemon.id} />
					))}
				</Grid.Container>
			</Layout>
		</>
	)
}

// Esto solo se ejecuta en el servidor, unicamente usable en "pages", no en "components"
export const getStaticProps: GetStaticProps = async (ctx) => {
	// get data from pokeApi with axios and console log it
	const { data } = await pokeApi.get<PokemonListResponse>(
		"/pokemon?limit=151",
		{
			headers: {
				"accept-encoding": "*",
			},
		}
	)

	const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
		return {
			...pokemon,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
				index + 1
			}.svg`,
		}
	})

	return {
		props: {
			pokemons,
		},
	}
}

export default Home
