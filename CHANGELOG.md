# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [v1.1] - 2024-12-17

### Added

- check-price-server.js
- delete-purchased-server.js
- get-server-data.js
- purchase-server.js
- script-killer.js

### Changed

- README.md renamed to CHANGELOG.md
- Reformatted CHANGELOG.md based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
- Created a new README.md file
- early-hack-template.js:
    - Now targets "silver-helix" for more money
    - Now checks for number of open ports required to NUKE, and open them + NUKE automatically
- get-max-money.js:
    - Now prints the text "The server's max money (M) is: " with the max money amount of the targeted server
- GRASS.js:
    - Now checks for number of open ports required to NUKE (up to 5), and open them + NUKE automatically
    - Now automatically runs early-hacking-template.js for as many threads as possible on the targeted server(this is automatically calculated based on the max RAM of the server and the cost of the script)
- startup.js:
    - Added more 0-port servers that the tutorial missed
    - Added 2-ports servers
    - Now checks for purchased servers and run script on them

## [v1.0] - 2024-12-16

### Added

- startup.js 
- get-max-money.js:
- GRASS.js
