import * as core from '@actions/core'
import * as github from '@actions/github'
import * as QRCode from 'qrcode'

async function run(): Promise<void> {
  try {
    const content = core.getInput('content', {required: true})
    const result = await QRCode.toString(content)
    const comment = core.getInput('comment', {required: true})
    const body = comment.replace('{qrcode}', result)

    const token = core.getInput('repo-token', {required: true})
    const githubAPI = new github.GitHub(token)
    const {repo, issue} = github.context

    await githubAPI.issues.createComment({
      owner: repo.owner,
      repo: repo.repo,
      // eslint-disable-next-line @typescript-eslint/camelcase
      issue_number: issue.number,
      body
    })
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
