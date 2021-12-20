
function generateMarkdown(data) {
  // generate badge depending on license
  let badgeUrl = '';
  if (data.license === 'MIT') {
      badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  
  if (data.license === 'ISC') {
      badgeUrl = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
  
  if (data.license === 'GNU GPLv3') {
      badgeUrl = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }


  
  let installationMarkdown = '';
  let contributingMarkdown = '';
  let testsMarkdown = '';

  // table of contents

  let tableofContents = `## Table of Contents`;
  
  // installation section

  if (data.installation) { 
      tableofContents += `
* [Installation](#installation)`;

      installationMarkdown = `
## Installation
To install dependencies, run:
\`\`\`
${data.installation}
\`\`\`
`;
  }

  tableofContents += `
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)`;
  
  // Contributing section

  if (data.contributing) {
      tableofContents += `
* [Contributing](#contributing)`;

      contributingMarkdown = `
## Contributing
${data.contributing}
`;
  }
  
  // Tests section

  if (data.tests) {
      tableofContents += `
* [Tests](#tests)`;

      testsMarkdown = `## Tests
To run tests:
\`\`\`
${data.tests}
\`\`\`
`;
  }

  tableofContents += `
* [Questions](#questions)`;

  return `# ${data.title}

${badgeUrl}

## Description
${data.description}

${tableofContents}
${installationMarkdown}
## Usage
${data.usage}

## Contributions
Created by ${data.contributions}.

## License
${data.title} is licensed under the ${data.license} license.
${contributingMarkdown}
${testsMarkdown}
## Questions
Please contact me with any questions at [GitHub](https://github.com/${data.github}) or via email at ${data.email}.`;
}

module.exports = generateMarkdown;