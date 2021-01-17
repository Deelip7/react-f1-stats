import React, { useEffect, useState } from 'react';
import { Avatar, AvatarBadge, Box, Container, Flex, Image, Stack, Wrap, WrapItem } from '@chakra-ui/react';

const DriverProfile = () => {
  const [country, setCountry] = useState('');

  useEffect(() => {
    setCountry('Netherlands');
  }, []);

  return (
    <Container minW='90%' direction='row' mt='2rem'>
      <Flex direction='row' shadow='lg' p='2rem' maxWidth='500px' justifyContent='center'>
        <Stack direction='row' spacing={4}>
          <Avatar
            shadow='2xl'
            showBorder='true'
            bg='gray.700'
            borderColor='red.200'
            size='2xl'
            name='Max Verstappen'
            src='https://a.espncdn.com/combiner/i?img=/i/headshots/rpm/players/full/4665.png&w=200'
          >
            <AvatarBadge borderWidth='4px' showBorder='true'>
              <Avatar size='sm' name='Segun Adebayo' src={`https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_${country}.svg`} />
            </AvatarBadge>
          </Avatar>
        </Stack>
        <Flex direction='column' padding='1rem'>
          <h1>Max</h1>
          <strong>Verstappen</strong>
          <span>Date of birth: 30 September 1997 </span>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DriverProfile;
