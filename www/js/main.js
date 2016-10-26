var enemy = new Vue({
  el: '#enemy',
  data: {
    barColor: '#d11149',
    name: generator.enemyName(),
    maxHp: 100,
    hp: 10
  },
  computed: {
    getWidth: function() {
      return 100*this.hp/this.maxHp
    }
  }
})

Vue.component('room', {
  //template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return data
  }
})

var map = new Vue({
  el: '#map',
  data: {

  }
})

var hero = new Vue({
  el: '#hero',
  data: {

  }
})


var loop = function() {
  enemy.hp = enemy.hp - 1
  if (enemy.hp <= 0) enemy.hp = enemy.maxHp
}

window.setInterval(function() { loop() }, 1000/60)
