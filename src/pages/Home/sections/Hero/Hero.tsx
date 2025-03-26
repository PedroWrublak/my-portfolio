import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets//images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyleButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackgorund";
import { Padding } from "@mui/icons-material";

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
        PaddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: { // >= mobile
        PaddingTop: "0",
    }
  }));

  const StyledImg = styled("img")(() => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Box position="relative">
                    <Box position="absolute" width={"150%"} top={"-100"} right={"0"}>
                        <AnimatedBackground></AnimatedBackground>
                    </Box>
                    <Box position="relative" textAlign="center">
                        <StyledImg src={Avatar} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                Pedro Vinicius Wrublak
              </Typography>
              <Typography color="secondary" variant="h2" textAlign="center">
                I'm a Front-End Developer
              </Typography>

              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>
                        Download CV
                    </Typography>
                    
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <MailOutlineIcon />
                        <Typography>
                            Contact me
                        </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
