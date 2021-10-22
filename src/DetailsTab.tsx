import { Typography, Checkbox } from '@intouchhealth/cig-components';
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

        <Grid container spacing={1} padding={1}>
          <GridField leftXs={3} rightXs={9} label={'Name:'} inputValue={'General Medical'} />
          <GridField leftXs={3} rightXs={9} label={'Display name:'} inputValue={'General Medical'} />
          <GridField leftXs={3} rightXs={9} label={'Explanation:'} inputValue={'Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more'} />
        </Grid>

        <Grid container>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end" }} >
            <Typography type="h4">Consult types:</Typography>
          </Grid>
          <Grid item xs={9}  >
            <Box sx={{ p: 1 }}>
              <CheckboxList items={items} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
