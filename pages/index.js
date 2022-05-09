import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  SimpleGrid,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { GridItem } from '../components/grid-item';
import urls from '../utils/urls';
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube,
} from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <Container mt={20}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andrés Orozco
            </Heading>
            <p> Some random text that we need to think</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/me@3x.png"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" mb={4}>
            Work
          </Heading>
          <Paragraph>
            Hello folks! My name is Andrés Orozco (aka moonify) and I am an IT
            engineer. I finished my studies this year at Yachay Tech university
            🇪🇨. I am currently working on several projects to gain more
            experience in full-stack development. I am an enthusiast of
            blockchain technology, AI, and free software. I consider myself as a
            neverending learner.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            Interests
          </Heading>
          <Paragraph>
            Philosophy, Deep Learning, Window Managers and Free Software.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title" mb={4}>
            My Socials!
          </Heading>
          <List>
            <ListItem>
              <Link href={urls.socials.github} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @moonR2
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={urls.socials.twitter} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @moonlfy
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={urls.socials.linkedin} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href={urls.socials.youtube} target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  Youtube
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
