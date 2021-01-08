const casperjs = require("casper");

const casper = casperjs.create({
  clientScripts: [
    "vendor/jquery.js", // These two scripts will be injected in remote
    // "vendor/underscore.js", // DOM on every request
  ],
  pageSettings: {
    loadImages: false, // The WebPage instance used by Casper will
    loadPlugins: false, // use these settings
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
  },
  logLevel: "error", // Only "info" level messages will be logged
  verbose: true, // log messages will be printed out to the console
});

const url = "https://google.com";

casper.start(url, function () {
  this.echo("page loaded");
});



casper.run(function () {
  // before exiting from script
  this.echo("casper exit()");
  this.exit();
});
