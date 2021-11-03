import * as React from 'react';
import DetailsTab from "./DetailsTab"
import GeneralSettingsTab from "./GeneralSettingsTab"
import RegionalSettingsTab from './RegionalSettingsTab';
import TabsNavigationBar from './TabsNavigationBar';

var tabsMock: React.ReactNode[] = [<DetailsTab/>, <GeneralSettingsTab/>, <RegionalSettingsTab />];

export default function TabsNavigator() {

  console.log('rendering TabsNavigator')
  const [tabs, setTabs] = React.useState<any[]>(tabsMock)
  const [tab, setTab] = React.useState<any>(<DetailsTab/>)

  const handleChangeAt = (index: number) => {
    console.log(index)
    let olderTab = tabs[index]
    let updatedTab = tabs[index]
    let newTabs = [...tabs]
    newTabs[index] = updatedTab
    // newTabs.push(updatedTab)
    setTabs(newTabs)
    console.log(tabs)
  };

  return (
    <TabsNavigationBar
      tabs={tabs}
      callback={
        (index: number) => {
        handleChangeAt(index)
      }
    }
    />
  )
}
