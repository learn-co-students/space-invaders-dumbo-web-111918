class CrewMember {
  constructor(position) {
    this.position = position
    this.currentShip = 'Looking for a Rig'
  }

  chargePhasers() {


    if (this.position.toUpperCase() === "PILOT" && this.checkShipStatus()) {
      this.currentShip.phasersCharge = 'uncharged'
    } else if (this.position.toUpperCase() === "GUNNER" && this.checkShipStatus() ) {
      this.currentShip.phasersCharge = 'charged'
    } else {
      return "had no effect"
    }

  }


  engageWarpDrive() {
    if (this.position.toUpperCase() === "PILOT" && this.checkShipStatus()) {
      this.currentShip.warpDrive = 'engaged'
    } else if (this.position.toUpperCase() === "DEFENDER" && this.checkShipStatus()) {
      this.currentShip.warpDrive = 'disengaged'
    } else {
      return "had no effect"
    }
  }

  setsInvisibility() {
    if (this.position.toUpperCase() === "DEFENDER" && this.checkShipStatus()) {
      this.currentShip.cloaked = true
    } else if (this.position.toUpperCase() === 'GUNNER' && this.checkShipStatus()) {
      this.currentShip.cloacked = false
    } else {
      return "had no effect"
    }
  }

  checkShipStatus() {
    return this.currentShip !== "Looking for a Rig"
  }

}
