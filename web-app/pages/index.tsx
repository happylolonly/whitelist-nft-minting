import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { NFT_CONTRACT_ADDRESS } from "../constants";

function index() {
  return (
    <div>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Hey, it is dev Cleslav 👨‍💻</h1>
          <div className={styles.description}>
            This is my learning web3 project for NTFs minting, <br /> with real
            world sale flow, <br /> there are 2 pages: <br /> <i>Whitelist</i>{" "}
            where users can join whitelist, <br /> and main page <i>Mint</i>{" "}
            where then they can mint NFTs, after sale is launched 🚀
            <br />
            (styles are ignored, I am good at them 😄)
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://testnets.opensea.io/assets/goerli/${NFT_CONTRACT_ADDRESS}/1`}
            >
              OpenSea
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/happylolonly/whitelist-nft-minting"
            >
              Code
            </a>
          </div>

          <div>
            <Link href="/whitelist">
              <button className={styles.button}>Whitelist</button>
            </Link>
            <br />
            <Link href="/mint">
              <button className={styles.button}>Mint</button>
            </Link>
          </div>
        </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  );
}

export default index;
