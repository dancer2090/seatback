import React from "react";
import axios from 'axios';

const Root = () => {
  return (
    <>
     
    </>
  );
};

export default {
  name: "seatbackapi",
  roots: {
    seatbackapi: Root
  },
  state: {
    seatbackapi: {
      isFormSend: false,
    }
  },
  actions: {
    seatbackapi: {
      sendForm: ({ state }) => async data => {
        state.seatbackapi.isFormSend = true;
        const res = await axios.get('https://seatback-admin.webbuilder.in.ua/wp-json/menus/v1/menus/top_menu');
        if (res) {
          state.seatbackapi.isFormSend = false;
        }
      },
      beforeSSR: async ({ state, actions, libraries }) => {
        const res = await axios.get('https://seatback-admin.webbuilder.in.ua/wp-json/menus/v1/menus/top_menu');
        state.seatbackapi.data = res.data;
      },
    }
  }
};
