import { useState } from "react";
import * as React from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import { Typography, Toggle, Select } from '@intouchhealth/cig-components';
import GridField from "./GridField"
import Grid from '@mui/material/Grid';

interface CallbackProps {
  callback: (key: string) => void;
}

const SwitchListSecondary = (props: CallbackProps) => {
  const [checked, setChecked] = React.useState(['']);

  const handleToggle = (value: any) => () => {

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleClick = (value: string) => {
    props.callback(value);
  }

  interface ListItemProps {
    onSwitchChange: (key: string) => void;
    title: string;
  }

  function LocationListItem(props: ListItemProps) {
    return (
      <ListItem>
        <ListItemButton
          onClick={() => { handleClick(`${props.title}`) }}
          divider={true}
        >
          <Toggle
            enabled={checked.indexOf(`${props.title}`) !== -1}
            label={props.title}
            onChange={handleToggle(`${props.title}`)}
          />
        </ListItemButton>
      </ListItem>
    )
  }

  return (
    <List sx={{overflow:'scroll', height:"500px" }}>
      <LocationListItem onSwitchChange={() => { }} title={"First option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Second item"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
      <LocationListItem onSwitchChange={() => { }} title={"Third option"} />
    </List>
  );
}

function SelectMenu() {
  interface IFilm {
     title: string;
   }

   const items: IFilm[] = [
     { title: "Choice #1"},
     { title: "Choice #2"},
     { title: "Choice #3"},
   ]

   const [selectedOption, setSelectedOption] = useState<IFilm>( { title: "Select an option" });

   return(
     <Select
     accessor="title"
     options={items}
     selectedOption={selectedOption}
     setSelectedOption={setSelectedOption}
   />
   )

}


function FirstOption() {

  return(
    <div style={{margin:"5px"}}>
      <Typography type="h5" >
        This is some option #1. The option, its description and
        any entry fields for it are driven from a system wide configuration that
        can be expanded. Optional fields may
        be configured for entry as shown below
      </Typography>
      <Grid container spacing={1} sx={{paddingTop:'20px' }}>
        <GridField leftXs={3} rightXs={9} label={'Text Field:'} inputValue={'My Text'} />
        <GridField leftXs={3} rightXs={9} label={'Num Field:'} inputValue={'12'} />
        <GridField leftXs={3} rightXs={9} label={'Date Field:'} inputValue={'01/01/2023'} />
        <GridField leftXs={3} rightXs={9} label={'Time Field:'} inputValue={'12:30 PM'} />
        <GridField leftXs={3} rightXs={9} label={'Choice Field:'} div={<SelectMenu/>}/>
      </Grid>
    </div>
  )
}

function SecondOption() {
  return(
    <>
      This is some option #2.
      The option, its description and
      any entry fields for it are driven from a system wide configuration that
      can be expanded. Optional fields may
      be configured for entry as shown below
    </>
  )
}

export default function GeneralSettingsTab() {

  const [currentItem, setCurrentItem] = useState<any>();

  const handleToggle = (value: string) => {

    const dict: { [name: string]: any } = {
      "First option": <FirstOption />,
      "Second item": <SecondOption />,

    }

    setCurrentItem(dict[value]);
  };

  return (

    <Grid container xs={12} >
      <Grid item xs={6}>
        <SwitchListSecondary callback={(key) => { handleToggle(key) }} />
      </Grid>
      <Grid item xs={6}>
        <Typography fontFamily={'Montserrat'}>
          Description
        </Typography>
        {currentItem}
      </Grid>
    </Grid>
  )
};
