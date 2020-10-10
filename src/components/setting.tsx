import React, { useState, useEffect, Fragment } from 'react'
import '../style/setting.scss'

export default function Setting (props: any) {

  const { ship, splash } = props

  const [show, setShow] = useState(true)
  const [image, setImage] = useState(selectImage(images)[0])
  const [index, setIndex] = useState("")

  useEffect(() => {
    setTimeout(() => setShow(false), 6000)
  }, [setShow])

  const SplashImage = () => {
    useEffect(() => {
      let interval: any;

      const handleImages = () => {
        setImage(selectImage(images)[0])
        setIndex(`${image[1]}`)
      }

      if (splash) {
        interval = setInterval(() => handleImages(), 5000)
      }

      return () => clearInterval(interval)
    })

    return (
      <article key={index} className="article_image">
        <img src={`${image}`} alt="Futurama splash"/>
      </article>
    )
  }

  return (
    <Fragment>
      
      {show && <article className="start_beam_article">
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

      {ship && <article className="planet_express_ship_article"/>}

      <article className="article_background">
        <div className="star layer1"></div>
        <div className="star layer2"></div>
      </article>

      {splash && <SplashImage/>}

      <article className="article_title">
        <img className={splash ? "article_title__img small":"article_title__img"} src="https://upload.wikimedia.org/wikipedia/commons/8/84/Futurama_1999_logo.svg" alt="Futurama Title"/>
      </article>

    </Fragment>
  )
}


const selectImage = (images: any) => {
  const imageNum = Math.floor(Math.random() * Math.floor(images.length))
  return [images[imageNum], imageNum]
}

const images = [
  "/images/splash/futurama_splash1.jpg",
  "/images/splash/futurama_splash2.jpg",
  "/images/splash/futurama_splash3.png",
  "/images/splash/futurama_1.jpg",
  "/images/splash/futurama_1.png",
  "/images/splash/futurama_2.jpg",
  "/images/splash/futurama_2.png",
  "/images/splash/futurama_3.jpg",
  "/images/splash/futurama_3.png",
  "/images/splash/futurama_4.jpg",
  "/images/splash/futurama_4.png",
  "/images/splash/futurama_5.jpg",
  "/images/splash/futurama_5.png",
  "/images/splash/futurama_6.jpg",
  "/images/splash/futurama_6.png",
  "/images/splash/futurama_7.jpg",
  "/images/splash/futurama_7.png",
  "/images/splash/futurama_8.jpg",
  "/images/splash/futurama_8.png",
  "/images/splash/futurama_9.jpg",
  "/images/splash/futurama_9.png",
  "/images/splash/futurama_10.jpg",
  "/images/splash/futurama_10.png",
  "/images/splash/futurama_11.jpg",
  "/images/splash/futurama_11.png",
  "/images/splash/futurama_12.jpg",
  "/images/splash/futurama_12.png",
  "/images/splash/futurama_13.jpg",
  "/images/splash/futurama_13.png",
  "/images/splash/futurama_14.jpg",
  "/images/splash/futurama_14.png",
  "/images/splash/futurama_15.jpg",
  "/images/splash/futurama_15.png",
  "/images/splash/futurama_16.jpg",
  "/images/splash/futurama_17.jpg",
  "/images/splash/futurama_18.jpg",
  "/images/splash/futurama_19.jpg",
  "/images/splash/futurama_20.jpg",
  "/images/splash/futurama_21.jpg",
  "/images/splash/futurama_22.jpg",
  "/images/splash/futurama_23.jpg",
  "/images/splash/futurama_24.jpg",
  "/images/splash/futurama_25.jpg",
  "/images/splash/futurama_26.jpg",
  "/images/splash/futurama_27.jpg",
  "/images/splash/futurama_28.jpg",
  "/images/splash/futurama_29.jpg",
  "/images/splash/futurama_30.jpg",
]