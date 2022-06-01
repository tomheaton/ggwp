import styles from "../styles/GGWP.module.css";
import {useRouter} from "next/router";
import {NextPage} from "next";
import Link from "next/link";
import Head from "next/head";

const GGWP: NextPage = () => {

    const router = useRouter();

    const {to, from} = router.query;

    const copy = async () => {
        await navigator.clipboard.writeText(window.location.href);
        console.log(`link: ${window.location.href}`);
    }

    if (!router.query) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>loading... | ggwp</title>
                    <meta name="description" content="Create a simple ggwp message to share with your friends!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <p>loading</p>
            </div>
        );
    }

    if (!to || !from) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>invalid url params | ggwp</title>
                    <meta name="description" content="Create a simple ggwp message to share with your friends!"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <p>
                    invalid url params
                </p>
                <Link href={"/"}>
                    <button>
                        Return Home
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>To {to}, From {from} | ggwp</title>
                <meta name="description" content="Create a simple ggwp message to share with your friends!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={styles.title}>
                ggwp
            </h1>
            <br/>
            <div>
                <p>To: {to}</p>
                <p>From: {from}</p>
            </div>
            <br/>
            <button onClick={copy}>
                Copy
            </button>
        </div>
    );
}

export default GGWP;
