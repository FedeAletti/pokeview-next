import { useTheme, Text, Spacer } from "@nextui-org/react"
import Image from "next/image"

export const NavBar = () => {
	const { theme } = useTheme()
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "start",
				alignItems: "center",
				padding: "0x 20px",
				backgroundColor: theme?.colors.gray50.value,
			}}>
			<Image
				src={
					"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
				}
				alt="Ícono de la app"
				width={70}
				height={50}
			/>

			<Text color="white" h2>
				P
			</Text>
			<Text color="white" h3>
				okémon
			</Text>

			<Spacer css={{ flex: 1 }} />

			<Text color="white">Favoritos</Text>
		</div>
	)
}
