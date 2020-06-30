# QR Code Commenter
A GitHub Action that generates a QR Code and returns base64 Data 

## :arrow_forward: Usage
```yml
steps:

  - name: Generate QR Code
    id: qrcode
    uses: hammadj/qr-code-generator@master
    with:
      # Example using text outputted from another step action
      content: "${{ steps.deploy.outputs.preview_url }}"
  # Use the QR Code in another step, e.g. to embed the image in a slack message
  - name: Do Something
    run: echo ${{ steps.qrcode.output.data }}
```

### Set up required parameters
Need to contain the required parameters on the workflow file.

- `content` The content to encode to QR code. Must be string.

### Outputs
Need to contain the required parameters on the workflow file.

- `data` The base64 encoded representation of the QR Code


### Use a text outputted from the other action as input
You can use a text outputted from the other action as input.

Check the following page about the detail of `outputs` syntax: [Metadata syntax for GitHub Actions - GitHub Help](https://help.github.com/en/actions/building-actions/metadata-syntax-for-github-actions#outputs)

## :memo: Licence
MIT
