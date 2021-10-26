import { useState } from "react";

import Box from '@mui/material/Box'

import { Typography, Toggle, RadioGroup, Checkbox, Card } from '@intouchhealth/cig-components';
import GridField from "./GridField"
import Input from './Input'
import Grid from '@mui/material/Grid';

function RadioButtonDescription(props: any) {
  return (
    <Card background="E5F6F9">
      <Typography type="h5" >
        {props.text}
      </Typography>
    </Card>
  )
}

function ToggledInput(props:any) {
  const [disabledInput, setDisabledInput] = useState(props.checked);
  const [textValue, setTextValue] = useState("min");

  return (
    <Box>
      <Checkbox onCheck={()=>{setDisabledInput(!disabledInput)}} label={props.label} />
      <Input disabled={!disabledInput} initialValue="min" />
    </Box>
  )
}

export default function GeneralSettingsTab() {

  const radioLabels = [
    { label: "Restrict patient journey access", value: "first" },
    { label: "Restrict Telehealth call access", value: "second" },
  ];

  const items: { [name: string]: any } = {
    "first": `Give time limits to when a patient can access the patient journey
    (e.g intake, telehealth call, payments)`,
    "second": `Give time limits to when a patient can access the video call.
      Other parts of the patient journey will be available to the patient`
  }

  const [currentItem, setCurrentItem] = useState<any>(<RadioButtonDescription text={items['first']} />);
  const [value, setValue] = useState("first");

  const handleChange = (event: any) => {
    let item = <RadioButtonDescription text={items[value]} />
    setValue(event.target.value);

    {/** try with useEffect here to update the current item?*/}
    setCurrentItem(item);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <GridField label={'Group calling'} leftXs={4} rightXs={8} div={<Toggle enabled={true} />} />
        <GridField label={'TBD - Other toggle option 1 :'} leftXs={4} rightXs={8} div={<Toggle enabled={true} />} />
        <GridField label={'TBD - Other toggle option 2 :'} leftXs={4} rightXs={8} div={<Toggle enabled={true} />} />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ paddingTop: 2, paddingLeft: 1 }}>
          <Typography type="h3">
            Codes
          </Typography>
        </Box>
        <Box sx={{ p: 1, border: 2, borderColor: 'black', borderRadius: 1 }}>
          <GridField label={'Router routing code:'} leftXs={4} rightXs={8} />
          <GridField label={'Service specialty code:'} inputValue="GENMEDICAL" leftXs={4} rightXs={8} />
          <GridField label={'Product code:'} leftXs={4} inputValue="GENMEDICAL" rightXs={8} />
          <GridField label={'SKU code:'} leftXs={4} rightXs={8} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ paddingTop: 2, paddingLeft: 1 }}>
          <Typography type="h3">
            Visit window
          </Typography>
        </Box>
      </Grid>
      <Box sx={{ p: 1, border: 2, borderColor: 'black', borderRadius: 1 }}>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Box sx={{ p: 1 }}>
              <RadioGroup
                onChange={handleChange}
                value={value}
                content={radioLabels}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            {currentItem}
          </Grid>
          <Grid item xs={12}>
            <ToggledInput checked={false} label={"Before"}/>
            <ToggledInput checked={false} label={"After"}/>
          </Grid>
        </Grid>
      </Box>

    </Grid>
  )
};
