import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoritePokemonCard } from "./FavoritePokemonCard"

interface Props {
	pokemonsList: number[]
}

export const FavoritesPokemons: FC<Props> = ({ pokemonsList }) => {
	return (
		<>
			<Grid.Container gap={2} direction="row" justify="flex-start">
				{pokemonsList.map((pokeId) => (
					<FavoritePokemonCard key={pokeId} pokemonId={pokeId} />
				))}
			</Grid.Container>
		</>
	)
}
