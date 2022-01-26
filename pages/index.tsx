import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Home = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1">Welcome!</Typography>
          <Typography variant="h2" marginBottom="25px">
            Get started by
          </Typography>
          <Card>
            <List>
              <ListItem>
                Editing MUI theme and palette at{" "}
                <Typography marginLeft="10px" fontFamily="monospace">
                  _app.tsx
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                Configuring Firebase at
                <Typography marginLeft="10px" fontFamily="monospace">
                  firebase/firebaseConfig.ts
                </Typography>
              </ListItem>
            </List>
          </Card>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              width: 500,
              height: 200,
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="overline">About</Typography>
            <Typography variant="body1">
              I made this boilerplate for my personal uses, later decided to
              share it with others. If there is errors, please open an issue.
            </Typography>
            <Button
              target="_blank"
              href="https://github.com"
              variant="contained"
            >
              Repository
            </Button>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Home;
