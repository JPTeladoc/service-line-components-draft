import logo from './logo.svg';
import './App.css';
import { Table, materialUI, PureInput, Button, DoneIcon, colors } from "@intouchhealth/cig-components";
import { Suspense, useEffect, useState } from "react";
import React from 'react';

import BasicTabs from "./TabNav";

const { Grid, TableHead, TableRow, TableCell, TableBody, IconButton, MoreVert, Menu, MenuItem, Box } = materialUI;

export const serviceLineAccesors = [
  // { label: "Id", key: "serviceId" },
  { label: "Name", key: "serviceName" },
  { label: "ID", key: "serviceId" },
  { label: "Info", key: "serviceInfo" },
  { label: "ConsultType", key: "serviceConsultType" },
  { label: "Explanation", key: "serviceExplanation" },
  { label: "TimeZone", key: "serviceTimeZone" },
  { label: "Location", key: "serviceLocation" },
  { label: "Creation", key: "serviceCreation" },
  { label: "Termination", key: "serviceTermination" },
  { label: "Status", key: "serviceStatus" },
  { label: "Details / Edit", key: "serviceDetails" },
];

export const serviceLineTableAccesors = [
  { label: "Name", key: "serviceName" },
  { label: "ConsultType", key: "serviceConsultType" },
  { label: "Status", key: "serviceStatus" },
  { label: "Details / Edit", key: "serviceDetails" },
];

const serviceLineTableData = [{
  serviceName: "General Medical",
  serviceStatus: "Enabled",
  serviceConsultType: "OnDemand, Scheduled",
  serviceDetails: "Go to details / Edit",
}, {
  serviceName: "Family medicine",
  serviceStatus: "Disabled",
  serviceConsultType: "Scheduled",
  serviceDetails: "Go to details / Edit",
}, {
  serviceName: "Mental Health",
  serviceStatus: "Enabled",
  serviceConsultType: "All",
  serviceDetails: "Go to details / Edit",
}];

const dataForTabs = [{
  // serviceId: "651701b1-5202-42d2-ad50-c7098995cb0a",
  serviceName: "General Medical",
  serviceId: "651701b1-5202-42d2-ad50-c7098995cb0a",
  serviceExplanation: "Get care 24/7 for non-emergency conditions like cold & flu, sinus infection, allergies and more",
  serviceLocation: "Bahia Blanca",
  serviceCreation: "8/19/2021",
  serviceTermination: "1/1/9999",
  serviceDetails: "Go to details / Edit",
  serviceStatus: "Status"
}, {
  serviceName: "General Medical",
  serviceId: "6d8d5d57-56df-4192-8bf2-900b9a596c7b",
  serviceExplanation: "Talk with a licensed provider or get matched with the right care",
  serviceInfo: "service_specialty_code		BEHAVHEALTH   product_code	BEHAVHEALTH  sku_code		BHNONMD",
  serviceLocation: "Bahia Blanca",
  serviceCreation: "8/19/2021",
  serviceTermination: "1/1/9999",
  serviceDetails: "Go to details / Edit ",
  serviceStatus: "Status",
  serviceTimeZone: "America/Los_Angeles"
},];

function App() {

  const [tableData, setTableData] = useState<any[]>([]);

  return (
    <div>
      <header className="App-header">

        <Box sx={{ display: 'flex', p: 1, color: 'black', bgcolor: 'background.paper', width: '70%' }}>
          <Button onClick={() => { }} size="s" appearance="subtle" >
            Cancel
          </Button>
          <Button
            themeName="positive"
            onClick={() => { }}
            size="s"
          >
            Add Service
          </Button>
        </Box>
        <Grid item xs={10}>
          <Table
            accessors={serviceLineTableAccesors}
            data={serviceLineTableData}
          />

        </Grid>
        <BasicTabs />
      </header>
    </div>
  );
};

export default App;
