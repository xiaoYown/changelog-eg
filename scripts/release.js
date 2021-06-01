const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const { Command, command } = require('commander');

const program = new Command();

const exec = (command) => {
  return new Promise((resolve, reject) => {
    child_process.exec(command, { cwd: path.join(__dirname, '../') }, (error, stdout, stderr) => {
      if (error) {
        console.error(`\u001b[31m node child_process: ${error} \u001b[39m`);
        reject();
        return;
      }
      console.log(`${stdout}`);
      resolve();
    });
  });
}

// const execSync = (command) => {
//   require('child_process').execSync(command, { cwd: path.join(__dirname, '../') });
// }

program
  .option('-c, --version <type>', 'release type');

program.parse();

const currenVersion = () => 'v' + JSON.parse(fs.readFileSync('./lerna.json').toString()).version;

async function release () {
  const commandRelease = `lerna publish ${program.opts().version} --skip-git`;
  await exec(`git pull`);
  await exec(commandRelease);
  await exec(`git add .`);
  await exec(`git commit -m ${currenVersion()}`);
  await exec(`git push`);
}

async function tag () {
  const version= currenVersion();
  
  const tags = child_process.execSync('git tag').toString().trim().split('\n');

  if (tags.indexOf(version)) {
    console.log(`\u001b[35m TAG: ${version} has been released. \u001b[39m`)
  } else {
    const latestTag = tags.slice(-1);
    const commandTag = `git tag ${version}`;
    await exec(`git fetch`);
    await exec(commandTag);
    await exec(`git push origin --tags`);
  }
}

async function start () {
  await release();
  tag();
}

start();
