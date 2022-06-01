import styles from "../styles/GGWP.module.css";
import {useRouter} from "next/router";
import {NextPage} from "next";
import Link from "next/link";

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
                <p>loading</p>
            </div>
        );
    }

    if (!to || !from) {
        return (
            <div className={styles.container}>
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
            <h1 className={styles.title}>
                ggwp
            </h1>

            <div>
                <p>To: {to}</p>
                <p>From: {from}</p>
            </div>

            <button onClick={copy}>
                Copy
            </button>
        </div>
    );
}

export default GGWP;
