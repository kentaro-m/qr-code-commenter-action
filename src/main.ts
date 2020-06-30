import * as core from '@actions/core'
import * as QRCode from 'qrcode'

async function run(): Promise<void> {
  try {
    const content = core.getInput('content', {required: true})
    const data = await QRCode.toDataURL(content)
    const text = await QRCode.toString(content)

    core.setOutput('data', data)
    core.setOutput('text', text)
    // eslint-disable-next-line no-console
    console.log(text)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
