import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(persist(
    (set) => ({
        info: {
            name: "Sahal",
            age: 14,
            gender: "male",
        },
        loading: false,
        error: false,
        remove: () => {
            return set((state) => ({
                info: {
                    ...state.info,
                    name: "",
                    age: 0,
                    gender: ""
                }
            }))
        },
        update: (payload) => {
            return set((state) => ({
                info: {
                    ...state.info,
                    name: payload.name,
                    age: payload.age,
                    gender: payload.gender
                }
            }))
        },
    }),
    {
        name: "user-storage"
    }
));