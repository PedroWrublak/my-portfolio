import { Box, Container, Grid, styled, Typography } from "@mui/material"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent"
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard"



const ProjectsSection: React.FC = () => {
    
    const StyledExperience = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
    }))

    const projects = [
        {
            title: "Mundo Pet",
            subtitle: "",
            srcImg: "/src/assets/images/mundoPet.png",
            description: "Project that simulates a page for images and forms upload.",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://pedrowrublak.github.io/projeto-mundopet/",
            codeURL: "https://github.com/PedroWrublak/projeto-mundopet",
        },
        {
            title: "Alura Studies",
            subtitle: "",
            srcImg: "/src/assets/images/aluraStudies.png",
            description: "",
            technologies: "Technologies: React, Typescript, HTML, CSS",
            websiteURL: "",
            codeURL: "",
        },
        {
            title: "Alura-Books",
            subtitle: "",
            srcImg: "/src/assets/images/aluraBooks.png",
            description: "Home page of an e-books store",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://pedrowrublak.github.io/alura-books/",
            codeURL: "https://github.com/PedroWrublak/alura-books",
        },
        {
            title: "Spotify",
            subtitle: "",
            srcImg: "/src/assets/images/spotify.png",
            description: "Spotify home page.",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://pedrowrublak.github.io/projeto-spotify/",
            codeURL: "https://github.com/PedroWrublak/projeto-spotify",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard 
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection