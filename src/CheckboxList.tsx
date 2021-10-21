import { Checkbox } from '@intouchhealth/cig-components';

export interface CheckBoxListType{
  items: [string];
  height?: string;
}

export default function(props: any) {
  return (
      <div style={{ height: '100px', overflow: 'scroll' }}>
        {props.items.map((elem: any) => {
          return (
            <Checkbox onCheck={() => { }} label={elem} />
          )
        })}
      </div>
  )
}


// <Checkbox onCheck={() => { }} label={"On Demand"} />
// <Checkbox onCheck={() => { }} label={"Scheduled"} />
// <Checkbox onCheck={() => { }} label={"Future 1"} />
// <Checkbox onCheck={() => { }} label={"Future 2"} />
// <Checkbox onCheck={() => { }} label={"Future 3"} />
