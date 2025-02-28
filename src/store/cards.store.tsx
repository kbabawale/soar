import { create } from "zustand";
import { CardProps } from "../util/model";

interface CardStore {
  data: CardProps[];
  loading: boolean;
  error: boolean;
  errorData: string | null;
  fetchCards?: () => void;
}

const initialData: CardStore = {
  data: [],
  loading: false,
  error: false,
  errorData: null,
};

export const useCardStore = create<CardStore>((set) => ({
  ...initialData,
  fetchCards: async () => {
    set({ ...initialData, loading: true });
    try {
      const res = await fetchCardFromAPI();
      set({ ...initialData, loading: false, data: res });
    } catch (err: unknown) {
      const msg = err && err instanceof Error ? err.message : "";
      set({ ...initialData, loading: false, error: true, errorData: msg });
    }
  },
}));

const mockAPIURL =
  "https://run.mocky.io/v3/b39ae3c2-70ab-4a35-92b4-6967b3e56951";

const fetchCardFromAPI = async () => {
  delay(5000);
  const http = await fetch(mockAPIURL)
    .then((res) => res.json())
    .then((data) => data.data);
  return http;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
