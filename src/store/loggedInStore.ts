// Write a zustand store that keeps track of whether the user is logged in or not with user data.
// It should be persisted in local storage and should have a function to log out the user.

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  username: string;
  email: string;
  token: string;
}

interface LoggedInStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useLoggedInStore = create<LoggedInStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "loggedInStore",
    }
  )
);
