const character = {
  name: "Snortleblat",
  class: "Warrior",
  level: 1,
  health: 100,
  image: "character_portrait.webp",

  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      document.getElementById("message").textContent = `${this.name} has died!`;
      document.getElementById("btn-attack").disabled = true;
    } else {
      document.getElementById("message").textContent = `${this.name} was attacked! -20 health.`;
    }
    render();
  },

  levelUp() {
    this.level += 1;
    document.getElementById("message").textContent = `${this.name} You leveled up! Now level ${this.level}.`;
    render();
  }
};

function render() {
  document.getElementById("char-name").textContent = character.name;
  document.getElementById("char-class").textContent = character.class;
  document.getElementById("char-level").textContent = character.level;
  document.getElementById("char-health").textContent = character.health;
  document.getElementById("char-image").src = character.image;
}

document.getElementById("btn-attack").addEventListener("click", () => character.attacked());
document.getElementById("btn-levelup").addEventListener("click", () => character.levelUp());

render();