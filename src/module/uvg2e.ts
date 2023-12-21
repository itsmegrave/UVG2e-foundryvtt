// SPDX-FileCopyrightText: 2022 Johannes Loher
//
// SPDX-License-Identifier: MIT

/**
 * This is your TypeScript entry file for Foundry VTT.
 * Register custom settings, sheets, and constants using the Foundry API.
 * Change this heading to be more descriptive to your system, or remove it.
 * Author: [your name]
 * Content License: [copyright and-or license] If using an existing system
 * 					you may want to put a (link to a) license or copyright
 * 					notice here (e.g. the OGL).
 * Software License: [your license] Put your desired license here, which
 * 					 determines how others may use and modify your system.
 */

// Import TypeScript modules

import { registerSettings } from './settings';
import { preloadTemplates } from './preloadTemplates';
import { UVG2e } from './config';
import CharacterSheet from './sheets/CharacterSheet';

// Initialize system
Hooks.once('init', async () => {
  console.log(`${UVG2e.logPrefix} Initializing the UVG2e Game System\n${UVG2e.ASCII}`);
  CONFIG.UVG2e = UVG2e;
  // Assign custom classes and constants here

  CONFIG.Actor.documentClass = Actor;

  // Actors.unregisterSheet('core', ActorSheet);
  Actors.registerSheet('uvg2e', CharacterSheet, {
    types: ['character'],
    label: 'UVG2.CharacterSheet',
    makeDefault: true,
  });

  // Register custom system settings
  registerSettings();

  // Preload Handlebars templates
  await preloadTemplates();

  // Register custom sheets (if any)

  // Items.unregisterSheet('core', ItemSheet);
  // Items.registerSheet('uvg2e', UVG2eItemSheet, { makeDefault: true });
});

// Setup system
Hooks.once('setup', async () => {
  // Do anything after initialization but before
  // ready
});

// When ready
Hooks.once('ready', async () => {
  // Do anything once the system is ready
});

// Add any additional hooks if necessary
