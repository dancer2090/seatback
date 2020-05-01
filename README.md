# Seatback

Seatback uses Frontity for connecting with Wordpress admin.

## Installation

Use the `npm` or `yarn` package manager to install seatback.

```bash
cd seatback
npm install
or
yarn install
```

## Usage

Recommended `node.js` version - `12.16.3`

### Development

In `frontity.settings.js` set the Wordpress API URL: 
```javascript
{
   "name": "@frontity/wp-source",
   "state": {
      "source": {
        "api": "https://seatback-admin.webbuilder.in.ua/wp-json"
      }
   }
},
```

#### Local running

```bash
npx frontity dev
or
npx frontity dev --port YOUR_PORT
```
#### Production build

```bash 
npx frontity build
```

#### Production server test

```bash 
npx frontity serve
```


### Deployment strategy

The `master` branch deploys every 2 days.
To add the code to master:
1. Create another branch from master. ( follow names `featute/branchmane` or `fix/branchname`)
2. Create PR. Assign someone to check it.
3. After approvement code merges to master.


### Deployment (server)

1. Install  `node.js` version - `12.16.3`
2. Run the progect
```bash
npx frontity build
npx frontity serve
``` 
Optional you can use PM2 for restarting application.


