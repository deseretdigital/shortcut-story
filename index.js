const core = require('@actions/core');
const github = require('@actions/github');

try {
  const storyName = core.getInput('story-name');
  const storyDescription = core.getInput('story-description');
  const assignedTeams = core.getInput('assigned-teams');

  console.log(`Story Name: ${storyName}`)
  console.log(`Description: ${storyDescription}`)
  console.log(`Teams: ${assignedTeams}`)

  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}