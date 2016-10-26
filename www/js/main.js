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


var loop = function() {
  enemy.hp = enemy.hp - 1
  if (enemy.hp <= 0) enemy.hp = enemy.maxHp
}

window.setInterval(function() { loop() }, 1000/60)
