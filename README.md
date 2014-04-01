# [Neatline Starter Theme][post]

This is a template for an exhibit-specific Neatline theme, extracted from the [Project Gemini over Baja California][gemini] project. The theme uses:

  - **[npm][npm]** and **[Bower][bower]** for package management;
  - **[Grunt][grunt]** for compiling, concatenating, and compressing files;
  - **[Stylus][stylus]** for styling, which can be swapped for CSS.

## Installation

To get started, fork the repo and clone it into your Omeka theme at:

`[omeka-theme]/neatline/exhibits/themes/[exhibit-slug]`

Where `exhibit-slug` is the "URL Slug" of the exhibit you're theming. Then, you'll need to install [Node.js][node] and a handful of global packages. If you're on Mac:

  1. Install [homebrew][brew]:

    `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

  1. Install [Node.js][node] and [npm][npm]:

    `brew install node`

  1. Install [Bower][bower]:

    `npm install -g bower`

  1. Install the [Grunt CLI tool][grunt-cli]:

    `npm install -g grunt-cli`

  1. Install NPM packages:

    `npm install`

  1. Install Bower packages:

    `bower install`

## Development

Once the packages are installed, kick things off by running the `watch` task:

  `grunt watch`

Now, when you save any of the `*.js` or `*.styl` files under the `assets/` directory, Grunt will automatically compile the two payload files that are loaded by Neatline: `style.css` and `script.js`.

When you're ready to deploy the theme to production, run:

  `grunt compile:min`

Which compresses the CSS and Javascript payloads. Happy theming!

[post]: http://www.scholarslab.org/?p=9967
[gemini]: http://dclure.org/logs/project-gemini-over-baja-california
[npm]: https://www.npmjs.org
[bower]: http://bower.io
[grunt]: http://gruntjs.com
[grunt-cli]: http://gruntjs.com/getting-started
[stylus]: http://learnboost.github.io/stylus
[node]: http://nodejs.org
[brew]: http://brew.sh
