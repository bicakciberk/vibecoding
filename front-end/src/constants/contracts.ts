import { devnetWallets } from "@/lib/devnet-wallet-context";

const CONTRACT_NAME = "fundraising";

// Default/fallback deployer address (will be overridden by env per network when available)
const DEPLOYER_ADDRESS = "STF5BZ5KP9BBJG3HTCH4QRNS0N1JMMAKDDN02G2W";

function getDeployerAddressByNetwork(): string {
  const network = process.env.NEXT_PUBLIC_STACKS_NETWORK || "devnet";
  if (network === "mainnet") {
    return (
      process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_MAINNET_ADDRESS || DEPLOYER_ADDRESS
    );
  }
  if (network === "testnet") {
    return (
      process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_TESTNET_ADDRESS || DEPLOYER_ADDRESS
    );
  }
  // devnet (default)
  return (
    process.env.NEXT_PUBLIC_CONTRACT_DEPLOYER_DEVNET_ADDRESS || DEPLOYER_ADDRESS
  );
}

const RESOLVED_DEPLOYER_ADDRESS = getDeployerAddressByNetwork();

export const FUNDRAISING_CONTRACT = {
  address: RESOLVED_DEPLOYER_ADDRESS,
  name: CONTRACT_NAME,
} as const;

const sbtcMainnetAddress = "SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4";

export const SBTC_CONTRACT = {
  address:
    process.env.NEXT_PUBLIC_STACKS_NETWORK === "mainnet"
      ? sbtcMainnetAddress
      : RESOLVED_DEPLOYER_ADDRESS,
  name: "sbtc-token",
} as const;

export const getContractIdentifier = () => {
  return `${FUNDRAISING_CONTRACT.address}.${FUNDRAISING_CONTRACT.name}`;
};
