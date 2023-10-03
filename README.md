# Create Shortcut Story

A GitHub Action that will create a story directly in Shortcut (formerly Clubhouse) when needed. 

## About

We wanted to add drift detection into our Terraform process, but there wasn't a clean way to alert/add stories when drift is detected. Instead of adding a GitHub Issue and then posting it into Shortcut, the idea is to go straight to what is _our_ source of truth. 

## Inputs

### story-title

> The name of the story.

### story-description

> The description of the story.

### assigned-team

> A group in our API maps to a “Team” within the Shortcut Product. A Team is a collection of Users that can be associated to Stories, Epics, and Iterations within Shortcut.

**How to find the group (team) id:**

Query the Shortcut api using `curl` to return all groups. I prefer to output this to a json file so it can be formatted and searched. The ID is a guid. 

```console
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Shortcut-Token: $SHORTCUT_API_TOKEN" \
  -L "https://api.app.shortcut.com/api/v3/groups" > groups.json
```

### api-key

The Shortcut API uses token-based authentication, you will need one to use this library.

To generate an API token, go to https://app.shortcut.com/settings/account/api-tokens.

### workflow-state-id

> Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in the Shortcut UI.

**How to find the workflow id:**
Query the Shortcut api using `curl` to return all workflows. I prefer to output this to a json file so it can be formatted and searched. If you have a complicated workflow structure, I found that using the `description` field was the easiest way to find the workflow id that I was looking for. The ID is an integer.

```console
curl -X GET \
  -H "Content-Type: application/json" \
  -H "Shortcut-Token: $SHORTCUT_API_TOKEN" \
  -L "https://api.app.shortcut.com/api/v3/workflows" > workflows.json
```

## Outputs

_None at this time._

## Example Usage

```yaml
- name: 'Create Shortcut Story'
  uses: deseretdigital/shortcut-story@v0.1.1
  with:
    api-key: {API_KEY}
    story-title: 'A thing happened.'
    story-description: 'Hey, look at this thing that happened.'
    assigned-team: {TEAM_ID}
    workflow-state-id: {WORKFLOW_ID}
```

## Important Links
- [Shortcut API Documentation](https://developer.shortcut.com/api/rest/v3#Create-Story)