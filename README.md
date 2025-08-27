# 🌊 Clean Oceans Initiative

<div align="center">

![Clean Oceans Initiative Banner](https://i.hizliresim.com/823ikpv.jpg)

_A blockchain-powered platform for transparent ocean cleanup funding and marine conservation_

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/your-username/clean-oceans-initiative)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Stacks](https://img.shields.io/badge/Built%20on-Stacks-5546FF.svg)](https://stacks.co)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/your-username/clean-oceans-initiative)

</div>

---

## 🐋 About The Project

Clean Oceans Initiative is a revolutionary blockchain-powered fundraising platform built on the Stacks network that brings transparency and accountability to ocean cleanup efforts. Our platform enables donors to track exactly how their contributions are used, monitor real-time cleanup progress, and see the direct impact on marine ecosystem recovery.

### 🎯 Why This Matters

Every year, **8 million tons** of plastic waste enter our oceans, threatening marine life and ecosystems. Traditional donation platforms lack transparency, making it difficult for donors to see the real impact of their contributions. Our blockchain-based solution provides:

- **100% Transparency**: Every transaction recorded on the blockchain
- **Real-time Tracking**: Live updates on cleanup progress and fund utilization
- **Direct Impact Metrics**: See exactly how many tons of plastic removed and marine animals saved
- **Community Driven**: Decentralized governance for cleanup location selection

---

## ✨ Key Features

### 🏦 **Transparent Fundraising**

- Blockchain-based donation tracking using STX tokens
- Smart contract escrow system ensuring funds reach intended projects
- Real-time fund allocation dashboard
- Donor reward system with NFT certificates

### 📊 **Impact Monitoring**

- Live pollution level tracker across cleanup sites
- Marine life recovery statistics
- Interactive cleanup progress maps
- Before/after cleanup photo galleries

### 🤝 **Community Engagement**

- Volunteer activity coordination and tracking
- Community voting on cleanup priorities
- Educational resources and awareness campaigns
- Social impact sharing tools

### 🔒 **Security & Trust**

- Audited Clarity smart contracts
- Multi-signature wallet integration
- Automated fund release based on milestone completion
- Transparent governance mechanisms

---

## 🛠 Technology Stack

### **Blockchain & Smart Contracts**

- **Stacks Blockchain** - Layer 1 blockchain enabling smart contracts for Bitcoin
- **Clarity** - Smart contract language for secure and predictable contracts
- **Stacks.js** - JavaScript library for Stacks blockchain interaction

### **Frontend**

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth UI transitions

### **Web3 Integration**

- **Hiro Wallet** - Stacks wallet integration
- **Stacks Connect** - Wallet connection and transaction signing
- **Stacks API** - Blockchain data querying

### **Additional Tools**

- **Recharts** - Data visualization for impact metrics
- **Mapbox** - Interactive cleanup site mapping
- **ImageFX** - AI-generated ocean cleanup imagery
- **Vercel** - Deployment and hosting platform

---

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
Clarinet (for smart contract development)
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/clean-oceans-initiative.git
   cd clean-oceans-initiative
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_NETWORK=testnet
   NEXT_PUBLIC_APP_NAME="Clean Oceans Initiative"
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### 🔧 Smart Contract Setup

1. **Install Clarinet**

   ```bash
   curl -L https://github.com/hirosystems/clarinet/releases/latest/download/clarinet-linux-x64.tar.gz | tar xz
   sudo mv clarinet /usr/local/bin
   ```

2. **Initialize contracts**

   ```bash
   cd contracts
   clarinet integrate
   ```

3. **Run contract tests**
   ```bash
   clarinet test
   ```

---

## 📖 Usage

### For Donors 💰

1. **Connect Your Wallet**

   - Click "Connect Wallet" and select Hiro Wallet
   - Ensure you have STX tokens for donations

2. **Make a Donation**

   ```javascript
   // Example donation transaction
   const donationAmount = 100; // STX amount
   const recipient = "ocean-cleanup-campaign-001";

   await openContractCall({
     contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
     contractName: "ocean-cleanup-fundraiser",
     functionName: "donate",
     functionArgs: [uintCV(donationAmount), stringAsciiCV(recipient)],
   });
   ```

3. **Track Your Impact**
   - View real-time cleanup progress
   - See marine life saved counter
   - Download impact certificates

### For Cleanup Organizations 🏢

1. **Register Your Project**

   - Submit cleanup proposal through the platform
   - Provide detailed budget breakdown
   - Set measurable impact goals

2. **Receive Funds**
   - Funds released automatically upon milestone completion
   - Transparent tracking of all expenditures
   - Community validation of progress reports

### For Volunteers 🌟

1. **Find Cleanup Events**

   - Browse interactive map of cleanup locations
   - Register for volunteer activities
   - Track your volunteer hours and impact

2. **Contribute Data**
   - Upload before/after photos
   - Log pollution levels and cleanup metrics
   - Participate in marine life monitoring

---

## 📋 Smart Contract Documentation

### `ocean-cleanup-fundraiser.clar`

Main fundraising contract handling donations and fund distribution.

**Key Functions:**

```clarity
;; Make a donation to a specific cleanup campaign
(define-public (donate (amount uint) (campaign-id (string-ascii 50))))

;; Withdraw funds for verified cleanup activities
(define-public (withdraw-funds (campaign-id (string-ascii 50)) (amount uint)))

;; Update cleanup progress and metrics
(define-public (update-progress (campaign-id (string-ascii 50)) (plastic-removed uint) (animals-saved uint)))

;; Get campaign statistics
(define-read-only (get-campaign-stats (campaign-id (string-ascii 50))))
```

### `impact-nft.clar`

NFT contract for donor certificates and achievement badges.

**Key Functions:**

```clarity
;; Mint impact certificate for donors
(define-public (mint-certificate (recipient principal) (donation-amount uint)))

;; Mint achievement badge for volunteers
(define-public (mint-achievement (recipient principal) (achievement-type (string-ascii 50))))
```

### `governance.clar`

Decentralized governance for cleanup location voting.

**Key Functions:**

```clarity
;; Submit cleanup location proposal
(define-public (propose-location (location (string-ascii 100)) (description (string-ascii 500))))

;; Vote on cleanup proposals
(define-public (vote (proposal-id uint) (support bool)))
```

---

## 🚀 Deployment

### Testnet Deployment

1. **Deploy Smart Contracts**

   ```bash
   clarinet deployments generate --devnet
   clarinet deployments apply -p testnet
   ```

2. **Deploy Frontend**

   ```bash
   npm run build
   vercel --prod
   ```

3. **Update Contract Addresses**
   Update `src/constants/contracts.ts` with deployed addresses:
   ```typescript
   export const CONTRACTS = {
     FUNDRAISER:
       "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.ocean-cleanup-fundraiser",
     IMPACT_NFT: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.impact-nft",
     GOVERNANCE: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.governance",
   };
   ```

### Mainnet Deployment

1. **Security Audit**

   - Complete smart contract security audit
   - Fix any identified vulnerabilities
   - Get community review and approval

2. **Deploy to Mainnet**

   ```bash
   clarinet deployments apply -p mainnet
   ```

3. **Monitoring Setup**
   - Configure blockchain monitoring
   - Set up alerting for contract events
   - Monitor fund flows and impact metrics

---

## 🧪 Testing

### Run All Tests

```bash
# Smart contract tests
npm run test:contracts

# Frontend unit tests
npm run test

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e
```

### Smart Contract Testing

```bash
cd contracts
clarinet test

# Run specific test file
clarinet test tests/fundraiser_test.ts
```

### Test Coverage

Generate test coverage reports:

```bash
npm run test:coverage
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Process

1. **Fork the Repository**

   ```bash
   git clone https://github.com/your-username/clean-oceans-initiative.git
   ```

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**

   - Write clean, documented code
   - Add tests for new functionality
   - Follow our coding standards

4. **Test Your Changes**

   ```bash
   npm run test
   npm run lint
   ```

5. **Submit a Pull Request**
   - Provide clear description of changes
   - Reference related issues
   - Include screenshots for UI changes

### 📋 Contribution Guidelines

- **Code Style**: Follow TypeScript and Clarity best practices
- **Commits**: Use conventional commit messages
- **Documentation**: Update README and inline documentation
- **Testing**: Maintain or improve test coverage

### 🐛 Bug Reports

Found a bug? Please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### 💡 Feature Requests

Have an idea? We'd love to hear it! Please include:

- Use case description
- Proposed solution
- Alternative approaches considered

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Clean Oceans Initiative

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🆘 Support

Need help? Here are the best ways to get support:

### 📚 Resources

- [Stacks Documentation](https://docs.stacks.co/)
- [Clarity Language Reference](https://docs.stacks.co/clarity)
- [Hiro Platform Templates](https://github.com/hirosystems/platform-templates)

### 🔍 Troubleshooting

**Common Issues:**

1. **Wallet Connection Problems**

   ```bash
   # Clear browser cache and cookies
   # Ensure Hiro Wallet extension is updated
   ```

2. **Transaction Failures**

   ```bash
   # Check STX balance for fees
   # Verify network selection (testnet/mainnet)
   ```

3. **Contract Interaction Errors**
   ```bash
   # Verify contract addresses in constants
   # Check function parameters and types
   ```

---

## 🙏 Acknowledgments

Special thanks to the amazing Stacks ecosystem and contributors:

- **[Stacks Foundation](https://stacks.org/)** - For building Bitcoin's smart contract layer
- **[Hiro Systems](https://www.hiro.so/)** - For developer tools and platform templates
- **[Ocean Conservation Organizations]()** - For their tireless work protecting our oceans
- **[Open Source Community]()** - For inspiration and code contributions

### 🌟 Built With Love For The Ocean

This project was built with passion for ocean conservation and belief in blockchain technology's power to create positive environmental impact.

---

<div align="center">

**[⬆ Back to Top](#-clean-oceans-initiative)**

Made with 💙 for our oceans | Powered by ⚡ Stacks Blockchain

_"The sea, once it casts its spell, holds one in its net of wonder forever."_ - Jacques Cousteau

</div>
