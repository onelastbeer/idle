let generateMap = function() {
  let generateRoom = function() {
    return {
      monster: "name",
      weapons: new Array(6).fill(1).map(function() {return generator.weaponName()})
    }
  }
  return new Array(36).fill(1).map(function() {return generateRoom()})
}

var map = new Vue({
  el: '#map',
  data: {
    selected: 1,
    rooms: generateMap()
  },
  methods: {
    select: function(i) {
      console.log(i.index);
    }
  }
})
