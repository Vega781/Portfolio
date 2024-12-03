import styles from './JSRTC.module.scss'

export const JSRTC = () => {
    return (
        <section className={styles.jsrtc}>
            <div className={styles.jsrtc__container}>
                <span className={styles.jsrtc__js}>Water</span>
                <span className={styles.jsrtc__rtc}>The best drink</span>
                <span className={styles.jsrtc__c}>In the world</span>
            </div>
        </section>
    )
}