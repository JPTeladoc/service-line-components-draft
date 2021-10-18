import { useState } from "react";
import Paper from '@mui/material/Paper';
import { Typography } from '@intouchhealth/cig-components';

import Grid from '@mui/material/Grid'
import { PureInput, Table } from '@intouchhealth/cig-components';

interface FieldProps {
  title: string;
  inputValue: string;
  leftXs: any;
  rightXs: any;
}

const GridField = (props: FieldProps) => {
  const [fieldValue, setFieldValue] = useState<string>();

  return (
    <>
      <Grid item xs={props.leftXs} sx={{ display: 'flex', alignItems:'center',justifyContent: "flex-end" }}>
        <Typography type="h5" > {props.title} </Typography>
      </Grid>
      <Grid item xs={props.rightXs}>
        <PureInput value={fieldValue} onChange={(v) => setFieldValue(v)} placeholder={props.inputValue} />
      </Grid>
    </>
  );
}

export const mock4 = [
  {
    id: 1,
    name: "On demand",
  },
  {
    id: 2,
    name: "Scheduled",
  },
  {
    id: 3,
    name: "Future 1",
  },
  {
    id: 4,
    name: "Future 2",
  },
];

const accessors = [
  {
    label: "Name", key: "name",
  }
];

export default function DetailsTab() {

  return (
    <>
      <Paper>
        <Grid container spacing={2} justifyContent="center">
          <Grid container xs={12} spacing={1} padding={1} sx={{}}>
            <GridField leftXs={4} rightXs={8} title={'Name:'} inputValue={'General Medical'} />
            <GridField leftXs={4} rightXs={8} title={'Display name:'} inputValue={'General Medical'} />
            <GridField leftXs={4} rightXs={8} title={'Explanation:'} inputValue={'Get care 24/7 for non-emergency conditions like & flue, sinus infection, allergies, and more'} />
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={4} sx={{ display: 'flex', alignItems:'center',justifyContent: "flex-end" }} >
              <Typography type="h5" > Consult types </Typography>
            </Grid>
            <Grid item xs={8} padding={2} >
              <>
                <Table
                  accessors={accessors}
                  data={mock4}
                  checkeableId={"id"}
                />
              </>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
};
