import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { GridItem } from '../components/grid-item';
import urls from '../utils/urls';
import managersImage from '../public/images/managers.png';
import tokenImage from '../public/images/tokens.png';
import contractsImage from '../public/images/contratos.png';

const Posts = () => (
  <Layout title="Posts">
    <Container mt={20}>
      <Heading as="h3" fontSize={24} mb={10} variant="section-title">
        Posts
      </Heading>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 1, 2]} gap={4}>
          <GridItem
            title="Mejora tu productividad como desarrollador usando Window Managers"
            thumbnail={managersImage}
            href={urls.posts.managers}
          />
          <GridItem
            title="Interactuar con contratos inteligentes en Ethereum"
            thumbnail={contractsImage}
            href={urls.posts.contracts}
          />
          <GridItem
            title="Crear fácilmente tokens ERC20 usando OpenZepellin"
            thumbnail={tokenImage}
            href={urls.posts.tokens}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
