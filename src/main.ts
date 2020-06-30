import * as core from '@actions/core'
import * as QRCode from 'qrcode'

async function run(): Promise<void> {
  try {
    const content = core.getInput('content', {required: true})
    const data = await QRCode.toDataURL(content)
    const qrcode = await QRCode.toString(content, {type: 'terminal'})
    // eslint-disable-next-line no-console
    console.log(qrcode)

    core.setOutput('data', data)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
