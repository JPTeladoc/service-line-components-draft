import { Typography } from '@intouchhealth/cig-components';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Input from './Input'

{/** Provide the 4-8 left right relationship as default*/ }
interface FieldProps {
  label: string;
  fontType?: number;
  inputAlignment?: string;
  inputValue?: string;
  leftXs: any;
  rightXs: any;
  div?: any;
}

export default function GridField(props: FieldProps) {

  const inputFontSize = props.fontType ?? "h4";
  let inputValue = props.inputValue ?? ""

  let Field;
  let itemsAlignment = '';

  if (props.div) {
    Field = props.div
    itemsAlignment = 'baseline'
  } else {
    // (`without div ${props.label}`)
    Field = <Input initialValue={inputValue} />
    itemsAlignment = 'center'
  }

  // (itemsAlignment)

  return (
    <div style={{ width: '100%' }}>
      <Grid container sx={{ p: 0.5 }}>
        <Grid item xs={props.leftXs} sx={{display: 'flex', alignItems:{itemsAlignment}, justifyContent: "flex-end", p: 1 }}>
          <Typography type={inputFontSize}> {props.label} </Typography>
        </Grid>
        <Grid item xs={props.rightXs}>
          <Box sx={{ alignItems: 'center', justifyContent: "flex-start" }}>
            {Field}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
