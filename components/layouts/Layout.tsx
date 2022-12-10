import Head from "next/head"
import React, { FC, PropsWithChildren } from "react"
import { NavBar } from "../ui"

interface Props {
	title?: string
	children: PropsWithChildren<React.ReactNode>
}

const origin = typeof window === "undefined" ? "" : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || "Pokemon App"}</title>
				<meta name="author" content="Federico Aletti" />
				<meta
					name="description"
					content={`Información sobre el pokémon: ${title}`}
				/>
				<meta
					name="keywords"
					content={`${title}, pokemon, pokedex, pokémon, pokédex`}
				/>

				<meta
					property="og:title"
					content={`Información sobre ${title}` || "Pokemon App"}
				/>
				<meta
					property="og:description"
					content={`Esta es la página de: ${title}`}
				/>

				<meta property="og:image" content={`${origin}/img/banner.png`} />
			</Head>

			<NavBar />

			<main
				style={{
					padding: "0 20px",
				}}>
				{children}
			</main>
		</>
	)
}
