
import styles from './page.module.css'
import FormComponent from './components/form'

export default function Home() {
  return (
    <main className='basepage'>
      <div className={styles.container}>
        <div className={styles.main}></div>
        <FormComponent />
      </div>
    </main>
  )
}

Home.displayName = 'Home'
