import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import PrimaryNavBar from "./NavigBar/Nvgbar";

interface AppProps {}
interface AppState {
  name: string;
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#039be5"
    },
    secondary: {
      main: "#fffff0"
    }
  }
});

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ width: "100%" }}>
          <PrimaryNavBar />

          <Hello name={this.state.name} />
        </div>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
