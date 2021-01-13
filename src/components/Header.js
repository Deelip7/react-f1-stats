import React from 'react';
import { useColorMode, Switch, Flex } from '@chakra-ui/react';
import { RiSunFill, RiSunLine } from 'react-icons/ri';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex justify='flex-end' padding='1.5rem 1rem' boxShadow='md'>
        <Flex align='center'>
          {/* {colorMode === 'dark' ? <RiSunFill size='1.3em' /> : <RiSunLine size='1.3em' />} */}
          <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark' ? true : false}></Switch>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
