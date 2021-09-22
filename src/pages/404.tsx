import styles from "../styles/Error.module.css";
import {NextPage} from "next";
import {useRouter} from "next/router";

const Error: NextPage = () => {

    const router = useRouter();

    const returnHome = () => {
        router.push("/");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>malformed link</h1>
            <button onClick={returnHome}>Return Home</button>
        </div>
    );
}

export default Error;