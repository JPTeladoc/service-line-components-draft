import { useState } from "react";
import * as React from "react";

import { Table, Card, Typography } from '@intouchhealth/cig-components';
import { Button } from "@intouchhealth/cig-components";

import Grid from '@mui/material/Grid';


function renderDetailsDiv(row: number) {
  if (row === 1) {
    return (
      <>
        <Typography type="h5" >  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book.
        </Typography>


        It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.

        </>
    )
  }
}


function EditButton(props: any) {
  return (
    <Button appearance="outline" themeName="warning" size="xs" onClick={() => {

    }}>
      Details
    </Button>
  );
}


export const generalSettingsData = [
  {
    name: "On demand",
    action: <EditButton path={`1`} />,
  },
  {
    name: "Scheduled",
    action: <EditButton path={`2`} />,
  },
  {
    name: "Future 1",
    action: <EditButton path={`3`} />,
  },
  {
    name: "Future 2",
    action: <EditButton path={`4`} />,
  },
];

const generalSettingsAccessors = [
  { label: "Name", key: "name" },
  { label: "Action", key: "action" },
];

export default function LocationsTab() {

  // const [currentItem, setCurrentItem] = useState<>();
  const currentItem: any = null;

  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <Table
            data={generalSettingsData}
            accessors={generalSettingsAccessors}
          // setSelectedOptions = {(array) => {
          //   array.map((item) => {
          //     return {}
          //   })
          // }}
          />
        </Grid>
        <Grid item xs={6}>
        Here should go the component to update based on the table's row
          <Card isHoverable={false}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Card>
        </Grid>
      </Grid>
    </>
  )
};
