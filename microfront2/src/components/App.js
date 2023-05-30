import * as React from 'react';
import CountryList from './Country';
import "./styles.css";

export default function App({ onChange }) {
return (
  //className="MicroApp"  
<div >
<h1>Micro App2</h1>
<CountryList />
</div>
);
}