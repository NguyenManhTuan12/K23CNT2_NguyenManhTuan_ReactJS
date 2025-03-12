import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NmtApp from './NmtApp';
import NmtForm from './components/NmtForm';
import NmtControl from './components/NmtControl';
import NmtMemberAdd from './components/NmtMemberAdd';
import NmtMemberList from './components/NmtMemberList';

const nmtRoot = ReactDOM.createRoot(document.getElementById('nmtRoot'));
nmtRoot.render(
  <React.StrictMode>
    <NmtApp/>
    <NmtForm/>
    <NmtControl/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
