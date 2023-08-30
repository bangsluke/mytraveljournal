import { Center, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Define a nav bar component that holds the logo and the page name.
export default function NavBar() {
  return (
    <nav id="navbar" className={styles.navbar}>
      <Grid
        templateAreas={`"logo title back menu"`}
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"1fr 3fr 1fr 1fr"}
        h="80px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem area={"logo"}>
          <Center>
            <Image
              src="/images/Logo.png" // Route of the image file
              height={80} // Desired size with correct aspect ratio
              width={80} // Desired size with correct aspect ratio
              alt="Logo"
              className={styles.logo}
            />
          </Center>
        </GridItem>
        <GridItem area={"title"}>
          <h1>my travel journal.</h1>
        </GridItem>
        <GridItem area={"back"}>Back</GridItem>
        <GridItem area={"menu"}>Menu</GridItem>
      </Grid>
    </nav>
  );
}
