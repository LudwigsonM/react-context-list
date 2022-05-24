import { carListContext } from "..context/carListContext"
import { Checkbox, IconButton, ListItem } from "@mui/material";
import { useContext } from "react"

export const carList = () => {
    const { carList, setCarList } = useContext(carListContext);

    const removeItem = (index) => {
        carList.splice(index, 1);
        setCarList([...carList]);
    };

    return (
    <List>
        {carList.map((item, i) => {
            return (
            <ListItem key={item}>
                {item}
                <IconButton onClick={() => removeItem(i)} />
                <AddTaskIcon /> 
            </ListItem> 
            );
        })}
    </List>
    );
};