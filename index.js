"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@shortcut/client");
var Core = require("@actions/core");
try {
    var storyTitle = Core.getInput('story-title');
    var storyDescription = Core.getInput('story-description');
    var assignedTeams = Core.getInput('assigned-teams');
    var apiKey = Core.getInput('api-key');
    console.log("Story Name: ".concat(storyTitle));
    console.log("Description: ".concat(storyDescription));
    console.log("Teams: ".concat(assignedTeams));
    var shortcut = new client_1.ShortcutClient('6515fdc0-c156-4c81-ad38-d1edafab4aac');
    shortcut.getCurrentMemberInfo().then(function (response) { return console.log(response === null || response === void 0 ? void 0 : response.data); });
    shortcut.listProjects().then(function (response) { return console.log(response === null || response === void 0 ? void 0 : response.data); });
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
}
catch (error) {
    // Core.setFailed(error.message);
}
