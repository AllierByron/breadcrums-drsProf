import Employee from "@/app/AboutUs/Views/Employee";
import EmployeeTwo from "@/app/AboutUs/Views/EmployeeTwo";
import React, { Dispatch, SetStateAction } from "react";

const Nosotros = ({setRoute}: {setRoute: Dispatch<SetStateAction<string[]>>}) => {    

    return (
        <div>
            Where you are: Nosotros
            <ul>
                <li>
                    <a onClick={() => setRoute((prevState) => {
                        
                        return ([...prevState, 'Emp1']);
                    })}>Empleado 1</a>
                </li>
                <li>
                    <a onClick={() => setRoute((prevState) => ([...prevState, 'Emp2']))}>Empleado 2</a>
                </li>
            </ul>
        </div>
    )
};

export default Nosotros;
