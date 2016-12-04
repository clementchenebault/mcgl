import Matrices from './utils/Matrices'

class OrbitalControl {
  constructor(){
    this.offsetPosition = [0, 0, 0];
    this.position = [0, 0, 0];
    this.target = [0, 0, 0];
    this.up = [0, 1, 0];
    this.radius = 800;

    this.angleA = 0;
    this.angleB = 0;
    this.tr = 0;
  }

  update(){
    this.position[1] = Math.sin(this.angleB) * this.radius;

    this.tr = Math.cos(this.angleB) * this.radius;
    this.position[0] = Math.cos(this.angleA) * this.tr;
    this.position[2] = Math.sin(this.angleA) * this.tr;

    this.position = Matrices.addVectors(this.position, this.offsetPosition);
  }
}

export default OrbitalControl;
