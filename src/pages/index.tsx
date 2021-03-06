import styles from '../styles/Home.module.css';
import {NextPage} from 'next';
import Head from 'next/head';
import {useState} from "react";
import {useRouter} from "next/router";

const Index: NextPage = () => {

    const router = useRouter();

    const [to, setTo] = useState<string>("");
    const [from, setFrom] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const generate = async () => {
        if (!to || !from) {
            setError(true);
            return;
        }
        setError(false);
        await router.push({ pathname: "/ggwp", query: { to: to, from: from } });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>ggwp</title>
                <meta name="description" content="Create a simple ggwp message to share with your friends!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    ggwp
                </h1>
                <p className={styles.description}>
                    Create a simple ggwp message to share with your friends!
                </p>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <input type={"text"} placeholder={"to"} onChange={e => setTo(e.target.value)} />
                        <input type={"text"} placeholder={"from"} onChange={e => setFrom(e.target.value)} />
                        <button onClick={generate}>
                            create
                        </button>
                    </div>
                </div>

                {error && (
                    <div className={styles.error}>
                        <p>
                            please fill out all fields
                        </p>
                    </div>
                )}
            </main>

            <footer className={styles.footer}>
                <a target="_blank" href="https://www.tomheaton.dev" rel="noopener noreferrer">
                    Tom Heaton
                </a>
                <a target="_blank" href="https://www.github.com/tomheaton/ggwp" rel="noopener noreferrer">
                    View Source
                </a>
            </footer>
        </div>
    );
}

export default Index;
