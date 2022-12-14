import { useEffect, useState } from "react"
import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { GetStaticProps, GetStaticPaths } from "next"
import { Pokemon } from "../../interfaces"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import localFavorites from "../../utils/localFavorites"
import confetti from "canvas-confetti"
import { getPokemonInfo } from "../../utils"

interface Props {
	pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
	const [isInFavorite, setIsInFavorite] = useState<Boolean>()
	const onToggleFavorite = () => {
		localFavorites.toggleFavorite(pokemon.id)
		setIsInFavorite(!isInFavorite)

		if (!isInFavorite) {
			confetti({
				zIndex: 999,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					x: 1,
					y: 0,
				},
			})
		}
	}

	useEffect(() => {
		setIsInFavorite(localFavorites.isFavorite(pokemon.id))
	}, [pokemon.id])

	return (
		<Layout title={`Página de ${pokemon.name}`}>
			<Grid.Container css={{ marginTop: "5px" }} gap={2}>
				<Grid xs={12} md={4}>
					<Card isHoverable css={{ padding: "30px" }}>
						<Card.Body>
							<Card.Image
								src={
									pokemon.sprites.other?.dream_world.front_default ||
									"/no-image.png"
								}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} md={8}>
					<Card>
						<Card.Header
							css={{
								display: "flex",
								justifyContent: "space-between",
								gap: "10px",
								flexWrap: "wrap",
							}}>
							<Text h2 transform="capitalize">
								{pokemon.name}
							</Text>
							<Button
								color={"gradient"}
								ghost={!isInFavorite}
								onPress={onToggleFavorite}>
								{isInFavorite ? "En favorito" : "Guardar en favoritos"}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction="row" display="flex" gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={200}
									height={200}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={200}
									height={200}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={200}
									height={200}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={200}
									height={200}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const pokemons151 = [...Array(151)].map((_, i) => `${i + 1}`)

	return {
		paths: pokemons151.map((id) => ({ params: { id } })),
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as { id: string }

	const pokemon = await getPokemonInfo(id)

	if (!pokemon) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		}
	}

	return {
		props: {
			pokemon,
		},
		revalidate: 86400,
	}
}

export default PokemonPage
