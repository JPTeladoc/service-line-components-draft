import { Typography } from '@intouchhealth/cig-components';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

{/** Provide the 4-8 left right relationship as default*/ }
interface FieldProps {
  label: string;
  fontSize?: number
  inputValue?: string;
  leftXs: any;
  rightXs: any;
  div?: any;
}

export default function GridField(props: FieldProps) {

  const inputFontSize = props.fontSize ?? 14;

  let Field;

  if (props.div) {
    console.log('assigning null div')
    Field = props.div
  } else {
    console.log('assigning regular textfield ')
    Field = <TextField
      multiline={true}
      size="small"
      defaultValue={props.inputValue}
      sx={{ width: "100%" }}
      InputProps={{
        sx: { fontFamily: 'Montserrat', fontSize: inputFontSize }
      }}
    />
  }

  return (
    <div style={{ width: '100%' }}>
      <Grid container sx={{ p:0.5 }}>
        <Grid item xs={props.leftXs} sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end", p:1 }}>
          <Typography type="h4" > {props.label} </Typography>
        </Grid>
        <Grid item xs={props.rightXs}>
          {Field}
        </Grid>
      </Grid>
    </div>
  );
}
