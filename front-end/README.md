This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1) Create environment file

Copy `env.example` to `.env` and set values:

```bash
cp env.example .env
```

Required vars:

```bash
NEXT_PUBLIC_STACKS_NETWORK=devnet # or testnet/mainnet
NEXT_PUBLIC_PLATFORM_HIRO_API_KEY=your-api-key
NEXT_PUBLIC_CONTRACT_DEPLOYER_DEVNET_ADDRESS=
NEXT_PUBLIC_CONTRACT_DEPLOYER_TESTNET_ADDRESS=
NEXT_PUBLIC_CONTRACT_DEPLOYER_MAINNET_ADDRESS=
```

2) Install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Notes on Contract Deployment

- The app reads the contract at `<DEPLOYER_ADDRESS>.fundraising` based on `NEXT_PUBLIC_STACKS_NETWORK`.
- To be contract owner, deploy the `fundraising` contract from your wallet address for that network.
- After deployment, initialize the campaign from the admin panel in the UI.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

When deploying, set the same env variables in your Vercel project.
