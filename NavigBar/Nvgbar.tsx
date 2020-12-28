import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

export default function PrimaryNavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <h2>DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</h2>
            <div>
              <p style={{ size: "20px" }}>
                NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
              </p>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
