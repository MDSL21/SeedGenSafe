// React component for generating Ethereum wallet seed phrases and wallets
// Dependencies: React, ethers, @ethersproject/hdnode, react-toastify, react-copy-to-clipboard
// Styles: SeedGenStyles.js

import React, { useState } from 'react';
import { ethers } from 'ethers';
import { HDNode } from '@ethersproject/hdnode';
import 'react-toastify/dist/ReactToastify.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { Container, Title, Button, Input, WalletInfo, Address, PrivateKey, KeysDiv, Strong } from '../components/SeedGenStyles'
import { Loader } from 'lucide-react'

const SeedGen = () => {
  // State for seed phrase and generated wallets
  const [seedPhrase, setSeedPhrase] = useState('');
  const [wallets, setWallets] = useState([]);
  const [walletCount, setWalletCount] = useState(5);
  const [isGenerating, setIsGenerating] = useState(true);

  // Function to generate a new random seed phrase and corresponding wallets
  const generateSeedAndWallets = async () => {
    setIsGenerating(true);
    const randomMnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setSeedPhrase(randomMnemonic);
    generateWalletsFromSeed(randomMnemonic);
    setIsGenerating(false);
  };

  // Function to generate wallets from a given seed phrase
  const generateWalletsFromSeed = async (seedPhrase) => {
    setIsGenerating(true);
    const hdNode = HDNode.fromMnemonic(seedPhrase);
    const generatedWallets = [];
    for (let i = 0; i < walletCount; i++) {
      const childNode = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
      generatedWallets.push({
        address: childNode.address,
        privateKey: childNode.privateKey,
      });
    }
    setWallets(generatedWallets);
    setIsGenerating(false);
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
      {/* Input para definir a quantidade de wallets */}
      <Input
        type="number"
        placeholder="Quantidade de wallets"
        value={walletCount}
        onChange={(e) => setWalletCount(Number(e.target.value))}
      />
      {/* Button to generate wallets from entered seed phrase */}
      <Button onClick={() => generateWalletsFromSeed(seedPhrase)}>Generate Wallets From Seed</Button>
      {/* Display generated wallets */}
      
      {isGenerating ? (
        <div className='loading-div'>
          <p>Generating wallets...</p>
          <Loader className='rotate-icon'/>
        </div>
      ) : (
        wallets.map((wallet, index) => (
          <WalletInfo key={index}>
            <strong>Wallet {index + 1}:</strong>
            <KeysDiv>
              <Address>
                <CopyToClipboard text={wallet.address} onCopy={onCopy}>
                  <div>
                    <Strong>Address:</Strong> <span style={{ cursor: 'pointer' }}>{wallet.address}</span>
                  </div>
                </CopyToClipboard>
              </Address>
              <PrivateKey>
                <CopyToClipboard text={wallet.privateKey} onCopy={onCopy}>
                  <div>
                    <Strong>Private Key:</Strong> <span style={{ cursor: 'pointer' }}>{wallet.privateKey}</span>
                  </div>
                </CopyToClipboard>
              </PrivateKey>
            </KeysDiv>
          </WalletInfo>
        ))
      )}

    </Container>
  );
};

export default SeedGen;