var enemy = new Vue({
  el: '#enemy',
  data: {
    barColor: '#1c448e',
    name: 'Blorg the destroyer',
    maxHp: 100,
    hp: 90
  },
  methods: {
    getWidth: function() {
      return 100*this.hp/this.maxHp
    },
    getColor: function() {
      return barColor
    }
  },
})
