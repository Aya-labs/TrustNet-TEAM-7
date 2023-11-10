import Link from "next/link";
import React from "react";

const Hero = () => {
    return(
        <main>
            <div className="" >
            <h1 className="">Trustnet</h1>
            <body className="">
                A decentralized peer-to-peer insurance platform built on blockchain technology that 
                empowers community members to come together, pool their funds, and create self-insurance pools. 
                It leverages the transparency and security of blockchain to validate claims through a consensus 
                mechanism and automatically trigger payouts via smart contracts. By distributing financial risks 
                among its members, it provides a cost-effective and community-driven solution to protect against 
                unforeseen events. This product will allow users to pay for their premium using cryptocurrencies.
            </body>

            <Link>
                <button color="">
                    Launch Dapp
                </button>
            </Link>
        </div>
        </main>
    )
};

export default Hero;