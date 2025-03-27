import { Grid, styled, Typography } from "@mui/material";
import StyledButton from "../StyledButton/StyleButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string;
    technologies: string;
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL,
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vh", // Suponho que seja VH
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: "theme.palette.primary.contrastText",
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5" color="white">
                {title}
            </Typography>
            <Typography color="white">
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography color="white">
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2} color="white">
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
            <Grid item xs={6}>
                <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
            </Grid>
            <Grid item xs={6}>
                <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
            </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard