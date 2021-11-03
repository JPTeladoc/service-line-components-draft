import { Typography, Toggle } from '@intouchhealth/cig-components';
import Grid from '@mui/material/Grid'
import GridField from "./GridField"
import CheckboxList from './CheckboxList'
import Box from '@mui/material/Box'
import * as React from 'react'

export default class DetailsTab extends React.Component {

 items = {OnDemand: false, Scheduled: false, "Future 1": true, "Future 2":false}

  componentDidUpdate(prevProps: any) {
    // Typical usage (don't forget to compare props)
    console.log('detailstab changing from: ', prevProps)
    console.log('to: ', this.props)
  }
  componentWillUnmount(){
    console.log('detailstab will unmount')
  }


render() {
  return (
    <>
      <Grid container spacing={2} justifyContent="center" >
      {/** Solve the input field not expanding through the whole width*/}
        <Grid item xs={12} padding={1}>
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
            <CheckboxList items={this.items} />
          </Box>
        </Grid>
      </Grid>
    </>
  )}
};
