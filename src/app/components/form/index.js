'use client'
import { useState } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PiInfoFill } from "react-icons/pi"
import styles from './form.module.css';

const FormComponent = () => {
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ subject, description, email })
  }


  {/* Função para renderizar o tooltip */}
  const renderTooltip = (message) => (props) => (
    <Tooltip id="button-tooltip" {...props} className='custom-tooltip'>
        {message}
    </Tooltip>
  )
  
  const tooltip = [
    {tooltip: 'A Ouvidoria é um canal para receber e tratar reclamações, sugestões e elogios. Ela garante que todas as questões sejam analisadas e resolvidas de forma justa, promovendo a transparência e melhoria contínua.' }
  ]


  return (
    <div className={styles.mainform}>
      <Image src={'/marca/sy_w_sm.png'} width={160} height={100} alt={'Logo young'}/>
      <form className='form' onSubmit={handleSubmit}>
        <div className='frow'>
          <h1>Ouvidoria</h1>
          <OverlayTrigger  delay={{ show: 250, hide: 400 }} overlay={renderTooltip(tooltip[0].tooltip)} placement="right" >
              <div style={{ margin: '10px', cursor: 'default' }}><PiInfoFill className="icon-large"/></div>
          </OverlayTrigger>
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
  )
}

export default FormComponent
