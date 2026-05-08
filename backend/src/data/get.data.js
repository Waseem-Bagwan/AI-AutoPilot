import { Octokit } from "@octokit/core"
import config from "../configs/config.js"

const octokit = new Octokit({
  auth: config.GIT_HUB_PAT
})

export async function getCommits(){
    const response = await octokit.request('GET /repos/waseem-bagwan/Ai-AutoPilot/commits', {
      owner: 'waseem-bagwan',
      repo: 'Ai-AutoPilot',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

  return response.data
}