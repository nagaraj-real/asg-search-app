// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  questionapi:'https://api.stackexchange.com/2.2/search/advanced',
  answerapi:(questionid)=>{
    return `https://api.stackexchange.com/2.2/questions/${questionid}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`
  },
  savesearchapi:'http://localhost:2697/api/PastSearches'

};
