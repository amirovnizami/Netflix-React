import { create } from "zustand";
import { persist } from "zustand/middleware";

export const Store = create(persist(
  (set) => ({
    accessToken: "",
    addAccessToken: (token) => set({ accessToken: token }),
  }),
  {
    name: "app-storage", 
  }
));

export default Store;
