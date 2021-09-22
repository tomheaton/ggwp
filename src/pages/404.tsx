import styles from "../styles/Error.module.css";
import Link from "next/link";
import {NextPage} from "next";

const Error: NextPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>malformed link</h1>
            <Link href={"/"}>Return Home</Link>
        </div>
    );
}

export default Error;