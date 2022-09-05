import NextLink from 'next/link'
import  { 
	Link,
	Container, 
	Box, 
	Heading,
	List,
	ListItem,
	useColorModeValue, 
	Button, 
	chakra} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Image from 'next/image'
import {
	IoLogoInstagram,
	IoLogoGithub
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
	shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


const Home = () => {
	return (
		<Container>
		<Box 
			borderRadius="lg" 
			bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
			p={3} 
			mb={6} 
			css={{ backdropFilter: 'blur(10px)' }}
			>
			Hello, I&apos;m an software engineer based in Kazakhstan!
		</Box>

		<Box display={{ md: 'flex'}}>
			<Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					Raim Beketov
				</Heading>
				<p> Just Some dude who likes code</p>
			</Box>
			<Box 
				flexShrink={0} 
				mt={{	base: 4, md: 0	}} 
				ml={{	md:	6	}} 
				align="center">
				<Box 
					borderColor="whiteAlpha.800" 
					borderWidth={2} 
					borderStyle="solid" 
					w="100px" 
					h="100px"
					display="inline-block" 
					borderRadius="full" 
					overflow="hidden"
					>

						<ProfileImage
						src="/images/raim.jpg" 
						alt="Profile Image"
						borderRadius="full"
						width="100%"
						height="100%"
						/>
				</Box>
			</Box>
		</Box>

		<Section delay={0.1}>
			<Heading as="h3" variant="section-title">
				Work
			</Heading>
			<Paragraph>
				Raim is a software engineer based in Kazakhstan. 
				Focused on building highly scalable and maintainable backend systems. 
				when not online he loves hiking across beutifull Kazakh&apos;s mountains.
			</Paragraph>
			<Box align="center" my={4}>
				<NextLink href="/works" passHref scroll={false}>
					<Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
						My portfolio
					</Button>
				</NextLink>
			</Box>
		</Section>

		<Section delay={0.2}>
			<Heading as="h3" variant="section-title">
				Bio
			</Heading>
			<BioSection>
					<BioYear>1996</BioYear>
					Born in Almaty, Kazakhstan.
				</BioSection>
				<BioSection>
					<BioYear>2015-2019</BioYear>
					Bachelor&apos;s degree in Computer Science 
					at Laurentian University, Sudbury, ON, Canada
				</BioSection>
				<BioSection>
					<BioYear>2019-2020/ TOO UCO</BioYear>
					Api development for AirAstana, with main focus on crm development
				</BioSection>
				<BioSection>
					<BioYear>2020-2021/ Jysan Bank</BioYear>
					Developing microservice archetecture using Spring Cloud, Security, 
					Integrating Api, proxy services. Deploying on machine with continous support and administation, 
					using Docker and Kubernetes. Developing CRUD applications using Jmix platform 
					for inside business processes(OpenWay, Way4 and etc)
				</BioSection>
				<BioSection>
					<BioYear>2021/ Kassa24</BioYear>
					Developing payment terminal, QR code module, bill acceptor error handling fucntions, reciept printing.
					Finalization and maintenance of the terminal development. 
					Wrote version control for the ISO Optical disk images integrated into 
					gitlab ci\cd. Completly autonomous iso assemled of the payment terminal running on linux.
					
				</BioSection>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
				I ♥
			</Heading>
			<Paragraph>
				Hiking, Snowboarding, {' '}
				Drawing, Music, {' '}
				Radio-frequency engineering,
				Video Games,
				CyberSecurity
			</Paragraph>
		</Section>

		<Section delay={0.3}>
		<Heading as="h3" variand="section-title">
		On the web
		</Heading>
		<List>
		<ListItem>
		<Link href="https://github.com/aimov6464" target="_blank">
		<Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoGithub />} >
		@aimov
		</Button>
		</Link>
		</ListItem>
		<ListItem>
		<Link href="https://www.instagram.com/aim.ov/" target="_blank">
		<Button variant="ghost" colorScheme="teal" leftIcon={<IoLogoInstagram />}>
		@aimov
		</Button>
		</Link>
		</ListItem>
		</List>
		</Section>

		</Container>
	)
}

export default Home
