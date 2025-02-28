import { create } from "zustand";
import { TransactionProps } from "../util/model";

interface TransactionStore {
  data: TransactionProps[];
  loading: boolean;
  error: boolean;
  errorData: string | null;
  fetchTransactions?: () => void;
}

const initialData: TransactionStore = {
  data: [],
  loading: false,
  error: false,
  errorData: null,
};

export const useTransactionStore = create<TransactionStore>((set) => ({
  ...initialData,
  fetchTransactions: async () => {
    set({ ...initialData, loading: true });
    try {
      const res = await fetchTransactionFromAPI();
      set({ ...initialData, loading: false, data: res });
    } catch (err: unknown) {
      const msg = err && err instanceof Error ? err.message : "";
      set({ ...initialData, loading: false, error: true, errorData: msg });
    }
  },
}));

const mockAPIURL =
  "https://run.mocky.io/v3/63cd77e8-e705-43c0-b50e-7422f4160748";

const fetchTransactionFromAPI = async () => {
  await delay(15000);
  const http = await fetch(mockAPIURL)
    .then((res) => res.json())
    .then((data) => data.data);
  return http;
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
