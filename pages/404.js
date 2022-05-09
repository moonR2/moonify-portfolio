import NextLink from 'next/link';
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react';
import Layout from '../components/layouts/article';

const NotFound = () => {
  return (
    <Layout>
      <Container mt={20}>
        <Heading as="h1" size="xl">
          Not Found
        </Heading>
        <Text>The page you're looking for was not found.</Text>
        <Divider my={6} />

        <Box my={6} align="center">
          <NextLink href="/">
            <Button variantColor="teal" variant="outline">
              Return to home page.
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;