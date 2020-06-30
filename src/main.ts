import * as core from '@actions/core'
import * as QRCode from 'qrcode'

async function run(): Promise<void> {
  try {
    const content = core.getInput('content', {required: true})
    const data = await QRCode.toDataURL(content)

    core.setOutput('data', data)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
