import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./header.css";
import categories from "../../data/category";

const Header = (props) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: props.Dark ? "#fff" : "#000",
      },
      type: props.Dark ? "dark" : "light",
    },
  });
  const handleChange = (language) => {
    props.setWord("");
    props.setCategory(language);
  };
  return (
    <div className="header">
      <span className="title">{props.word ? props.word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a word"
            id="standard-basic"
            value={props.word}
            onChange={(e) => {
              props.setWord(e.target.value);
            }}
          />
          <TextField
            className="select"
            id="outlined-select-currency"
            select
            label="Language"
            value={props.category}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            helperText="Please select your language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
