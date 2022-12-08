import Head from 'next/head'
import {useEffect, useState} from "react"
import styles from '../styles/Home.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BigNumber, providers, utils, } from "ethers";
import { useProvider , useSigner, useConnect, useAccount, useContract} from 'wagmi'
import{goerli} from "wagmi/chains"
import {DEX_ABI, DEX_ADDRESS, TOKEN_ABI, TOKEN_ADDRESS} from "../constants"

import { addLiquidity, calculateST } from "../DEX-components/addLiquidity";
import { getSTBalance, getEtherBalance, getLPTokensBalance, getReserveOfST } from "../DEX-components/getAmounts";
import { getTokensAfterRemove, removeLiquidity } from "../DEX-components/removeLiquidity";
import { swapTokens, getAmountOfTokensReceivedFromSwap } from "../DEX-components/swap";

export default function Home() {

  const[liquidityTab, setLiquidityTab] = useState(false);

  const { connector: isConnected, address} = useAccount();
  const { data: signer } = useSigner({chainId:goerli.id});
  const provider = useProvider();


  const zero = BigNumber.from(0);
    /** Variables to keep track of amount */
  // `ethBalance` keeps track of the amount of Eth held by the user's account
  const [ethBalance, setEtherBalance] = useState(zero);
  // `reservedST` keeps track of the Stone tokens Reserve balance in the Exchange contract
  const [reservedST, setReservedST] = useState(zero);
  // Keeps track of the ether balance in the contract
  const [etherBalanceContract, setEtherBalanceContract] = useState(zero);
  // stBalance is the amount of `ST` tokens help by the users account
  const [stBalance, setSTBalance] = useState(zero);
  // `lpBalance` is the amount of LP tokens held by the users account
  const [lpBalance, setLPBalance] = useState(zero);
  /** Variables to keep track of liquidity to be added or removed */
  // addEther is the amount of Ether that the user wants to add to the liquidity
  const [addEther, setAddEther] = useState(zero);
  // addSTTokens keeps track of the amount of ST tokens that the user wants to add to the liquidity
  // in case when there is no initial liquidity and after liquidity gets added it keeps track of the
  // ST tokens that the user can add given a certain amount of ether
  const [addSTTokens, setAddSTTokens] = useState(zero);
  // removeEther is the amount of `Ether` that would be sent back to the user based on a certain number of `LP` tokens
  const [removeEther, setRemoveEther] = useState(zero);
  // removeST is the amount of Stone tokens that would be sent back to the user based on a certain number of `LP` tokens
  // that he wants to withdraw
  const [removeST, setRemoveST] = useState(zero);
  // amount of LP tokens that the user wants to remove from liquidity
  const [removeLPTokens, setRemoveLPTokens] = useState("0");
  /** Variables to keep track of swap functionality */
  // Amount that the user wants to swap
  const [swapAmount, setSwapAmount] = useState("");
  // This keeps track of the number of tokens that the user would receive after a swap completes
  const [tokenToBeReceivedAfterSwap, settokenToBeReceivedAfterSwap] = useState(zero);
  // Keeps track of whether  `Eth` or `Stone` token is selected. If `Eth` is selected it means that the user
  // wants to swap some `Eth` for some `Stone` tokens and vice versa if `Eth` is not selected
  const [ethSelected, setEthSelected] = useState(true);

  // const TokenContract = useContract({
  //   addressOrName: TOKEN_ADDRESS,
  //   contractInterface: TOKEN_ABI,
  //   signerOrProvider: signer,
  // });

  // const ExchangeContract = useContract({
  //   addressOrName: DEX_ADDRESS,
  //   contractInterface: DEX_ABI,
  //   signerOrProvider: signer,
  // });


  // const getProviderOrSigner = async (needSigner = false) => {
  //   // Connect to Metamask
  //   // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
  //   const provider = await web3ModalRef.current.connect();
  //   const web3Provider = new providers.Web3Provider(provider);
  //   if (needSigner) {
  //     const signer = web3Provider.getSigner();
  //     return signer;
  //   }
  //   return web3Provider;
  // };

  const getAmounts = async () => {
    try {
      
      // const provider = await getProviderOrSigner(false);
      // const signer = await getProviderOrSigner(true);
      // const address = await signer.getAddress();

      console.log(address);
      // get the amount of eth in the user's account
      const _ethBalance = await getEtherBalance(provider, address);
      console.log(_ethBalance)
      // const _ethBalance = await getUserETH(provider, address);
      // get the amount of `Stone` tokens held by the user
      const _stBalance = await getSTBalance(provider, address);
      // get the amount of `Stone` LP tokens held by the user
      const _lpBalance = await getLPTokensBalance(provider, address);
      // gets the amount of `ST` tokens that are present in the reserve of the `Exchange contract`
      const _reservedST = await getReserveOfST(provider);
      // Get the ether reserves in the contract
      // const _ethBalanceContract = await getContractETH(provider);
      const _ethBalanceContract = await getEtherBalance(provider, null, true);
      setEtherBalance(_ethBalance);
      setSTBalance(_stBalance);
      setLPBalance(_lpBalance);
      setReservedST(_reservedST);
      setEtherBalanceContract(_ethBalanceContract);
    } catch (err) {
      console.error(err);
    }
  };

  const _swapTokens = async () => {
    try {
      // Convert the amount entered by the user to a BigNumber using the `parseEther` library from `ethers.js`
      const swapAmountWei = utils.parseEther(swapAmount);
      // Check if the user entered zero
      // We are here using the `eq` method from BigNumber class in `ethers.js`
      if (!swapAmountWei.eq(zero)) {
        // Call the swapTokens function from the `utils` folder
        await swapTokens(
          signer,
          swapAmountWei,
          tokenToBeReceivedAfterSwap,
          ethSelected
        );
        // Get all the updated amounts after the swap
        await getAmounts();
        setSwapAmount("");
      }
    } catch (err) {
      console.error(err);
      setSwapAmount("");
    }
  };

  const _getAmountOfTokensReceivedFromSwap = async (_swapAmount) => {
    try {
      // Convert the amount entered by the user to a BigNumber using the `parseEther` library from `ethers.js`
      const _swapAmountWEI = utils.parseEther(_swapAmount.toString());
      // Check if the user entered zero
      // We are here using the `eq` method from BigNumber class in `ethers.js`
      if (!_swapAmountWEI.eq(zero)) {
        // Get the amount of ether in the contract
        const _ethBalance = await getEtherBalance(provider, null, true);
        // Call the `getAmountOfTokensReceivedFromSwap` from the utils folder
        const amountOfTokens = await getAmountOfTokensReceivedFromSwap(
          _swapAmountWEI,
          provider,
          ethSelected,
          _ethBalance,
          reservedST
        );
        settokenToBeReceivedAfterSwap(amountOfTokens);
      } else {
        settokenToBeReceivedAfterSwap(zero);
      }
    } catch (err) {
      console.error(err);
    }
  };

    /**
   * _addLiquidity helps add liquidity to the exchange,
   * If the user is adding initial liquidity, user decides the ether and CD tokens he wants to add
   * to the exchange. If he is adding the liquidity after the initial liquidity has already been added
   * then we calculate the crypto dev tokens he can add, given the Eth he wants to add by keeping the ratios
   * constant
   */
     const _addLiquidity = async () => {
      try {
        // Convert the ether amount entered by the user to Bignumber
        const addEtherWei = utils.parseEther(addEther.toString());
        // Check if the values are zero
        if (!addSTTokens.eq(zero) && !addEtherWei.eq(zero)) {
          // call the addLiquidity function from the utils folder
          await addLiquidity(signer, addSTTokens, addEtherWei);
          // Reinitialize the CD tokens
          setAddSTTokens(zero);
          // Get amounts for all values after the liquidity has been added
          await getAmounts();
        } else {
          setAddSTTokens(zero);
        }
      } catch (err) {
        console.error(err);
        setAddSTTokens(zero);
      }
    };

    const _removeLiquidity = async () => {
      try {
        // Convert the LP tokens entered by the user to a BigNumber
        const removeLPTokensWei = utils.parseEther(removeLPTokens);
        // Call the removeLiquidity function from the `utils` folder
        await removeLiquidity(signer, removeLPTokensWei);
        await getAmounts();
        setRemoveST(zero);
        setRemoveEther(zero);
      } catch (err) {
        console.error(err);
        setRemoveST(zero);
        setRemoveEther(zero);
      }
    };

      /**
   * _getTokensAfterRemove: Calculates the amount of `Ether` and `CD` tokens
   * that would be returned back to user after he removes `removeLPTokenWei` amount
   * of LP tokens from the contract
   */
  const _getTokensAfterRemove = async (_removeLPTokens) => {
    try {
      // Convert the LP tokens entered by the user to a BigNumber
      const removeLPTokenWei = utils.parseEther(_removeLPTokens);
      // Get the Eth reserves within the exchange contract
      const _ethBalance = await getEtherBalance(provider, null, true);
      // get the crypto dev token reserves from the contract
      const stoneTokenReserve = await getReserveOfST(provider);
      // call the getTokensAfterRemove from the utils folder
      const { _removeEther, _removeCD } = await getTokensAfterRemove(
        provider,
        removeLPTokenWei,
        _ethBalance,
        stoneTokenReserve
      );
      setRemoveEther(_removeEther);
      setRemoveST(_removeCD);
    } catch (err) {
      console.error(err);
    }
  };

    useEffect(() => {
      if (isConnected) {
        getAmounts();
      }
  }, [isConnected]);



  const render = () =>{
    if(liquidityTab){
      return(
        <div>
          <div className={styles.liquidity}>
            <h5>You have {utils.formatEther(stBalance)} Stone Tokens</h5>
            <h5>You have {utils.formatEther(ethBalance)} Ether</h5>
            <h5>You have {utils.formatEther(lpBalance)} Stone LP Tokens</h5>
          </div>

          <div>
            {/* If reserved ST is zero, render the state for liquidity zero where we ask the user
            how much initial liquidity he wants to add else just render the state where liquidity is not zero and
            we calculate based on the `Eth` amount specified by the user how much `ST` tokens can be added */}
            {utils.parseEther(reservedST.toString()).eq(zero) ? (
              <div className={styles.add}>
                <input
                  type="number"
                  placeholder="Amount of Ether"
                  onChange={(e) => setAddEther(e.target.value || "0")}
                  className={styles.input}
                />
                <input
                  type="number"
                  placeholder="Amount of Stone tokens"
                  onChange={(e) =>
                    setAddSTTokens(
                      BigNumber.from(utils.parseEther(e.target.value || "0"))
                    )
                  }
                  className={styles.input}
                />
                <button className={styles.button1} onClick={_addLiquidity}>
                  Add
                </button>
              </div>
            ) : (
              <div>
                <input
                  type="number"
                  placeholder="Amount of Ether"
                  onChange={async (e) => {
                    setAddEther(e.target.value || "0");
                    // calculate the number of ST tokens that
                    // can be added given  `e.target.value` amount of Eth
                    const _addSTTokens = await calculateST(
                      e.target.value || "0",
                      etherBalanceContract,
                      reservedST
                    );
                    setAddSTTokens(_addSTTokens);
                  }}
                  className={styles.input}
                />
                
                <div className={styles.inputDiv}>
                  {/* Convert the BigNumber to string using the formatEther function from ethers.js */}
                  {`You will need ${utils.formatEther(addSTTokens)} Stone
                  Tokens`}
                </div>
                <button className={styles.button1} onClick={_addLiquidity}>
                  Add
                </button>
              </div>
            )}

            {/* REMOVE LIQUIDITY */}


            <div className={styles.remove}>
              <input
                type="number"
                placeholder="Amount of LP Tokens"
                onChange={async (e) => {
                  setRemoveLPTokens(e.target.value || "0");
                  // Calculate the amount of Ether and ST tokens that the user would receive
                  // After he removes `e.target.value` amount of `LP` tokens
                  await _getTokensAfterRemove(e.target.value || "0");
                }}
                className={styles.input}
              />
              <div className={styles.inputDiv}>
                {/* Convert the BigNumber to string using the formatEther function from ethers.js */}
                {`You will get ${utils.formatEther(removeST)} Crypto
              Dev Tokens and ${utils.formatEther(removeEther)} Eth`}
              </div>
              <button className={styles.button1} onClick={_removeLiquidity}>
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <input
            type="number"
            placeholder="Amount"
            onChange={async (e) => {
              setSwapAmount(e.target.value || "");
              // Calculate the amount of tokens user would receive after the swap
              await _getAmountOfTokensReceivedFromSwap(e.target.value || "0");
            }}
            className={styles.input}
            value={swapAmount}
          />
          <select
            className={styles.select}
            name="dropdown"
            id="dropdown"
            onChange={async () => {
              setEthSelected(!ethSelected);
              // Initialize the values back to zero
              await _getAmountOfTokensReceivedFromSwap(0);
              setSwapAmount("");
            }}
          >
            <option value="eth">Ethereum</option>
            <option value="stoneToken">Stone Token</option>
          </select>
          <br />
          <div className={styles.inputDiv}>
            {/* Convert the BigNumber to string using the formatEther function from ethers.js */}
            {ethSelected
              ? `You will get ${utils.formatEther(
                  tokenToBeReceivedAfterSwap
                )} Crypto Dev Tokens`
              : `You will get ${utils.formatEther(
                  tokenToBeReceivedAfterSwap
                )} Eth`}
          </div>
          <button className={styles.button1} onClick={_swapTokens}>
            Swap
          </button>
        </div>
      )
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ConnectButton/>
      </div>
      {isConnected ? 
      <div className={styles.main}>
        <div>
          <button onClick={() => {setLiquidityTab(false)}}>Swap</button>
          <button onClick={() => {setLiquidityTab(true)}}>Liquidity</button>
        </div>
        {render()}
      </div> : <h3>Connect wallet</h3>}
    </div>
  )
}
