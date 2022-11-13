import { Context } from "@/Context/CartContext";
import { useContext } from "react";

export const useCart = () => useContext(Context)