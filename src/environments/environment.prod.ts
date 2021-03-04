export const environment = {
  production: true,
  apiUrl: 'https://gateway.marvel.com/v1/public/', // < insert your link API
  apiKey: 'a5a8606d5bc52b03ce161221795f4ae2',      // < insert your API key
  settings: {
    appErrorPrefix: '[MarvelSearch Error] ',        // app name and Error
    appTitle: 'MarvelSearch',                      // < insert your app name
    version: '1.0'                                 // < insert the app version
  }
};

toastr.options.timeOut = 1500;
