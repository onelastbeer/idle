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
