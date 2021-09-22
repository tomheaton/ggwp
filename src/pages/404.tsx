import styles from "../styles/Error.module.css";
import Link from "next/link";

const Error = () => {
    return (
        <div>
            <h1 className={styles.title}>malformed link</h1>
            <Link href={"/"}>Return Home</Link>
        </div>
    );
}

export default Error;