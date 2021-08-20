import React from 'react'
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import {parseGridData} from "../../helpers/parseData";
import raw from "raw.macro";

const CrocsGrid = () => {
    const fileString = raw('../crocs_data.csv');
    const gridData = parseGridData(fileString);

    return (
        <div className="ag-theme-alpine" style={{ height: 'calc(100% - 25px)', width: '100%' }}>
            <AgGridReact
                rowData={gridData}
                domLayout='autoHeight'
                colResizeDefault='shift'
                >
                <AgGridColumn field="date" filter='agDateColumnFilter'/>
                <AgGridColumn field="name" filter='agTextColumnFilter'/>
                <AgGridColumn field="countSales" filter='agNumberColumnFilter'/>
                <AgGridColumn field="moneySales" filter='agNumberColumnFilter'/>
                <AgGridColumn field="inStock" filter='agNumberColumnFilter'/>
            </AgGridReact>
        </div>
    );
}

export default CrocsGrid
