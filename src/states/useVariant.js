import axios from "axios";
import { create } from "zustand";

const useVariant = create((set) => ({
  data: null,
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,
  variants: null,

  fetchVariant: async () => {
    set({ loading: true });

    try {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}variants`);
      set({ loading: false });
      set({ data: await data.data.data });
      set({ variants: await data.data.data });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  postVariant: async (input) => {
    set({ loading: true });
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}variants`,
        input
      );
      set({ loading: false });
      set({ responsePost: data });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useVariant;
