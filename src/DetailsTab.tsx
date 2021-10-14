import { useState } from "react";
import * as React from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'

import { styled } from '@mui/material/styles';

interface FieldProps {
  inputValue: string;
}

const Field = (props: FieldProps) => {
  const [serialNumber, setSerialNumber] = useState<string>();
  return (<Input
    placeholder={(props.inputValue)}
    onChange={(value) => (value)}
    value={serialNumber}
  />);
}

export default function DetailsTab() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid container xs={12} spacing={2} padding={2} sx={{alignItems:'center'}}>
          <Grid item xs={4} >
            <Typography align="right" color='black' fontWeight="bold">Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField size="small" variant="outlined" fullWidth defaultValue={'General Medical'} />
          </Grid>
          <Grid item xs={4}>
            <Typography align="right" color='black' fontWeight="bold">Display Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField size="small" fullWidth defaultValue={'General Medical'} />
          </Grid>
          <Grid item xs={4} justifyContent="flex-end">
            <Typography align="right" color='black' fontWeight="bold">Explanation</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField size="small" multiline fullWidth defaultValue={"Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more"} />
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid container xs={7} spacing={2}>
            <Grid item xs={6} >
              <Typography align="right" color='black' fontWeight="bold">Routing rule code:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField/>
            </Grid>
            <Grid item xs={6} >
              <Typography align="right" color='black' fontWeight="bold">Routing rule code:</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField />
            </Grid>
          </Grid>
          <Grid container xs={3} padding={2}>
            <Typography align="right" color='black' fontWeight="bold">Here goes the menu</Typography>
            <Menu open={false} />
          </Grid>
        </Grid>
      </Grid>
      </>
  )
};
