'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           nhac-lly'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~nhac-lly'),
  github: chalk.gray('https://github.com/') + chalk.green('nhac-lly'),
  web: chalk.cyan('nhac-lly.github.io '),
  npx: chalk.red('npx') + ' ' + chalk.white('nhac-lly'),
  fb: chalk.blue('https://fb.com/') + chalk.blue('assIeat'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:'),
  labelFB: chalk.white.bold('Facebook:'),
  labelMe: chalk.white.bold('Me:'),
  me: chalk.orange('Asshole working at Dcorp')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const fbing = `${data.labelFB}  ${data.fb}`
const me = `${data.labelMe} ${data.me}`

// Put all our output together into a single variable so we can use boxen effectively
const output2 = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               npming + newline + // data.labelnpm + data.npm
               fbing + newline +
               githubing + newline + // data.labelGitHub + data.github
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx
const output = heading +
newline + newline +
me +
newline +
carding

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
