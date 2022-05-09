import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';

import gippsSimulationImage from '../public/images/gipps-simulation.png';
import fnToolsImage from '../public/images/fn-tools.png';
import Layout from '../components/layouts/article';
import urls from '../utils/urls';

const Projects = () => {
  return (
    <Layout>
      <Container mt={20}>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <ProjectGridItem
              link={urls.gipps}
              tittle="Gipp's Traffic Simulation"
              thumbnail={gippsSimulationImage}
            >
              A Python implementation of Gipps’ Car-Following model for traffic
              simulation. This was my degree project so maybe you will find the
              code somewhat messy.
            </ProjectGridItem>
          </Section>
          <Section>
            <ProjectGridItem
              link={urls.fn}
              tittle="FN-Tools"
              thumbnail={fnToolsImage}
            >
              This was a set of tools developed in C# to change and force
              certain configuration for Fornite BR from Epic Games. Now is
              deprecated.
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;
