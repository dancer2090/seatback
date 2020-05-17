import { config } from "dotenv";
config();

const settings = {
  "name": "frontity-test",
  "state": {
    "frontity": {
      "adminUrl": process.env.ADMIN_URL,
      "url": process.env.SITE_URL,
      "title": "Seatback",
      "description": "Seatback website"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": process.env.WP_API,
          "homepage": '/home',
          "postsPage": '/blog',
          params: {
            per_page: 2,
            type: ["post", "page"]
          },
          postTypes: [
            {
              type: "forms", // type slug
              endpoint: "forms", // REST API endpoint
              archive: "/forms" // link where this custom posts are listed
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    {
      name: "seatbackapi",
      state: {
        seatbackapi: {
          menu: {},
          start: "yes",
        }
      }
    },
    "@frontity/head-tags",
  ]
};

export default settings;
