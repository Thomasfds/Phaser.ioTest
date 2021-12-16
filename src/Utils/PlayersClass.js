class PlayersClass {
  constructor() {
    this.name = name;
    this.actualSpeed = 0;
    this.speedMin = 50;
    this.booster = 30;
    this.massDefault = 1000 * 100;
    this.speedMax = 150;
  }

  getActualSpeed() {
    return this.actualSpeed;
  }

  getSpeedMin() {
    return this.speedMin;
  }

  getMassDefault() {
    return this.massDefault;
  }

  getSpeedMax() {
    return this.speedMax;
  }

   setActualSpeed(speed) {
    this.actualSpeed = speed;
    return this.actualSpeed;
  }

  getBooster() {
    return this.booster;
  }
}