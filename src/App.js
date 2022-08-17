import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransationList } from './components/TransationList';
import { AddTransaction } from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
import {AddLimit} from './components/AddLimit';
import { RangeDirective, RangesDirective,  SheetDirective, SheetsDirective, SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import {defaultData} from './components/data';
import './App.css';

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className ="container">
        <Balance />
        
        <IncomeExpense/>
        <AddLimit/>
        <TransationList/>
        <AddTransaction/>
        
        
        
      </div>
      <h3>SpreadSheet for Tracking</h3>
      <SpreadsheetComponent>
        <SheetsDirective>
        <SheetDirective>
          <RangesDirective>
            <RangeDirective dataSource={defaultData}>

            </RangeDirective>
          </RangesDirective>
        </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>
    
    </GlobalProvider>


  );
}
export default App;
