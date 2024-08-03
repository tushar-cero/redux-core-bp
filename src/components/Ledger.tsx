import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../interfaces'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { debitAmount, creditAmount } from '../actions';
import { Box, TextField } from '@mui/material';

const Ledger = () => {

  const [amount, setAmount] = useState(0);
  const BALANCE = useSelector((balance: RootState) => balance.amount);
  const dispatch = useDispatch();

  return (
    <Box 
      display="flex"
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      height={"100vh"}
      width={"100%"}
      gap={4}
    >
      <Typography variant="h5">Current Balance — ₹{BALANCE}</Typography>

      <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined"
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}/>
      <Button variant="outlined" onClick={()=>dispatch(debitAmount(amount))}>Debit</Button>
      <Button variant="outlined" onClick={()=>dispatch(creditAmount(amount))}>Credit</Button>
    </Box>
  )
}

export default Ledger;