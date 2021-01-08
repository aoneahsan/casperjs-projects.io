const casperjs = require("casper");

const casper = casperjs.create({
  //   clientScripts: [
  //     "vendor/jquery.js", // These two scripts will be injected in remote
  //     // "vendor/underscore.js", // DOM on every request
  //   ],
//   remoteScripts: ["https://code.jquery.com/jquery-3.5.1.min.js"],
  pageSettings: {
    loadImages: false, // The WebPage instance used by Casper will
    loadPlugins: false, // use these settings
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
  },
//   logLevel: "error", // Only "info" level messages will be logged
  logLevel: "debug", // Only "info" level messages will be logged
  verbose: true // log messages will be printed out to the console
});

var links = [];

function getLinks() {
  var links = document.querySelectorAll(".b_algo a");
  return Array.prototype.map.call(links, function (e) {
    return e.getAttribute("href");
  });
};

casper.start("https://www.bing.com/", function () {
  this.fill(
    "form[action='/search']",
    {
      q: "zaions",
    },
    true
  );
});

casper.then(function () {
  links = this.evaluate(getLinks);

  // now search from anything
  this.fill(
    "form[action='/search']",
    {
      q: "brazzers",
    },
    true
  );
});

casper.then(function () {
  links = links.concat(this.evaluate(getLinks));
});

casper.run(function () {
  // before exiting from script
  this.echo(links.length + " links found");
  this.echo("-" + links.join(" \n -"));
  this.exit();
});

