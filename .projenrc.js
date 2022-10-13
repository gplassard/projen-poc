const { typescript } = require('projen');
const { GithubCredentials } = require('projen/lib/github');

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'projen-poc',
  gitignore: ['.vscode', '.idea', '*.iml'],
  githubOptions: {
    mergify: false,
    projenCredentials: GithubCredentials.fromPersonalAccessToken({ secret: 'GITHUB_TOKEN' }),
  },
  jestOptions: {
    configFilePath: 'jest.config.json',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();