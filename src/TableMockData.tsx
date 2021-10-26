import { useHistory } from "react-router-dom";
import { Button } from "@intouchhealth/cig-components";

function EditButton(props: any) {
  const history = useHistory();

  function pushtab() {
    history.push(`/${props.path}`)
  }

  return (
    <Button appearance="outline" themeName="warning" size="xs" onClick={() => { pushtab() }}>
      Edit
    </Button>
  );
}

export const mockData = [{
  name: "General Medical",
  status: "Enabled",
  consultType: "OnDemand, Scheduled",
  action: <EditButton path={`General Medical`} />,
}, {
  name: "Family medicine",
  status: "Disabled",
  consultType: "Scheduled",
  action: <EditButton path={"BasicTabs"} />,
}, {
  name: "Mental Health",
  status: "Enabled",
  consultType: "All",
  action: <EditButton path={"BasicTabs"} />,
}];

export const mockAccessors = [
  { label: "Name", key: "name" },
  { label: "Status", key: "status" },
  { label: "Consult Type", key: "consultType" },
  { label: "Action", key: "action" },
];
