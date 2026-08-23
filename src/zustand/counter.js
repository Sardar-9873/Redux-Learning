import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounter = create(persist((set) => ({
    count: 0,
    loading: false,
    error: false,
    increment: () => { return set((state) => ({ count: state.count + 1 })) },
    decrement: () => { return set((state) => ({ count: state.count - 1 })) },
    clear: () => { return set((state) => ({ count: 0 })) },
    manual: (payload) => { return set((state) => ({ count: state.count + payload })) },
}),{
    name: "counter-storage",
}));