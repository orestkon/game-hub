import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"coral"}>
        Nav bar
      </GridItem>

      <GridItem area={"aside"} bg={"gold"} hideBelow={"lg"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bg={"cyan"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
