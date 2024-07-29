'use client'
import { useState, useEffect } from 'react'
import { Tooltip } from 'bootstrap'
import Image from 'next/image'
import styles from './page.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { PiInfoFill } from "react-icons/pi";

export default function Home() {
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ subject, description, email })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl))
    }
  }, [])

  return (
    <main className='basepage'>
      <div className={styles.container}>
        <div className={styles.main}></div>
        <div className={styles.mainform}>
          <Image src={'/marca/sy_w_sm.png'} width={160} height={100} alt={'Logo young'}/>
          <form className='form' onSubmit={handleSubmit}>
            <div className='frow'>
              <h1>Ouvidoria</h1>
              <PiInfoFill className="icon-large" data-bs-toggle="tooltip" data-bs-placement="top" title="A Ouvidoria é um canal para receber e tratar reclamações, sugestões e elogios. Ela garante que todas as questões sejam analisadas e resolvidas de forma justa, promovendo a transparência e melhoria contínua."/>
            </div>
            <input
              type='text'
              className="input"
              placeholder='Assunto'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <input
              type='text'
              className="input"
              placeholder='Descrição'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className={styles.containerReturnEmail}>
              <p className='detailP'>Caso você queira se identificar e receber um retorno individualizado, favor informar seu e-mail abaixo.</p>
              <div className={styles.emailContainer}>
                <input
                  type='email'
                  className="input"
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='bttS' onClick={() => {alert('🌐 Feature 🚀')}}>Validar</button>
              </div>
            </div>
            <div className="submitContainer">
              <button className='bttP' type='submit'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

Home.displayName = 'Home'
