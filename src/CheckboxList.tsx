import { Checkbox } from '@intouchhealth/cig-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export interface CheckBoxListType{
  items: [string];
  height?: string;
}

export default function(props: any) {
  return (
      <List sx={{ height: '100%', overflow: 'scroll', border:2, borderRadius:1 }}>
        {props.items.map((elem: any) => {
          return (
            <ListItem sx={{ height:'25px'}}>
              <Checkbox onCheck={() => { }} label={elem} />
            </ListItem>
          )
        })}
      </List>
  )
}
