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

        // console.log('action send here');
        
        const data_p = state.source.get(state.router.link);
        const page = state.source[data_p.type][data_p.id];
        const acf_form = page.acf.gd_form;
        state.seatbackapi.isFormSend = true;
        const res = await axios.post('https://seatback-admin.webbuilder.in.ua/wp-json/seatback-api/send-forms/'+acf_form.ID, {data : data}).then(function (response) {
          // console.log(response);
          if (response.status==200) {
            state.seatbackapi.isFormSend = false;
          }
        });
      },
      beforeSSR: async ({ state, actions, libraries }) => {
        const topMenu = await axios.get(`${state.source.api}/menus/v1/menus/top_menu`);
        state.seatbackapi.menu = topMenu.data;
      },
    }
  }
};
