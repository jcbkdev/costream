# Co-Stream | Chrome Extension

## Overview

The Co-Stream Extension enhances your Twitch.tv experience by allowing you to watch multiple streams simultaneously without the need to open multiple browser tabs or split your browser window. This extension seamlessly integrates into the Twitch interface, adding an intuitive co-streaming feature for a more versatile viewing experience.
## Features

- **Simultaneous Streaming**: Watch two Twitch streams side-by-side in a single browser tab.
- **Easy Integration**: Adds a "Co-Stream" button to the Twitch interface for quick access.
- **Flexible Viewing**: Resize and move the co-stream window to suit your viewing preferences.
- **Simple Setup**: Enter the name of the channel you want to co-stream and start watching instantly.


## Installation
### Option 1: Download and Install `.crx` File
***this option may not work on some browsers***

1. **Download the Extension**:
- Go to the [Releases](https://github.com/jcbkdev/costream/releases) section of this repository.
- Download the `costream.crx` file from the latest release.
2. **Install the Extension**:
- Open Google Chrome and navigate to `chrome://extensions/`
- Enable "*Developer mode*" using the toggle switch in the top-right corner.
- Drag and drop the downloaded `costream.crx` file onto the extensions page to install it.
- Click "*Add extension*" when prompted.
### Option 2: Build from Source
1. Clone the repository or download the source code
```bash
  git clone https://github.com/jcbkdev/costream.git
  cd costream
```
2. Run the build script:
```bash
  npm run build
```
3. Load the extension in Chrome:
- Open Chrome and navigate to `chrome://extensions/`
- Enable "*Developer mode*"
- Click on "*Load unpacked*" and select the `costream` folder

## Usage
1. Navigate to any Twitch channel page
2. Click the `Co-Stream` button which should appear on the right of the `Subscribe` button
3. Click the `Add Channel` button and enter the name of the channel you want to add
4. Enjoy!
## Contributing

Contributions are always welcome! Please feel free to submit issues or pull requests.
## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/)  License.
