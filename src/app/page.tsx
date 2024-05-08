"use client"
import PagPrincipal from "./Home/Views";
import { useState } from "react";
import Nosotros from "./Home/Components/AboutUs";
import Employee from "./AboutUs/Views/Employee";
import EmployeeTwo from "./AboutUs/Views/EmployeeTwo";

const filterRoute = (route: string, routeArr: string[]) => {
  let arr: string[] = [];
  for (let i = 0; i < routeArr.length; i++) {
      const element = routeArr[i];
      if (element !== route) arr.push(element);
      if (element === route) { 
          arr.push(element);
          break;
      };
  }
  return arr;
}

export default function Home() {
  const [routes, setRoute] = useState<string[]>(['PagPrincipal']);
  //aqui iba a poner los estilos pero me dio flojera xd
  const breadCrumStyle = '';  
  
  return (
    <div>
      {routes?.map((actual, i) => routes.length - 1 === i 
      ? <a key={i} onClick={() => setRoute((filterRoute(actual, routes)))}>{actual}</a> 
      : <a key={i} onClick={() => setRoute((filterRoute(actual, routes)))}>{`${actual}->`}</a>)}

      <br /><br />
      {routes[routes.length - 1] === 'PagPrincipal' &&
        <PagPrincipal setRoute={setRoute} />
      }
      {routes[routes.length-1] === 'Nosotros' &&
        <Nosotros setRoute={setRoute} />
      }
      {routes[routes.length-1] === 'Emp1' &&
        <Employee />
      }
      {routes[routes.length-1] === 'Emp2' &&
        <EmployeeTwo />
      }
    </div>

  );
}
