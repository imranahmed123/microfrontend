import React, { lazy, Suspense } from "react";
import "./styles.css";

const FirstApp = lazy(() => import("FIRST_APP/app"));
const SecondApp = lazy(() => import("SECOND_APP/app"));
const ThirdApp = lazy(() => import("THIRD_APP/app"));
const FourthApp = lazy(() => import("FOURTH_APP/app"));

const App = () => {
//
// </Suspense>
  return (
    //className="App"
    // <Suspense fallback={<span>Loading...</span>}>
    // <FirstApp/>       
    // <SecondApp/> 
    // <ThirdApp/> 
    // <FourthApp/> 
    // </Suspense>  
    <div className="App">
      <h1>This is host app for federation</h1>
      <h2>Micro host app is integrated here</h2>
      <div>
    
        <table className="table">
          <tr>
            <td>
              <Suspense fallback={<span>Loading...</span>}>
               <FirstApp/>  
              </Suspense>  
            </td>           
        
            <td> 
              <Suspense fallback={<span>Loading...</span>}>
                <SecondApp/> 
              </Suspense>    
            </td>
        
            <td>
              <Suspense fallback={<span>Loading...</span>}>
              <ThirdApp/> 
              </Suspense>  
            </td>           
        
            <td> 
              <Suspense fallback={<span>Loading...</span>}>
              <FourthApp/> 
              </Suspense>    
            </td>
          </tr>
        </table>  
      </div>
    </div>
  );
};

export default App;