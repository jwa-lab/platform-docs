import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
    {
        title: "Advanced services for video game editors",
        Svg: require("../../static/img/controller.svg").default,
        description: (
            <>
                Want to build impactful video games fast without building
                complex backends first? The JWA Platform delivers cutting-edge
                services in one Open Source package so you can start building
                today.
            </>
        )
    },
    {
        title: "Blockchain enabled",
        Svg: require("../../static/img/blockchain.svg").default,
        description: (
            <>
                How do you decouple your games from their in-game economy? Move
                it to the blockchain. Leverage the JWA Platform's blockchain
                services to store and transfer value for your users via{" "}
                <a href="https://en.wikipedia.org/wiki/Non-fungible_token">
                    NFTs
                </a>
                .
            </>
        )
    },
    {
        title: "Developer Friendly",
        Svg: require("../../static/img/gear.svg").default,
        description: (
            <>
                Ever complained about difficult to use 3rd party services? The
                JWA Platform is built with a developer-first mindset. In fact,
                we're using the JWA platform too, and we like when things just
                work.
            </>
        )
    }
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title} />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
