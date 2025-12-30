import { Octokit } from '@octokit/rest';

let connectionSettings: any;

async function getAccessToken() {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) throw new Error('X_REPLIT_TOKEN not found');

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  return connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;
}

async function main() {
  const repoName = 'TspanEcoSystem';
  const owner = 'pavangadi-source';
  
  console.log('Connecting to GitHub...');
  const accessToken = await getAccessToken();
  const octokit = new Octokit({ auth: accessToken });

  console.log('Creating initial README to initialize repository...');
  
  try {
    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo: repoName,
      path: 'README.md',
      message: 'Initial commit - T-SPAN University Platform',
      content: Buffer.from(`# T-SPAN University

## Elite Cybersecurity Education Platform

T-SPAN University is a global cybersecurity education platform partnered with:
- IIT Kanpur
- BITS Pilani
- Texas Tech University
- TU Delft
- DSCI CCOE
- TCPWave

### Features
- 30+ specialized cybersecurity courses
- Executive leadership programs
- Multi-language support (9 languages)
- Live infrastructure training
- KYC verification system
- Secure payment integration

### Contact
- **Headquarters:** 600 Alexander Road, Princeton, NJ 08540, USA
- **Email:** support@tcpwave.com, sales@tcpwave.com
- **Phone:** +1 888-831-8276

---
Built with React, TypeScript, and Node.js
`).toString('base64'),
    });
    
    console.log('README created successfully!');
    console.log(`\nRepository initialized at: https://github.com/${owner}/${repoName}`);
    console.log('\nNow run the full push script to upload all files.');
    
  } catch (error: any) {
    if (error.status === 422 && error.message.includes('sha')) {
      console.log('README already exists, repository is already initialized.');
    } else {
      console.error('Error:', error.message);
    }
  }
}

main();
