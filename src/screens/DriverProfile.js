import React from 'react';
import { Avatar, Container, Flex, Wrap, WrapItem } from '@chakra-ui/react';
import { BsPersonSquare } from 'react-icons/bs';

const DriverProfile = () => {
  return (
    <Container minW='90%' direction='row'>
      <Flex direction='row'>
        <Flex>
          <Wrap>
            <WrapItem>
              <Avatar showBorder='true' bg='gray.700' borderColor='red.200' size='2xl' name='Max Verstappen' src='https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4665.png&w=200' />
            </WrapItem>
          </Wrap>
        </Flex>
        <Flex direction='column' padding='1rem'>
          <h1>Max</h1>
          <strong>Verstappen</strong>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DriverProfile;
