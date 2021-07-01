// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseAPIUrl: 'http://localhost:5000/api/v1',
  firebase: {
    apiKey: 'AIzaSyAyn6lym7sR1S-y3a6a_nqUmQ-LQknwSsg',
    authDomain: 'bag4anything-dev.firebaseapp.com',
    projectId: 'bag4anything-dev',
    storageBucket: 'bag4anything-dev.appspot.com',
    messagingSenderId: '1066597954566',
    appId: '1:1066597954566:web:4853c02c6bba7999ebbf87',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
