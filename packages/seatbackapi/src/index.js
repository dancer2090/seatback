/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';

const Root = () => (<></>);

export default {
  name: 'seatbackapi',
  roots: {
    seatbackapi: Root,
  },
  state: {
    seatbackapi: {
      isFormSend: false,
      isSubscribeSend: false,
      windowSize: 0,
      isWow: true,
      pageNumber: 2,
      posts: [],
      plans: [],
    },
  },
  actions: {
    seatbackapi: {
      trackWindowSize: ({ state }) => {
        state.seatbackapi.windowSize = window.innerWidth || 0;
        state.seatbackapi.isWow = window.innerWidth > 768;
      },
      sendForm: ({ state }) => async (data) => {
        const dataP = state.source.get(state.router.link);
        const page = state.source[dataP.type][dataP.id];
        const acfForm = page.acf.gd_form;
        state.seatbackapi.isFormSend = true;
        await axios.post(`${state.source.api}/seatback-api/send-forms/${acfForm.ID}`, { data }).then((response) => {
          if (response.status === 200) {
            state.seatbackapi.isFormSend = false;
          }
        });
      },
      beforeSSR: async ({ state }) => {
        const topMenu = await axios.get(`${state.source.api}/menus/v1/menus/top_menu`);
        state.seatbackapi.menu = topMenu.data;

        const optionPage = await axios.get(`${state.source.api}/acf/v3/options/options`);
        state.seatbackapi.options = optionPage.data;
      },
      afterCSR: async ({ actions }) => {
        actions.seatbackapi.trackWindowSize();
      },
    },
  },
};
