var generator = {
  seed: 1,
  enemyName: function() {
    var i = Math.floor(generator.random()*data.monsterAdj.length);
    var j = Math.floor(generator.random()*data.monsterPrefix.length);
    var k = Math.floor(generator.random()*data.monsterSuffix.length);
    console.log();
    return data.monsterAdj[i] + " " + data.monsterPrefix[j] + "-"
      + data.monsterSuffix[k];
  },
  weaponName: function() {

  },
  random: function() {
    var x = Math.sin(generator.seed++) * 10000;
    return x - Math.floor(x);
  }
}
