// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import getConfig from "./config.js";
import * as nearAPI from "near-api-js";
import { providers } from "near-api-js";

// Initializing contract
async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || "testnet");

  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });

  // Needed to access wallet
  const walletConnection = new nearAPI.WalletConnection(near);

  const provider = new providers.JsonRpcProvider(nearConfig.nodeUrl);

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new nearAPI.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      viewMethods: ["get_response"],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ["hello_world"],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      sender: walletConnection.getAccountId(),
    }
  );

  const transactionByHash = async (txHash) => {
    return await provider.txStatus(txHash, currentUser.accountId);
  };

  return {
    contract,
    currentUser,
    nearConfig,
    walletConnection,
    transactionByHash,
  };
}

window.nearInitPromise = initContract().then(
  ({
    contract,
    currentUser,
    nearConfig,
    walletConnection,
    transactionByHash,
  }) => {
    ReactDOM.render(
      <App
        contract={contract}
        currentUser={currentUser}
        nearConfig={nearConfig}
        wallet={walletConnection}
        transactionByHash={transactionByHash}
      />,
      document.getElementById("root")
    );
  }
);
