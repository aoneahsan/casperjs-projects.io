var casper = require("casper").create();

casper.start("https://aoneahsan.website/", function () {
  this.echo(this.getTitle());
});

casper.then(function () {
  this.echo(this.getCurrentUrl());
});

casper.run(function () {
  this.echo("done").exit();
});
