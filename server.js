  const CoinHive = require('./src');

  // Create miner
  
(async () => {

  // Options are not mandatory, defaults values:
  const options = {
    interval: 1000, // interval for "update"
    port: 3002, // puppeteer port
    host: 'localhost', // puppeteer host,
    threads: -1 // number of threads to start with, defaults to navigator.hardwareConcurrency see https://coin-hive.com/documentation/miner#constructor-options
  }

  // Create miner
  const miner = await CoinHive('jFTnqP9X4WdsXlBvWTz19NnYBjTzIGqR'); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();
