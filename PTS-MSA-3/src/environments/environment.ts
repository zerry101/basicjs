// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://demo.masaportal.com/mobile/',
 // baseUrl: 'https://masaportal.com/mobile/',
  documentBaseUrl1: 'https://demo.masaportal.com/api/msa/list',
  //documentBaseUrl1: 'https://masaportal.com/mobile/api/msa/list',
  //documentLocalUrl: 'http://dev-compass360.masaassist.local/PTSRESTAPIModuleApp/msa/',
  /* documentBaseUrl2: 'http://dev-compass360.masaassist.local/PTSRESTAPIModuleApp/msa/', */
  cognitoUserPoolData: {
    // For Demo
    UserPoolId: 'us-east-1_9RsZEaO8H',
    ClientId: '3t3gmcis9jev6emqhcp7hbqnlm',

    // For Production
    /* UserPoolId: 'us-east-1_J1VeLZeJf',
    ClientId: '5oqlf6bvc3kpe3gfqa3p6j3eu0', */
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
