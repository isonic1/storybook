module.exports = {
    
    //https://www.npmjs.com/package/@applitools/eyes-storybook
    
    /* Server configuration */
    serverUrl: "https://eyesapi.applitools.com",
    apiKey: process.env.APPLITOOLS_API_KEY,  // as default used value from environment variable
    appName: 'My Storybook',
    showLogs: true,
    batchName: 'Storybook Example',
    
    // include: ({name, kind, parameters}) => {
    //   return /modules/.test(name)
    // },
    
    browser: [
       { width: 800,   height: 600, name: 'chrome'  },
       { width: 800,   height: 600, name: 'firefox' },
    ],

    concurrency: 2,

    tapFilePath: './output',

    //showEyesSdkLogs: true, // default is disabled

    //showStorybookOutput: true, // default is disabled
       
    //saveDebugData: true,

};