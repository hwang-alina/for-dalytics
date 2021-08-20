import React from 'react';
import CrocsChart from "./features/chart/CrocsChart";
import CrocsGrid from "./features/grid/CrocsGrid";
import './App.css';

const App = () => {
    return (<div className='App'>
        <CrocsChart />
        <CrocsGrid />
    </div>)
};

export default App;
