import styles from '/styles/blog_layout.module.css';
export default function Layout({ children }) {
    return <div className={styles.container}>
        {children}
    </div>;
  }
  