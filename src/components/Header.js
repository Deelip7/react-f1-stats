import React from 'react';
import { Container, useColorMode, Stack, Switch } from '@chakra-ui/react';
import { RiSunFill, RiSunLine } from 'react-icons/ri';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(colorMode);

  return (
    <header>
      <Container my='5' maxW='100%' direction='right'>
        <Stack direction='row'>
          {colorMode === 'dark' ? <RiSunFill size='1.5em' /> : <RiSunLine size='1.5em' />}
          <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark' ? true : false}></Switch>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
