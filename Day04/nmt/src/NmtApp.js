
import NmtFuncComp from './components/NmtFuncComp';


function NmtApp() {

 return(
  <div className="container border mt-3">
    <h1>Demo Component -Props -State </h1>
    <hr/>
    <div className='alert alert-danger'>
    <NmtFuncComp name="Nguyễn Tuấn" address="25 Vũ Ngọc Phan" company ="hanoi" />
    <hr/>
    <NmtFuncComp name="Nguyen Van Du" address="k22cnt4" company ="vietnam" />
  </div>

   </div > 
 );
}

export default NmtApp;
