import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import Layout from '../components/layouts/article';
import urls from '../utils/urls';

import gippsSimulationImage from '../public/images/gipps-simulation.png';
import fnToolsImage from '../public/images/fn-tools.png';
import portfolioImage from '../public/images/portfolio.png';
import portfolioImageDark from '../public/images/portfolio-dark.png';
import dotFilesImage from '../public/images/dotfiles.png';

const Projects = () => {
  return (
    <Layout>
      <Container mt={20}>
        <Heading as="h3" fontSize={24} mb={10} variant="section-title">
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              link={urls.projects.gipps}
              tittle="Gipp's Traffic Simulation"
              thumbnail={gippsSimulationImage}
              stack={['python', 'numpy']}
            >
              A Python implementation of Gipps’ Car-Following model for traffic
              simulation. This was my degree project so maybe you will find the
              code somewhat messy.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              link={urls.projects.fn}
              tittle="FN-Tools"
              thumbnail={fnToolsImage}
              stack={['csharp']}
            >
              This was a set of tools that allow you to change and force certain
              configuration for Fornite BR from Epic Games. The project now is
              deprecated.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              link={urls.projects.webpage}
              tittle="This webpage"
              thumbnail={useColorModeValue(portfolioImage, portfolioImageDark)}
              stack={['nextjs', 'chakra']}
            >
              I created this webpage as a remake of my old website. Also to
              practice some react and its ecosystem.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              link={urls.projects.webpage}
              tittle="Dotfiles"
              thumbnail={dotFilesImage}
              stack={['awesomewm', 'bash', 'zsh']}
            >
              This repo contains my system configuration files. Currently,
              I&apos;m using Manjaro with awesomeWM and zsh.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
