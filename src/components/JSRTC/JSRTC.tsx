import styles from './JSRTC.module.scss'

export const JSRTC = () => {
    return (
        <section className={styles.jsrtc}>
            <div className={styles.jsrtc__container}>
                <span className={styles.jsrtc__js}>JavaScript</span>
                <span className={styles.jsrtc__rtc}>React</span>
                <span className={styles.jsrtc__c}>Coffee</span>
            </div>
        </section>
    )
}