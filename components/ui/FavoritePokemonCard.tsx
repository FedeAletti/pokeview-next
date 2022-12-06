import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
	pokemonId: number
}

export const FavoritePokemonCard: FC<Props> = ({ pokemonId }) => {
	const router = useRouter()

	const clickHandler = () => {
		setTimeout(() => {
			router.push(`/pokemon/${pokemonId}`)
		}, 50)
	}

	return (
		<Grid xs={6} sm={3} xl={1}>
			<Card
				isHoverable
				isPressable
				onPress={clickHandler}
				css={{ padding: 10 }}>
				<Card.Image
					width={"100%"}
					height={140}
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
				/>
			</Card>
		</Grid>
	)
}
