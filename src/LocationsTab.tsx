import { PureInput, materialUI, SearchIcon, colors } from "@intouchhealth/cig-components";
import { useState } from "react";
import * as React from "react";

const { Grid, Typography, Box } = materialUI;

interface FieldProps {
  inputValue: string;
}

const Field = (props: FieldProps) => {
  const [serialNumber, setSerialNumber] = useState<string>();
  return(<PureInput
    placeholder={(props.inputValue)}
    onChange={(value) => setSerialNumber(value)}
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
