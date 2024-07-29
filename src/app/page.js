'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para manipular o submit do formulário
    console.log({ subject, description, email })
  }

  return (
    <main className='basepage'>
      <div className={styles.container}>
        <div className={styles.main}>
        </div>
        <div className={styles.mainform}>
          <h1>Ouvidoria</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input
              type='text'
              className="input"
              placeholder='Assunto'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type='text'
              className="input"
              placeholder='Descrição'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className={styles.containerReturnEmail}>
              <p className='detailP'>Caso você queira se identificar e receber um retorno individualizado, favor informar seu e-mail abaixo.</p>
              <div className={styles.emailContainer}>
                <input
                  type='text'
                  className="input"
                  placeholder='E-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='bttS' type="submit">Validar</button>
              </div>
            </div>
            <div className="submitContainer">
              <button className='bttP' type='submit'>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
