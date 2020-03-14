import * as QRCode from 'qrcode'

async function generateQRCode(text: string): Promise<void> {
  const result = await QRCode.toString(text)
  // eslint-disable-next-line no-console
  console.log(result)
}

generateQRCode('Kentaro Matsushita')
