import axios from "axios";
import { create } from "zustand";

const useProduct = create((set) => ({
  data: null,
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,

  fetchProduct: async (jwt) => {
    set({ loading: true });

    try {
      const data = await axios.get(`${import.meta.env.VITE_API_URL}products`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      set({ loading: false });
      set({ data: await data.data.data });
    } catch (error) {
      console.log(error);
      set({ error: error });
    }
  },

  postProduct: async (input, jwt) => {
    set({ loading: true });
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_URL}products`,
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

export default useProduct;
