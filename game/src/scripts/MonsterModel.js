import parts from '../assets/images/models/parts.json';
import { randomObjectElement } from '../scripts/utils.js';

export function createRandomModel() {
  return {
    skin: randomObjectElement(parts.skin),
    shirtsArm: randomObjectElement(parts.shirts.arm),
    shoes: randomObjectElement(parts.shoes),
    shirt: randomObjectElement(parts.shirts.shirt),
    hair: randomObjectElement(parts.hair.man),
    pantsLeg: randomObjectElement(parts.pants.leg),
    pants: randomObjectElement(parts.pants.pants),
    face: randomObjectElement(parts.face.face)
  };
}