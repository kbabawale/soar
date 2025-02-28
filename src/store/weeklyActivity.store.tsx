import { create } from "zustand";

type WeeklyActivityResponse = {
  deposits: number[];
  withdrawal: number[];
};

interface WeeklyActivityStore {
  data: WeeklyActivityResponse | null;
  loading: boolean;
  error: boolean;
  errorData: string | null;
  fetchActivity?: () => void;
}

const initialData: WeeklyActivityStore = {
  data: null,
  loading: false,
  error: false,
  errorData: null,
};

export const useWeeklyActivityStore = create<WeeklyActivityStore>((set) => ({
  ...initialData,
  fetchActivity: async () => {
    set({ ...initialData, loading: true });
    try {
      const res = await fetchWeeklyActivityFromAPI();
      set({ ...initialData, loading: false, data: res });
    } catch (err: unknown) {
      const msg = err && err instanceof Error ? err.message : "";
      set({ ...initialData, loading: false, error: true, errorData: msg });
    }
  },
}));

const mockAPIURL =
  "https://run.mocky.io/v3/3037e74a-3948-40bd-97d2-b15350938cdc";

const fetchWeeklyActivityFromAPI = async () => {
  await delay(3000);
  const http = await fetch(mockAPIURL)
    .then((res) => res.json())
    .then((data) => data.data);
  return http;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
