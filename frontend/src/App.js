import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SendIcon from '@mui/icons-material/Send';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import BasicDateTimePicker from './components/DatePicker';

import TitlebarBelowImageList from './components/ImageList'

import StickyFooter from './components/StickyFooter'

import ResponsiveAppBar from './components/Navbar'

function CheckboxLabels() {
  return (
    <div>
      Testing
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />

        <TitlebarBelowImageList />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>

        <ButtonGroup size='large' color="secondary">
          <Button href="#"
            variant="contained"
            color="primary">
            Hello
          </Button>

          <Button
            onClick={() => alert('hello button')}
            varaint="contained"
            color="secondary">
            Alrt alert
          </Button>

          <Button
            variant="contained"
            endIcon={<SendIcon />}>
            Send
          </Button>
        </ButtonGroup>

        <BasicDateTimePicker />

        <StickyFooter />
      </header>
    </div>
  );
}

export default App;
