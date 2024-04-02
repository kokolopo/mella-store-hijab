import axios from "axios";
import { create } from "zustand";

const useCategory = create((set) => ({
  data: null,
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,
  categories: null,

  fetchCategory: async (jwt) => {
    set({ loading: true });

    try {
      const data = await axios.get(
        `${import.meta.env.VITE_API_URL}categories`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

      set({ loading: false });
      set({ data: await data.data.data });
      set({ categories: await data.data.data });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  postCategory: async (input, jwt) => {
    set({ loading: true });
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}categories`,
        input,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      set({ loading: false });
      set({ responsePost: await data });
    } catch (error) {
      set({ error: error });
    }
  },
}));

export default useCategory;
