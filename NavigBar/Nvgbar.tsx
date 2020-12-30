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
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nitc: {
      marginTop: "0px",
      marginBottom: "0px",
      size: "20px"
    },
    logo: {
      height: "100px",
      filter: "invert(100%)"
    },
    groupa: {
      paddingLeft: "24px",
      width: "100%"
    },
    headinga: {
      marginBottom: "5px"
    }
  })
);

export default function PrimaryNavBar() {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);

  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <img
              className={classes.logo}
              src="https://upload.wikimedia.org/wikipedia/en/d/d0/National_Institute_of_Technology%2C_Calicut_Logo.png"
            />
          </div>
          <div className={classes.groupa}>
            <h2 className={classes.headinga}>
              DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
            </h2>
            <div>
              <p className={classes.nitc}>
                NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <Box display="flex" justifyContent="flex-end">
                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick1}
                    color="secondary"
                  >
                    PROGRAMMES
                  </Button>
                  <Menu
                    id="programmes"
                    anchorEl={anchorEl1}
                    keepMounted
                    open={Boolean(anchorEl1)}
                    onClose={handleClose1}
                  >
                    <MenuItem onClick={handleClose1}>B.Tech</MenuItem>
                    <MenuItem onClick={handleClose1}>M.Tech</MenuItem>
                    <MenuItem onClick={handleClose1}>PhD</MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick2}
                    color="secondary"
                  >
                    PEOPLE
                  </Button>
                  <Menu
                    id="people"
                    anchorEl={anchorEl2}
                    keepMounted
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                  >
                    <MenuItem onClick={handleClose2}>FACULTY MEMBERS</MenuItem>
                    <MenuItem onClick={handleClose2}>STAFF</MenuItem>
                    <MenuItem onClick={handleClose2}>ADHOC</MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick3}
                    color="secondary"
                  >
                    RESEARCH
                  </Button>
                  <Menu
                    id="research"
                    anchorEl={anchorEl3}
                    keepMounted
                    open={Boolean(anchorEl3)}
                    onClose={handleClose3}
                  >
                    <MenuItem onClick={handleClose3}>
                      AREAS OF RESEARCH
                    </MenuItem>
                    <MenuItem onClick={handleClose3}>ONGOING</MenuItem>
                    <MenuItem onClick={handleClose3}>Lorem </MenuItem>
                  </Menu>
                </div>

                <div>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick4}
                    color="secondary"
                  >
                    FACILITIES
                  </Button>
                  <Menu
                    id="facilities"
                    anchorEl={anchorEl4}
                    keepMounted
                    open={Boolean(anchorEl4)}
                    onClose={handleClose4}
                  >
                    <MenuItem onClick={handleClose4}>lore</MenuItem>
                    <MenuItem onClick={handleClose4}>m ipsem</MenuItem>
                    <MenuItem onClick={handleClose4}>as</MenuItem>
                  </Menu>
                </div>
              </Box>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
