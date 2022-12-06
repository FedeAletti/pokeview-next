import { useTheme, Text, Spacer } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

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
			<Link
				href={"/"}
				style={{ display: "flex", alignContent: "center", marginLeft: "40px" }}>
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
			</Link>

			<Spacer css={{ flex: 1 }} />

			<Link href={"favorites"} style={{ marginRight: "40px" }}>
				<Text color="white">Favoritos</Text>
			</Link>
		</div>
	)
}
