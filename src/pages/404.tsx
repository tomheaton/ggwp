import styles from "../styles/Error.module.css";
import {NextPage} from "next";
import Link from "next/link";

const Error: NextPage = () => {

    return (
        <div className={styles.container}>
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