import { create } from "zustand";

export type User = {
  name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  permanentAddress: string;
  presentAddress: string;
  dateOfBirth: string;
  postalCode: string;
  username: string;
};

interface UserStore {
  data: User;
  loading: boolean;
  error: boolean;
  errorData: string | null;
  fetchUser?: () => void;
}

const initialData: UserStore = {
  data: {
    name: "",
    email: "",
    password: "",
    country: "",
    city: "",
    permanentAddress: "",
    presentAddress: "",
    dateOfBirth: "",
    postalCode: "",
    username: "",
  },
  loading: false,
  error: false,
  errorData: null,
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialData,
  fetchUser: async () => {
    set({ ...initialData, loading: true });
    try {
      const res = await fetchUserFromAPI();
      set({ ...initialData, loading: false, data: res });
    } catch (err: unknown) {
      const msg = err && err instanceof Error ? err.message : "";
      set({ ...initialData, loading: false, error: true, errorData: msg });
    }
  },
}));

const fetchUserFromAPI = async () => {
  delay(5000);
  const http = await fetch(
    "https://run.mocky.io/v3/077365ff-0b66-4dad-86df-e911b20e1508"
  );
  return await http.json();
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
