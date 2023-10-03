import { Story, CreateStoryParams, ShortcutClient } from '@shortcut/client';
import * as Core from '@actions/core';
import * as GitHub from '@actions/github';

try {
  const storyTitle = Core.getInput('story-title');
  const storyDescription = Core.getInput('story-description');
  const assignedTeam = Core.getInput('assigned-team');
  const apiKey = Core.getInput('api-key');
  const workflowId = Number(Core.getInput('workflow-state-id'));

  let story: CreateStoryParams = {
    name: storyTitle,
    description: storyDescription,
    workflow_state_id: workflowId, 
    group_id: assignedTeam != null ? assignedTeam : null
  };

  const shortcut = new ShortcutClient(apiKey);

  shortcut.createStory(story);
} catch (err) {
  if (err instanceof Error) Core.setFailed(err.message)
}