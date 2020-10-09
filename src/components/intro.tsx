import React, { useState, useEffect } from 'react'
import '../style/intro.scss'

export default function Intro () {

  const [show, setShow] = useState(true)

  useEffect(() => {
    setTimeout(() => setShow(false), 5000)
  }, [setShow])

  return (
    <section className="intro_section">
      
    {  <article className="start_beam_article">
        <div className="start_beam_div__bluecone" />
        <div className="start_beam_div__lightcone" />
        <div className="start_beam_div__sidecone one_cone" />
        <div className="start_beam_div__sidecone one_cone pair" />
        <div className="start_beam_div__sidecone two_cone" />
        <div className="start_beam_div__sidecone two_cone pair" />
        <div className="start_beam_div__sidecone three_cone" />
        <div className="start_beam_div__sidecone three_cone pair" />
        <div className="start_beam_div__sidecone four_cone" />
        <div className="start_beam_div__sidecone four_cone pair" />
        <div className="start_beam_div__sidecone five_cone" />
        <div className="start_beam_div__sidecone five_cone pair" />
        <div className="start_beam_div__sidecone six_cone" />
        <div className="start_beam_div__sidecone six_cone pair" />
        <div className="start_beam_div__sidecone seven_cone" />
        <div className="start_beam_div__sidecone seven_cone pair" />
        <div className="start_beam_div__sidecone eight_cone" />
        <div className="start_beam_div__sidecone eight_cone pair" />
        <div className="start_beam_div__sidecone nine_cone" />
        <div className="start_beam_div__sidecone nine_cone pair" />
        <div className="start_beam_div__sidecone ten_cone" />
        <div className="start_beam_div__sidecone ten_cone pair" />
        <div className="start_beam_div__sidecone eleven_cone" />
        <div className="start_beam_div__sidecone eleven_cone pair" />
        <div className="start_beam_div__sidecone twelve_cone" />
        <div className="start_beam_div__sidecone twelve_cone pair" />
        <div className="start_beam_div__sidecone thirteen_cone" />
        <div className="start_beam_div__sidecone thirteen_cone pair" />
      </article>}

      <article className="background_article"/>

      <article className="title_article">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Futurama_1999_logo.svg" alt="Futurama Title"/>
      </article>

    </section>
  )
}