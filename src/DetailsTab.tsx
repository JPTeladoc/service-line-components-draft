import { Typography, Toggle } from '@intouchhealth/cig-components';
import Grid from '@mui/material/Grid'
import GridField from "./GridField"
import CheckboxList from './CheckboxList'
import Box from '@mui/material/Box'
export default function DetailsTab() {

  console.log('rendering details tab again from scratch')

  let items = ["On Demand", "Scheduled", "Future 1", "Future 2"]

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
      {/** Solve the input field not expanding through the whole width*/}
        <Grid item xs={12} spacing={1} padding={1}>
          <GridField leftXs={3} rightXs={9} label={'Enabled:'} div={<Toggle enabled={true} />} />
          <GridField leftXs={3} rightXs={9} label={'Name:'} inputValue={'General Medical'} />
          <GridField leftXs={3} rightXs={9} label={'Display name:'} inputValue={'General Medical'} />
          <GridField leftXs={3} rightXs={9} label={'Explanation:'} inputValue={'Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more'} />
        </Grid>
        <Grid item xs={12}  >
          <Box sx={{ p: 1 }}>
            <Box sx={{ p: 1 }}>
            <Typography type="h4">Consult types</Typography>
            </Box>
            <CheckboxList items={items} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
};
