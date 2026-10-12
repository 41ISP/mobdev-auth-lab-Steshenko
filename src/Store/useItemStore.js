import { create } from "zustand";
import { api } from "../api/api";

export const useItemStore = create((set) => ({
    Items: [],
    getItems: async () => {
        try {
            const res = await api.getItems()
            set({Items: res.data})
        } catch (error) {
            console.error(error)
        }
    }
}))