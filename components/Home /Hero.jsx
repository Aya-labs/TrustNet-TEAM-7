import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return(
        <main>
            <div className="" >
            <Navbar />
            <body className="">
                A decentralized peer-to-peer insurance platform built on blockchain technology that 
                empowers community members to come together, pool their funds, and create self-insurance pools. 
                It leverages the transparency and security of blockchain to validate claims through a consensus 
                mechanism and automatically trigger payouts via smart contracts. By distributing financial risks 
                among its members, it provides a cost-effective and community-driven solution to protect against 
                unforeseen events. This product will allow users to pay for their premium using cryptocurrencies.
            </body>
        </div>
        </main>
    )
};

export default Hero;