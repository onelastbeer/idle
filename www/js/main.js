var loop = function() {
  enemy.hp = enemy.hp - 1
  if (enemy.hp <= 0) enemy.hp = enemy.maxHp
}

window.setInterval(function() { loop() }, 1000/60)
