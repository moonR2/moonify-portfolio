import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle-button';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('dark', 'whiteAlpha.800');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        fontFamily="karla"
        fontWeight={active ? 'bold' : undefined}
        fontSize="g"
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavBar = props => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#EEE7DD', '#20202380')}
      style={{ backdropFilter: 'blur(15px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts (es)
          </LinkItem>
          <Link
            p={2}
            color={useColorModeValue('dark','whiteAlpha.800')}
            fontFamily="karla"
            fontSize="g"
            href="https://www.dropbox.com/s/sm0htg616ejv94r/CVEN-COMPRESSED.pdf?dl=0"
            target="_blank"
          >
            Resume
          </Link>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu color="#231E1A">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>Projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <Link href="https://www.dropbox.com/s/sm0htg616ejv94r/CVEN-COMPRESSED.pdf?dl=0" target="_blank">
                  <MenuItem as={Link}>Resume</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
