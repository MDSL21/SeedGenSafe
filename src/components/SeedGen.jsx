// React component for generating Ethereum wallet seed phrases and wallets
// Dependencies: React, ethers, @ethersproject/hdnode, buffer, react-toastify, react-copy-to-clipboard
// Styles: SeedGenStyles.js
import React, { useState } from 'react';
import { ethers } from 'ethers';
import { HDNode } from '@ethersproject/hdnode';
import { Buffer } from 'buffer';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Title, Button, Input, WalletInfo, Address, PrivateKey, KeysDiv, Strong } from '../components/SeedGenStyles'

const SeedGen = () => {
  // State for seed phrase and generated wallets
  const [seedPhrase, setSeedPhrase] = useState('');
  const [wallets, setWallets] = useState([]);

  // Function to generate a new random seed phrase and corresponding wallets
  const generateSeedAndWallets = async () => {
    const randomMnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setSeedPhrase(randomMnemonic);
    generateWalletsFromSeed(randomMnemonic);
  };

  // Function to generate wallets from a given seed phrase
  const generateWalletsFromSeed = async (seedPhrase) => {
    const hdNode = HDNode.fromMnemonic(seedPhrase);
    const generatedWallets = [];
    for (let i = 0; i < 5; i++) {
      const childNode = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
      generatedWallets.push({
        address: childNode.address,
        privateKey: childNode.privateKey,
      });
    }
    setWallets(generatedWallets);
  };

  // Function to handle copy success and display a toast notification
  const onCopy = () => {
    toast.success('Copied!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Container>
      <ToastContainer />
      <Title>Ethereum Wallet Generator</Title>
      {/* Button to generate new seed phrase and wallets */}
      <Button onClick={generateSeedAndWallets}>Generate New Seed and Wallets</Button>
      {/* Display generated seed phrase */}
      {seedPhrase && (
        <CopyToClipboard text={seedPhrase} onCopy={onCopy}>
          <div>Seed Phrase: <b style={{cursor: 'pointer'}}>{seedPhrase}</b></div>
        </CopyToClipboard>
      )}
      {/* Input field to enter seed phrase manually */}
      <Input
        type="text"
        placeholder="Enter seed phrase here"
        value={seedPhrase}
        onChange={(e) => setSeedPhrase(e.target.value)}
      />
      {/* Button to generate wallets from entered seed phrase */}
      <Button onClick={() => generateWalletsFromSeed(seedPhrase)}>Generate Wallets From Seed</Button>
      {/* Display generated wallets */}
      {wallets.map((wallet, index) => (
        <WalletInfo key={index}>
          <strong>Wallet {index + 1}:</strong>
          <KeysDiv>
            {/* Display wallet address and allow copying */}
            <Address>
              <CopyToClipboard text={wallet.address} onCopy={onCopy}>
                <div>
                <Strong>Address:</Strong> <span style={{cursor: 'pointer'}}>{wallet.address}</span>
                </div>
              </CopyToClipboard>
            </Address>
            {/* Display wallet private key and allow copying */}
            <PrivateKey>
              <CopyToClipboard text={wallet.privateKey} onCopy={onCopy}>
                <div>
                <Strong>Private Key:</Strong> <span style={{cursor: 'pointer'}}>{wallet.privateKey}</span>
                </div>
              </CopyToClipboard>
            </PrivateKey>
          </KeysDiv>
        </WalletInfo>
      ))}
    </Container>
  );
};

export default SeedGen;