class Spaceship {

  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = crew.length > 1 ? false : true
    this.phasersCharge = 'uncharged';
    this.crew = crew;
    crew.forEach(mem => {
      mem.currentShip = this
    })
  }

}
