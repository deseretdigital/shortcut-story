import { ShortcutClient } from '@shortcut/client';
import * as Core from '@actions/core';
import * as GitHub from '@actions/github';

try {
  const storyTitle = Core.getInput('story-title');
  const storyDescription = Core.getInput('story-description');
  const assignedTeams = Core.getInput('assigned-teams');
  const apiKey = Core.getInput('api-key')
  
  console.log(`Story Name: ${storyTitle}`)
  console.log(`Description: ${storyDescription}`)
  console.log(`Teams: ${assignedTeams}`)

  const shortcut = new ShortcutClient('6515fdc0-c156-4c81-ad38-d1edafab4aac'); 

  shortcut.getCurrentMemberInfo().then((response) => console.log(response?.data));

  shortcut.listProjects().then((response) => console.log(response?.data));

  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  // Core.setFailed(error.message);
}