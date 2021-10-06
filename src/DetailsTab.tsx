import { PureInput, materialUI, colors, Menu } from "@intouchhealth/cig-components";
import { useState } from "react";
import * as React from "react";
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { DeviceIcon, DomainIcon, PractitionerIcon } from "@intouchhealth/cig-components";

import { styled } from '@mui/material/styles';

const { Grid, Box } = materialUI;

interface FieldProps {
  inputValue: string;
}

const Field = (props: FieldProps) => {
  const [serialNumber, setSerialNumber] = useState<string>();
  return (<PureInput
    placeholder={(props.inputValue)}
    onChange={(value) => setSerialNumber(value)}
    value={serialNumber}
  />);
}

const items = [
  {
    value: 10,
    name: "Log Service",
    icon: <DeviceIcon />,
  },
  {
    value: 20,
    name: "Monitoring",
    icon: <DomainIcon />,
  },
  {
    value: 30,
    name: "Practitioner Registry",
    icon: <PractitionerIcon />,
  },
];

export default function DetailsTab() {
  return (
      <Grid container spacing={2}>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={4} >
            <Typography align="right" color='black' fontWeight="bold">Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth defaultValue={'General Medical'} />
          </Grid>
          <Grid item xs={4}>
            <Typography align="right" color='black' fontWeight="bold">Display Name:</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField fullWidth defaultValue={'General Medical'} />
          </Grid>
          <Grid item xs={4} sx={{ align: 'right' }} justify="flex-end">
            <Typography align="right" color='black' fontWeight="bold">Explanation</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField multiline fullWidth defaultValue={"Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more"} />
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
          <Grid container xs={5}>
            <Menu selectedValue="" items={items} onClick={() => { }} title="" />
          </Grid>
        </Grid>
      </Grid>
  )
};
