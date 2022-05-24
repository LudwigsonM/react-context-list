
import { Input } from "@mui/material";
import { useContext } from "react"
import { CarListContext } from "../context/carListContext"


export const InputBox = () => {
    const { input, setInput } = useContext(CarListContext);

    return (
        <Input 
        placeholder="Enter Dream Car Wishlist Here !"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
    );
};