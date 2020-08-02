import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import Theme from "./components";
import title from "./processors/title";
import linkUrls from "./processors/linkUrls";
import { anunciantesHandler } from "./handlers";

const marsTheme = {
  name: "@frontity/mars-theme",
  roots: {
    /**
     *  In Frontity, any package can add React components to the site.
     *  We use roots for that, scoped to the `theme` namespace.
     */
    theme: Theme,
  },
  state: {
    /**
     * State is where the packages store their default settings and other
     * relevant state. It is scoped to the `theme` namespace.
     */
    theme: {
      screenWidth: 0,
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      setScreenWidth: ({ state }) => (width) => {
        state.theme.screenWidth = width;
      },
      init: ({ libraries }) => {
        libraries.source.handlers.push(anunciantesHandler);
      },
      loadMore: ({ state, actions }) => async (data) => {
        state.seatbackapi.pageNumber += 1;
        actions.source.fetch(`posts/${state.seatbackapi.pageNumber}`, {
          force: true,
        });
      },
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        // Fetch the forms
        await actions.source.fetch("/forms/get-a-demo");

        // Fetch more articles if article page is open
        if (
          state.router.link.indexOf("/blog") &&
          state.router.link !== "/blog/"
        ) {
          await actions.source.fetch("/blog");
        }

      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * inside the content HTML. You can add your own processors too
       */
      processors: [image, iframe, title, linkUrls],
    },
  },
};

export default marsTheme;
