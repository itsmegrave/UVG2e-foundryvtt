export interface UVG2eConfig {
  ASCII: string;
  logPrefix: string;
  attributes: Attributes;
  targetNumbers: TargetNumbers;
}

export interface Attributes {
  strength: Attribute;
  endurance: Attribute;
  agility: Attribute;
  charisma: Attribute;
  aura: Attribute;
  thought: Attribute;
}

export interface Attribute {
  label: string;
  type: AttributeTypeEnum;
  abbreviation: string;
}
export interface TargetNumbers {
  trivial: number;
  easy: number;
  mediocre: number;
  hard: number;
  veryHard: number;
}

export enum AttributeTypeEnum {
  ACTIVE = 'active',
  DYNAMIC = 'dynamic',
  STATIC = 'static',
}
