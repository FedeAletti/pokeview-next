import { Button } from "@nextui-org/react"
import { NextPage } from "next"
import { Layout } from "../components/layouts"

const Home: NextPage = () => {
	return (
		<>
			<Layout title="Listado de Pokémons">
				<Button>Click me</Button>
			</Layout>
		</>
	)
}

export default Home
