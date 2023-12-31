<!--
SPDX-FileCopyrightText: 2022 Johannes Loher

SPDX-License-Identifier: MIT
-->

# Ultraviolet Grasslands and the Black City 2e

![GitHub License](https://img.shields.io/github/license/itsmegrave/uvg2e-foundryvtt?style=flat-square)
![GitHub release (latest by date)](https://img.shields.io/github/downloads/itsmegrave/uvg2e-foundryvtt/latest/total?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/itsmegrave/uvg2e-foundryvtt?style=flat-square)
![Foundry](https://img.shields.io/badge/dynamic/json.svg?url=https://raw.githubusercontent.com/itsmegrave/uvg2e-foundryvtt/main/src/system.json&label=Foundry&query=$.compatibleCoreVersion&colorB=blue&style=flat-square)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/O5O7KUBQY)

<div align=center>

![UVG2e logo](./static/uvg-coral-icon.png)

</div>

> "Fair hero, the end, the end alone awaits all travelers and at the end...was the journey all in vain? All journeys end in vanity. In vanity." - Mused the Grand Observer at the end of time.

Welcome to **The Ultraviolet Grasslands**, the roleplaying game of heroes on a strange trip through mythic steppes in search of lost time, broken space, and deep riffs.

**The Ultraviolet Grasslands and the Black City**  is a tabletop role-playing game book, half setting, half adventure, and half epic trip; inspired by psychedelic heavy metal, the Dying Earth genre, and classic Oregon Trail games. It leads a group of ‘heroes’ into the depths of a vast and mythic steppe filled with the detritus of time and space and fuzzy riffs.

You can grab a copy here [Ultraviolet Grasslands and the Black City](https://www.exaltedfuneral.com/products/uvg-2e)
## Installation

Please add your installation instructions here.

## Development

### Prerequisites

In order to build this system, recent versions of `node` and `npm` are
required. Most likely, using `yarn` also works, but only `npm` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run

```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
npm install
```

### Building

You can build the project by running

```
npm run build
```

Alternatively, you can run

```
npm run build:watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built system to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": ["/absolute/path/to/your/FoundryVTT"]
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
npm run link-project
```

On Windows, creating symlinks requires administrator privileges, so
unfortunately you need to run the above command in an administrator terminal for
it to work.

You can also link to multiple data folders by specifying multiple paths in the
`dataPath` array.

### Running the tests

You can run the tests with the following command:

```
npm test
```

### Creating a release

The workflow works basically the same as the workflow of the [League Basic JS Module Template], please follow the
instructions given there.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

Please add your licensing information here. Add your chosen license as
`LICENSE` file to the project root and mention it here.  If you don't know which
license to choose, take a look at [Choose an open source license].

[League Basic JS Module Template]: https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/

This project is under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)
