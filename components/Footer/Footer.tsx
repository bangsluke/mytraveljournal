import { ActionIcon, Container, Group, rem, Text, Tooltip } from "@mantine/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Footer.module.css";

export default function Footer() {
	const router = useRouter(); // Import the Next router
	const footerIconsHeight = 25;

	return (
		<div className={classes.footer}>
			<Container className={classes.inner}>
				<Group gap={10} className={classes.links} justify='flex-start' wrap='nowrap'>
					<Image
						src='/images/Logo.png'
						width={footerIconsHeight}
						height={footerIconsHeight}
						alt='My Travel Journal Logo'
						className={classes.siteLogo}
						onClick={() => router.push({ pathname: "/" })}
					/>
					<Text fz='sm' fw={200}>
						@bangsluke
					</Text>
				</Group>
				<Group gap={2} className={classes.links} justify='flex-end' wrap='nowrap'>
					<Text fz='xs' fw={200}>
						Powered by
					</Text>
					<Tooltip label='Hosted on GitHub'>
						<Link href='https://github.com/bangsluke/mytraveljournal' target='_blank'>
							<ActionIcon size='md' color='gray' variant='subtle'>
								<GitHubIcon style={{ width: rem(18), height: rem(18) }} />
							</ActionIcon>
						</Link>
					</Tooltip>
					<Tooltip label='Written in Obsidian'>
						<Link href='https://obsidian.md/' target='_blank'>
							<ActionIcon size='md' color='gray' variant='subtle'>
								<Image
									src='/images/Obsidian.png'
									width={footerIconsHeight}
									height={footerIconsHeight}
									alt='Obsidian Logo'
									className={classes.techStackLogo}
								/>
							</ActionIcon>
						</Link>
					</Tooltip>
					<Tooltip label='Stored in Neo4j'>
						<Link href='https://neo4j.com/' target='_blank'>
							<ActionIcon size='md' color='gray' variant='subtle'>
								<Image
									src='/images/neo4j.png'
									width={footerIconsHeight}
									height={footerIconsHeight}
									alt='Neo4j Logo'
									className={classes.techStackLogo}
								/>
							</ActionIcon>
						</Link>
					</Tooltip>
					<Tooltip label='Presented by Next.js'>
						<Link href='https://nextjs.org/' target='_blank'>
							<ActionIcon size='md' color='gray' variant='subtle'>
								<Image
									src='/images/NextJS.png'
									width={footerIconsHeight}
									height={footerIconsHeight}
									alt='My Travel Journal Logo'
									className={classes.techStackLogo}
								/>
							</ActionIcon>
						</Link>
					</Tooltip>
				</Group>
			</Container>
		</div>
	);
}
