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
    seatbackapi: {}
  },
  actions: {
    seatbackapi: {
      beforeSSR: async ({ state, actions, libraries }) => {
        const res = await axios.get('https://seatback-admin.webbuilder.in.ua/wp-json/menus/v1/menus/top_menu');
        state.seatbackapi.data = res.data;
      }
    }
  }
};
