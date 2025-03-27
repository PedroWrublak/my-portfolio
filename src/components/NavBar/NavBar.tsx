import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, styled } from "@mui/material"
import React from "react";



    export const StyledNavLink = styled("a")(() => ({
      textDecoration: "none",
      color: "inherit"
    }))

    export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
        [theme.breakpoints.up('xs')]: {
          display: "flex",
          justifyContent: "end"
        },
        [theme.breakpoints.up('md')]: {
          display: "none"
        }
      }));

      export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
        [theme.breakpoints.up('xs')]: {
          display: "none",
        },
        [theme.breakpoints.up('md')]: {
          display: "flex",
          justifyContent: "space-evenly",
        }
      }));

    export default function Navbar() {
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

      const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null)
      };

      const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth"});
          handleClose();
        }
      }
    

    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="absolute">
          <StyledMobileToolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              arial-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleSmoothScroll("about")}>
                <StyledNavLink>About</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("skills")}>
                <StyledNavLink>Skills</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("Projects")}>
                <StyledNavLink>Projects</StyledNavLink>
              </MenuItem>
            </Menu>
          </StyledMobileToolbar>
          <StyledDesktopToolbar variant="regular">
          <MenuItem onClick={() => handleSmoothScroll("about")}>
                <StyledNavLink>About</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("skills")}>
                <StyledNavLink>Skills</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("Projects")}>
                <StyledNavLink>Projects</StyledNavLink>
              </MenuItem>
          </StyledDesktopToolbar>
        </AppBar>
      </Box>
    )
  }
  
