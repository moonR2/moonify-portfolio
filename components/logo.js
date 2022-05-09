import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';

import styled from '@emotion/styled';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  margin-top: 10px;

  &:hover img {
    transform: scale(20deg);
  }
`;
const Logo = () => {
  const moonifyLogo = `/images/moonifyLogo${useColorModeValue(
    '',
    '-dark'
  )}.png`;
  console.log(moonifyLogo);
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={moonifyLogo} width="86" height="50" alt="logo" />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
