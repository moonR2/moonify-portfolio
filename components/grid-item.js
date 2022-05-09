import Image from 'next/image';
import Link from 'next/link';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import mapStacks from '../utils/mapStacks';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} style={{ fontWeight: 'bold' }}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const ProjectGridItem = ({
  children,
  link,
  tittle,
  thumbnail,
  stack = []
}) => (
  <Box w="100%" align="center">
    <a target="_blank" href={link} rel="noreferrer">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={tittle}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <Text mt={2} fontSize={22} variant="title">
          {tittle}
        </Text>
        <Text fontSize={15}>{children}</Text>
      </LinkBox>
    </a>
    <Text fontSize={15} fontWeight={'bold'}>
      Stack:
      {stack.map(stack => (
        <Link key={stack} href={mapStacks[stack].url} target="_blank">
          <Text
            key={stack}
            textDecoration="underline"
            textUnderlineOffset={1}
            marginLeft={1}
            fontWeight="bold"
            color="#42B885"
            display="inline-block"
            fontStyle="italic"
            cursor="pointer"
          >
            {mapStacks[stack].name}{' '}
          </Text>
        </Link>
      ))}
    </Text>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
