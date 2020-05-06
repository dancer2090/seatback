const settings = {
  "name": "frontity-test",
  "state": {
    "frontity": {
      "url": "https://seatback.webbuilder.in.ua",
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
          "api": "https://seatback-admin.webbuilder.in.ua/wp-json",
          "homepage": '/home',
          "postsPage": '/blog',
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
    }
  ]
};

export default settings;
