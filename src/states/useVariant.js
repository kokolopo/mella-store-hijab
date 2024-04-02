import axios from "axios";
import { create } from "zustand";

const useVariant = create((set) => ({
  data: [],
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,
  variants: [],

  fetchVariant: async (jwt) => {
    set({ loading: true });

    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}variants`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      set({ loading: false });
      set({ data: await res.data.data });
      set({ variants: await res.data.data });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  postVariant: async (input, jwt) => {
    set({ loading: true });
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}variants`,
        input,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      set({ loading: false });
      set({ responsePost: data });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useVariant;
