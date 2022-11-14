const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
  const token = core.getInput('github_token')
  const target_branch = core.getInput('target_branch')
  const source_branch = core.getInput('source_branch')
  const commit_message = core.getInput('commit_message')
  const octokit = github.getOctokit(token);

  const repo = github.context.repo
  let commitMessage = commit_message? commit_message:`Merge branch ${source_branch} into ${target_branch}.`;

  await octokit.rest.repos.merge({
    owner: repo.owner,
    repo: repo.repo,
    base: target_branch,
    head: source_branch,
    commit_message: commitMessage
  })
}

main().catch(err=>core.setFailed(err.message))
