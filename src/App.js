import { Container, Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Header from "./components/Header/header";

function App() {
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [Dark, setDark] = useState(true);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log("Please enter a valid word");
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      style={{
        height: "100vh",
        color: Dark ? "white" : "black",
        background: Dark ? "#282c34" : "white",
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>Dark Mode</span>
          <DarkMode
            checked={Dark}
            onChange={() => {
              setDark(!Dark);
            }}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          Dark={Dark}
        />
        <Definitions
          word={word}
          meanings={meanings}
          category={category}
          Dark={Dark}
        />
      </Container>
    </div>
  );
}

export default App;
