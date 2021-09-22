import styles from "../styles/GGWP.module.css";
import {useRouter} from "next/router";
import {NextPage} from "next";

const GGWP: NextPage = () => {

    const router = useRouter();
    const {to, from} = router.query;

    const copy = () => {
        console.log("link copied to clipboard");
    }

    const returnHome = () => {
        router.push("/");
    }

    if (!router.query) {
        return (
            <div className={styles.container}>
                <p>loading</p>
            </div>
        );
    } else if (!to || !from) {
        return (
            <div className={styles.container}>
                <p>invalid url params</p>
                <button onClick={returnHome}>Return Home</button>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ggwp</h1>

            <div>
                <p>To: {to}</p>
                <p>From: {from}</p>
            </div>

            <button onClick={copy}>Copy</button>
        </div>
    );
}

export default GGWP;