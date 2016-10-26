var generator = {
  seed: Math.floor(Math.random()*1000000),
  enemyName: function() {
    var i = generator.randVal(data.monsterAdj);
    var j = generator.randVal(data.monsterPrefix);
    var k = generator.randVal(data.monsterSuffix);
    return i + " " + j + k;
  },
  weaponName: function() {
    var rand = generator.random();
    if(rand < 0.5) {
      return generator.weaponNamePlace();
    } else {
      return generator.weaponNameTitle();
    }
  },
  weaponNamePlace: function() {
    return generator.itemName() + " of the " + generator.place();
  },
  weaponNameTitle: function() {
    return generator.title() + "'s " + generator.itemName();
  },
  itemName: function() {
    var rand = generator.random();
    if(rand < 0.3) {
      return generator.itemNameDescription();
    } else {
      return generator.itemNameType();
    }
  },
  itemNameType: function() {
    return generator.randVal(data.itemAdj) + " "
      + generator.randVal(data.itemType);
  },
  itemNameDescription: function() {
    return generator.randVal(data.itemDes) + " "
      + generator.randVal(data.itemName)
  },
  place: function() {
    return generator.randVal(data.placePrefix) + " "
      + generator.randVal(data.placeSuffix)
  },
  title: function() {
    return generator.randVal(data.peopleTitle) + " "
      + generator.randVal(data.peopleName)
  },
  random: function() {
    var x = Math.sin(generator.seed++) * ((1298641*generator.seed)%10000);
    return x - Math.floor(x);
  },
  randVal: function(array) {
    return array[Math.floor(generator.random()*array.length)];
  }
}
