export default class CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['character-sheet', 'sheet', 'actor'],
      width: 650,
      height: 700,
      resizable: true,
    });
  }

  get template() {
    return 'systems/uvg2e/templates/sheets/character-sheet.hbs';
  }
}
