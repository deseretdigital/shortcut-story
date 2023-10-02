"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@shortcut/client");
var Core = require("@actions/core");
try {
    var storyTitle = Core.getInput('story-title');
    var storyDescription = Core.getInput('story-description');
    var assignedTeams = Core.getInput('assigned-teams');
    var apiKey = Core.getInput('api-key');
    var workflowId = Number(Core.getInput('workflow-state-id'));
    var story = {
        name: storyTitle,
        description: storyDescription,
        workflow_state_id: workflowId,
        group_id: assignedTeams
    };
    var shortcut = new client_1.ShortcutClient(apiKey);
    shortcut.createStory(story);
}
catch (err) {
    if (err instanceof Error)
        Core.setFailed(err.message);
}
