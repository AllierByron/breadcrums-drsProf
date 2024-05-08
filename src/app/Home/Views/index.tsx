import React, { Dispatch, SetStateAction } from "react";
import Nosotros from "../Components/AboutUs";

const PagPrincipal = ({setRoute}: {setRoute: Dispatch<SetStateAction<string[]>>}) => {

    return (
        <div>
            Where you are: Pagina principal <br />
            <ul>
                <li>
                    <a onClick={() => setRoute((prevState) => ([...prevState, 'Nosotros']))}>Nosotros</a>
                </li>
            </ul>
        </div>

    )
};

export default PagPrincipal;
