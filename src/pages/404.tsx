import styles from "../styles/Error.module.css";
import {NextPage} from "next";
import Link from "next/link";
import Head from "next/head";

const Error: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Error | ggwp</title>
                <meta name="description" content="Create a simple ggwp message to share with your friends!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={styles.title}>
                malformed link
            </h1>
            <Link href={"/"}>
                <a>
                    Return Home
                </a>
            </Link>
        </div>
    );
}

export default Error;