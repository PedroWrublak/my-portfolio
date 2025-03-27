

import { Box, Card, Container, Grid, styled, Typography } from "@mui/material"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent"
import { WorkspacePremium } from "@mui/icons-material"


const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10p",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }))
   
    
    const skillsSet = [
        "Javascript", "React", "Typescript", "Git", "GitHub", "HTML5", "CSS3", "MySQL"
    ]
    
    return (
        <>
        <Container maxWidth="lg">
            <Box id="about" pt={5} mb={3}>
                <Typography variant="h2" textAlign="center">About me</Typography>
            </Box>
            <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                <Grid item xs={9} md={2.5}>
                    <AnimationComponent moveDirection="right">
                        <StyledCard variant='outlined'>
                            <WorkspacePremium />
                             <Typography textAlign="center" fontWeight={600}>Education</Typography>
                             {/* <Typography textAlign="center">Bachelores degree</Typography> */}
                        </StyledCard>
                    </AnimationComponent>
                </Grid>
            </Grid>
            <Box pb={1}>
                <Typography>
                Estou à procura de uma oportunidade de ingressar no ramo de
                desenvolvimento front-end, com interesse em aperfeiçoar
                minhas habilidades como desenvolvedor e aprimorar meus
                conhecimentos em novas tecnologias. No momento estou
                cursando o segundo semestre em Sistemas de Informação e
                me aventurando em alguns cursos complementares online.
                Minhas especialidades incluem JavaScript, HTML5 e CSS3. Além
                disso, estou rumando meus estudos para o framework React.js.
                </Typography>
            </Box>
            <hr />
            <Box id="skills" pt={1} mb={3}>
                <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
            </Box>
            <Box mb={5}>
                <Grid container spacing={3} justifyContent="center">
                    {skillsSet.map((skill, index) => (
                        <Grid item key={index} xs={5} md={2} lg={2}>
                            <StyledCard variant="outlined">
                            {skill}
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Box>



        </Container>
    </>
)
}

export default AboutSection