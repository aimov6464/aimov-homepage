import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import BearLoader from '../bear-loader'
import dynamic from 'next/dynamic.js'

const LazyBear = dynamic(() => import('../bear'), {
	ssr: false,
	loading: () => <BearLoader />
})

const Main = ({ children, router}) => {
	return (
		<Box as="main" pb={8}> 
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<title>Raim Beketov - Homepage</title>
			</Head>

			<Navbar path={router.asPath} />
			
			<Container maxW="container.md" pt={14}>
				<LazyBear />
				{children}
			</Container>
		</Box>
	)
}

export default Main
