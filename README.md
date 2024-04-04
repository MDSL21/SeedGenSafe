# Ethereum Wallet Generator

## Description
The Ethereum Wallet Generator is a React tool for generating seed phrases and Ethereum wallets from those seed phrases. It utilizes the ethers.js library for cryptographic manipulation and the react-toastify library for visual notifications.

## Features
- Generation of a new seed phrase.
- Generation of up to 5 Ethereum wallets from a provided seed phrase.
- Display of the generated wallets, including address and private key.
- Ability to copy addresses and private keys to the clipboard.

## Installation
### Prerequisites
- Node.js
- npm or yarn

### Steps
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install` to install dependencies.

## Usage
### Running the Project
1. In the project directory, run `npm start` or `yarn start`.
2. Access http://localhost:3000 in your browser.

### Generating a Seed Phrase and Wallets
- Click on Generate New Seed and Wallets to generate a new seed phrase and up to 5 wallets.
- The generated wallets will be displayed on the screen, with options to copy the addresses and private keys.

### Importing a Seed Phrase
- Enter a seed phrase in the provided input field.
- Click on Generate Wallets From Seed to generate wallets from the provided seed phrase.

## Components
- SeedGen: The main component implementing the logic for generating seed phrases and wallets.

## Styling
- Uses styling components imported from ../components/SeedGenStyles for styling.

## Dependencies
- react
- ethers
- @ethersproject/hdnode
- buffer
- react-toastify
- react-copy-to-clipboard

## Notifications
- Uses react-toastify to notify the user when addresses or private keys are copied to the clipboard.

## Security
- Never share your private keys.
- Wallet generation is done locally, without the need for communication with external servers.

## License
- Free for use and modification. It is recommended to include an appropriate open-source license when publishing.

## Contributions
- Contributions are welcome. Please send pull requests or open issues to propose improvements or report bugs.

- Created by Mayckon