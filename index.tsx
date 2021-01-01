import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import PrimaryNavBar from "./NavigBar/Nvgbar";
import PrimaryCarousel from "./Carouselfold/CarouselComp";
import PrimaryDepro from "./DepProfold/Depro";
import Primaryqlinks from "./Qlinksfold/Qlinks";
import Primarynews from "./Newsfold/Newsindex";
import Primarymv from "./Mandvfold/MandV";

interface AppProps {}
interface AppState {
  name: string;
}

// ------------ THEME COLOR ---------------------

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a69a"
    },
    secondary: {
      main: "#fffff0"
    }
  }
});

// -----------------------------------------------

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
        <div id="bg" style={{ width: "100%" }}>
          <PrimaryNavBar />
          <div id="carsa">
            <PrimaryCarousel />
          </div>
          <div id="botcardsa">
            <Box display="flex">
              <div id="lmain">
                <PrimaryDepro />
              </div>
              <div id="rmain">
                <div id="qlinksindex">
                  <Primaryqlinks />
                </div>
                <div id="newsindex">
                  <Primarynews />
                </div>
              </div>
            </Box>
            <Box display="flex">
              <Primarymv />
            </Box>
          </div>
          <Hello name={this.state.name} />
        </div>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
