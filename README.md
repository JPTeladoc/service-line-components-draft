# About
This repo intention is to provide a way of getting feedback of the service line components on development, that will be displayed once the service is available.

# Requirements
- A github access token is necesary (GAT).
- ~~Access to CIG components from InTouch's github repo.~~

# Usage
After you got a Github Acces Token, make sure it is used by the placeholder in the `.npmrc` file at root folder. 
Then run in the terminal:

- `git clone git@github.com:JPTeladoc/service-line-components-draft.git` to clone the repo
- `yarn install` to install dependencies. This step will require you to log in into npm. Use your github username and GAT as password.
- `yarn run start` to run the app

Go to localhost:3000 in your favourite browser.
