# MarvelSearchAPI

![MarvelSearchAPI-GIF](https://i.ibb.co/h9pnKDx/Marvel-API-minified.gif)

Angular application that interacts with the [Marvel Comics API] (http://developer.marvel.com/) and provides a search engine on the database of characters and comics.
It allows you to find characters and view information such as details and their respective information such as comics and a wiki (about the character).


# Features
- [X] Consuming Marvel API
- [X] Character Details
- [X] Characters Wiki
- [X] Character Comics
- [X] Listing with the link to the HQ's
- [X] Character Search Engine

# Coming Soon
- [ ] Login (Create an account to save your favorite comics)
- [ ] Cart (Add Comic Cart and be able to buy with discounts)


## Installation

Type `npm install` in the terminal and wait to install all dependencies, 
and then execute the command `ng serve` to start the application. 

The application will [run on](http://localhost:4200) port
## Note
 
The API is in the `src/environments` `apiKey` 

`src/environment.ts`
```
export const environment = {
  ...
  apiEndpoint: '//gateway.marvel.com/v1/public/',
  apiKey: '<Your public key is here>'
};
```

You can register your **public key** here > [Marvel Developer Portal](http://developer.marvel.com/)

## Dependencias
rxjs, nodejs, express, material design



## Thank you
for purchasing our product, if you want more applications like that, [goes to](https://codecanyon.net/user/alien-dev)
