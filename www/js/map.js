let generateMap = function() {
  let generateRoom = function() {
    return {
      monster: generator.enemyName(),
      items: new Array(6).fill(1).map(function() {
        var rand = generator.random();
        if(rand < 0.2)
          return generator.bootsName();
        else if(rand < 0.4)
          return generator.accesoryName();
        else if(rand < 0.6)
          return generator.armorName();
        else
          return generator.weaponName();
      })
    }
  }
  return new Array(36).fill(1).map(function() {
    return generateRoom()
  })
}

var map = new Vue({
  el: '#map',
  data: {
    selected: 1,
    rooms: generateMap()
  },
  methods: {
    select: function(i) {
      this.selected = i.index
    },
    currentEnemy: function() {
      return this.rooms[this.selected - 1].monster
    }
  }
})
