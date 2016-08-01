# dev-init

[![Downloads][7]][8]
[![Version][9]][8]
[![Dependency Status][10]][11]
![Kiril approved][ka]

[7]: https://img.shields.io/npm/dm/dev-init.svg
[8]: https://www.npmjs.com/package/dev-init
[9]: https://img.shields.io/npm/v/dev-init.svg

[10]: https://david-dm.org/catdad/dev-init.svg
[11]: https://david-dm.org/catdad/dev-init

[ka]: https://img.shields.io/badge/kiril-approved-ff69b4.svg

This project will get you started and automate a whole bunch of little things you need to do to every new project in order to work sanely with a team or accept contributions from other members of the open-source community. Since there are so many little steps, they take time and you always end up forgetting something and needing to make a bunch of tweaks later on. You should skip all of that, and just use this module to get up and running quickly.

## Sweet, how do I install it?

I appreciate your enthusiasm.

```bash
npm install -g dev-init
```

## How do I use it?

Easy:

```bash
mkdir my-cool-lib
cd my-cool-lib
dev-init
```

## So what happens?

### `git init`

The regular `git init` command is run for the module, to create all the necessary git bits.

### `.gitignore`

A default `.gitignore` file is used, suitable for NodeJS module and application development on macOS, Windows, and Linux. If you already have one of these files (perhaps you want to run this module on an existing repo), the values from this list will be merged into your existing file.

### `.gitattributes`

A default `.gitattributes` file is used, to standardize file checkouts across macOS, Windows, and Linux. This will ensure things like linting will never be broken on operating systems that you might not be using, but other members on your team are. If this file already exists, this will be skipped by default.

### `.brackets.json`

Kiril approves of [Brackets](https://github.com/adobe/brackets). So a configuration file is created to correctly set up Brackets. If you already have this file, the settings will be merged into your existing file.

There is an option here to select your preferred linter:

```bash
dev-init --linter ESLint
```

You can define as many linters as you would like to use:

```bash
dev-init --linter ESLint --linter JSHint --linter JSCS
```

You can also configure the number of spaces to use for indentation, although I strongly encourage you to stick to 4.

```bash
dev-init --spaces 2
```

### `.editorconfig`

Kiril also approves of other IDEs. An [`.editorconfig`](http://editorconfig.org/) file will be created to configure a whole plethora of other IDEs. If your favorite IDE does not support it natively, there is probably a plugin for it. If you already have this file, the settings will be merged into your existing file.

Like with `.brackets.json`, spaces are configurable.

```bash
dev-init --spaces 2
```

### `README.md`

An empty readme file will be created, to get you started and remind you that writing a readme is important. If a README already exists, this will be skipped by default.

## Whoa, merging files! Is that safe?

I'd like to think it is. I did a great job writing it. And, just so you know, if there is a merge error, your existing files will be safe. However, if you don't trust me, there is a flag for that.

```bash
dev-init --safe
```

With this flag, existing files will be left untouched.

## You mentioned something about some files being skipped?

Yeah. Not all files can be merged at this time. For those, I will respect your existing settings and leave them alone (until I can figure out a good way to merge them, anyway).

If you do want to use the files from this module, however, there is a flag for that too:

```bash
dev-init --force
```

This flag will replace all of the skipped files with the ones generated by this module. Files that are usually merged will still be merged.

## I don't like your settings.

That's not really a question, but it is also okay. Not everyone has to make the correct choices. You can still use this project though, to configure and enforce the settings you do prefer. Feel free to clone it and make all the changes you would like to the files in the `fixtures` folder.

You can set it up in your dev environment as such:

```bash
git clone git@github.com:catdad/dev-init.git
cd dev-init
npm install
npm link
```

Now you can make changes and use the `dev-init` cli command with your local version.

## License

[ISC](http://spdx.org/licenses/ISC)
