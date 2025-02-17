import logo from './logo.svg';
import './App.css';
import NmtJsxExpression from './components/NmtJsxExpression';
import NmtFuncComp from './components/NmtFuncComp';
import NmtClassComp from './components/NmtClassComp';

function NmtApp() {
  return (
    <div className="container border mt-3 bg-white">
    <h1> Helo - K23CNT2 </h1>
      
      <NmtJsxExpression />
      
      <hr/>
      {/* Sử dụng function components */}
      <NmtFuncComp />
      {/* sử dụng class component */}
      <NmtClassComp></NmtClassComp>
    </div>
  );
}

export default NmtApp;
