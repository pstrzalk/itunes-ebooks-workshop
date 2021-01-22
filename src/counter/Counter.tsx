import { Button, Stack, Tag } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount, incCountDelayed, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Stack direction="row">
      <Button colorScheme="red" onClick={() => dispatch(decCount(1))}>-1</Button>
      <Tag>{count}</Tag>
      <Button colorScheme="green" onClick={() => dispatch(incCount(1))}>+1</Button>
      <Button colorScheme="greblueen" onClick={() => dispatch(incCountDelayed(2))}>+2 after 1s</Button>
    </Stack>
  );
}
