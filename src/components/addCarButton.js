import { Button } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { useContext } from "react"
import { CarListContext } from "../context/carListContext"
import { carList } from "./addCarList";


export const addCarButton = () => {
    const { input, carList, setCarList, setInput } = useContext(CarListContext);

    const onClick = () => {
        if(!input) {
            return
        }
    };

    const newList = [...carList, input];
    setCarList(newList);
    setInput('');

    return (
        <div className="add-to-do-button-container">
            <Button color="navy" variant="contained" onClick={onClick}>
                Add Car
            </Button>
        </div>
    );
};

