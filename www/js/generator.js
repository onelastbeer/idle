let initialSeed = Math.floor(Math.random()*1000000);

var generator = {
  seed: initialSeed,
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
  accesoryName: function() {
    var rand = generator.random();
    if(rand < 0.5) {
      return generator.accessoryNamePlace();
    } else {
      return generator.accessoryNameTitle();
    }
  },
  bootsName: function() {
    var rand = generator.random();
    if(rand < 0.5) {
      return generator.bootsNamePlace();
    } else {
      return generator.bootsNameTitle();
    }
  },
  armorName: function() {
    var rand = generator.random();
    if(rand < 0.5) {
      return generator.armorNamePlace();
    } else {
      return generator.armorNameTitle();
    }
  },
  weaponNamePlace: function() {
    return generator.weaponNamePicker() + " of the " + generator.place();
  },
  accessoryNamePlace: function() {
    return generator.accessoryNameType() + " of the " + generator.place();
  },
  bootsNamePlace: function() {
    return generator.bootsNameType() + " of the " + generator.place();
  },
  armorNamePlace: function() {
    return generator.armorNamePicker() + " of the " + generator.place();
  },
  accessoryNameTitle: function() {
    return generator.title() + "'s " + generator.accessoryNameType();
  },
  weaponNameTitle: function() {
    return generator.title() + "'s " + generator.weaponNamePicker();
  },
  bootsNameTitle: function() {
    return generator.title() + "'s " + generator.bootsNameType();
  },
  armorNameTitle: function() {
    return generator.title() + "'s " + generator.armorNamePicker();
  },
  weaponNamePicker: function() {
    var rand = generator.random();
    if(rand < 0.3) {
      return generator.weaponNameDescription();
    } else {
      return generator.weaponNameType();
    }
  },
  armorNamePicker: function() {
    var rand = generator.random();
    if(rand < 0.4) {
      return generator.armorNameDescription();
    } else {
      return generator.armorNameType();
    }
  },
  weaponNameType: function() {
    return generator.randVal(data.itemAdj) + " "
      + generator.randVal(data.weaponType);
  },
  accessoryNameType: function() {
    return generator.randVal(data.itemAdj) + " "
      + generator.randVal(data.accessoryType);
  },
  bootsNameType: function() {
    return generator.randVal(data.itemAdj) + " "
      + generator.randVal(data.bootsType);
  },
  armorNameType: function() {
    return generator.randVal(data.itemAdj) + " "
      + generator.randVal(data.armorType);
  },
  weaponNameDescription: function() {
    return generator.randVal(data.itemDes) + " "
      + generator.randVal(data.weaponName)
  },
  armorNameDescription: function() {
    return generator.randVal(data.itemDes) + " "
      + generator.randVal(data.armorName)
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
