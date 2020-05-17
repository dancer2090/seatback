import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from '@frontity/html2react/processors/iframe';
import title from './processors/title';
import linkUrls from './processors/linkUrls';
import { anunciantesHandler } from './handlers';

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      menu: [
        ["Product", "/product", [["Product1", "/product1"], ["Product2", "/product2"]]], 
        ["Engagement", "/engagements"],
        ["Engagement", "/plans"],
        ["About", "/about"],
      ],
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(anunciantesHandler)
      },
      loadMore: ({ state, actions, libraries }) => async data => {
    //const response = libraries.source.api.get({ endpoint: "posts" });
    //libraries.source.populate({ response, state });
    state.seatbackapi.pageNumber+=1;
    actions.source.fetch(`posts/${state.seatbackapi.pageNumber}`, { force: true });



    //console.log('resonnse after actions');
    //console.log(response);
    console.log('state after actions');
    console.log(state);
        /*
        console.log(data);
        var str = "";
        for (var key in data) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(data[key]);
        }
        const res = await axios.get(`${state.source.api}/wp/v2/posts?${str}`, {}).then(function (response) {
          if (response.status==200) {
            state.seatbackapi.pageNumber +=1;
            state.seatbackapi.posts = response.data;
            console.log(response.data);
            response.data.map(d=>{
              actions.source.fetch(`/posts/${d.slug}/`);
              //actions.source.fetch(`/media/${d.featured_media}/`);
            })
          }
        });
        */
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        // Fetch the forms
        await actions.source.fetch('/forms/get-a-demo');

        // Fetch more articles
        if (state.router.link.indexOf('/blog') && state.router.link !== '/blog/') {
          await actions.source.fetch('/blog');
        }

      }
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, title, linkUrls]
    }
  }
};

export default marsTheme;
