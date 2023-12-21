import { AttributeTypeEnum, UVG2eConfig } from '../types/UVG2eConfig';

export const UVG2e: UVG2eConfig = {
  ASCII: `
██    ██ ██    ██  ██████  ██████  ███████
██    ██ ██    ██ ██            ██ ██
██    ██ ██    ██ ██   ███  █████  █████
██    ██  ██  ██  ██    ██ ██      ██
 ██████    ████    ██████  ███████ ███████
`,
  logPrefix: 'UVG2e | ',
  attributes: {
    strength: {
      label: 'uvg2e.attributes.strength.label',
      type: AttributeTypeEnum.ACTIVE,
      abbreviation: 'uvg2e.attributes.strength.abbreviation',
    },
    endurance: {
      label: 'uvg2e.attributes.endurance.label',
      type: AttributeTypeEnum.STATIC,
      abbreviation: 'uvg2e.attributes.endurance.abbreviation',
    },
    agility: {
      label: 'uvg2e.attributes.agility.label',
      type: AttributeTypeEnum.DYNAMIC,
      abbreviation: 'uvg2e.attributes.agility.abbreviation',
    },
    charisma: {
      label: 'uvg2e.attributes.charisma.label',
      type: AttributeTypeEnum.ACTIVE,
      abbreviation: 'uvg2e.attributes.charisma.abbreviation',
    },
    aura: {
      label: 'uvg2e.attributes.aura.label',
      type: AttributeTypeEnum.STATIC,
      abbreviation: 'uvg2e.attributes.aura.abbreviation',
    },
    thought: {
      label: 'uvg2e.attributes.thought.label',
      type: AttributeTypeEnum.DYNAMIC,
      abbreviation: 'uvg2e.attributes.thought.abbreviation',
    },
  },
  targetNumbers: {
    trivial: 3,
    easy: 7,
    mediocre: 11,
    hard: 15,
    veryHard: 19,
  },
};
