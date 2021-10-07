import { useState } from "react";
import * as React from "react";

import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import Typography from '@mui/material/Typography';

interface FieldProps {
  inputValue: string;
}

const Field = (props: FieldProps) => {
  const [serialNumber, setSerialNumber] = useState<string>();
  return(<Input
    placeholder={(props.inputValue)}
    onChange={(value) => (value)}
    value={serialNumber}
  />);
}

export default function LocationsTab() {
  return(
    <>
    <Box sx={{ display: 'flex', p: 1, color:'black', bgcolor: 'background.paper' }}>
      <Typography display="inline" align="left">Name</Typography>
      <Typography display="inline" align="left">Name</Typography>
      <Typography display="inline" align="left">Name</Typography>
      <Typography display="inline" align="left">Name</Typography>
    </Box>
    <Box sx={{ display: 'flex', p: 1, color:'black', bgcolor: 'background.paper' }}>
        <Field inputValue={"General Medical"}/>
        <Field inputValue={"General Medical"}/>
    </Box>
    <Box sx={{ display: 'flex', p: 1, color:'black', bgcolor: 'background.paper' }}>
      <Typography display="inline" align="left">Explanation</Typography>
      <Field inputValue={"Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more"}/>
    </Box>
    </>
  )
};
