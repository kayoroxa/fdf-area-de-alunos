/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState, VideoHTMLAttributes } from 'react'
// import loading from 'loading.gif'

interface IProps extends VideoHTMLAttributes<HTMLVideoElement> {
  loading?: boolean
}

export default function Video({ src, loading }: IProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current && src) {
      videoRef.current.src = src
    }
    setLoaded(false)
    if (loadingRef.current)
      loadingRef.current.src =
        loadingRef.current.src.replace(/\?.*$/, '') + `?x=${Math.random()}`
  }, [src])

  // useEffect(() => {
  //   if (loadingRef.current)
  //     loadingRef.current.src =
  //       loadingRef.current.src.replace(/\?.*$/, '') + `?x=${Math.random()}`
  // }, [loaded])

  const videoRef = useRef<HTMLVideoElement>(null)
  const loadingRef = useRef<HTMLImageElement>(null)

  return (
    <div id="videoWrapper" className="w-full relative bg-black p-video">
      {!loaded && (
        <>
          <p className="absolute bottom-[20%] z-20 left-0 right-0 m-auto w-fit text-xl">
            Carregando a aula...
          </p>
          {/* <img
            ref={loadingRef}
            src="/a-loading.gif"
            alt=""
            className="h-4 w-full min-h-full min-w-full object-cover absolute top-0"
          /> */}
        </>
      )}

      {/* <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          ref={loadingRef}
          className="h-6 bg-blue-600 rounded-full dark:bg-blue-500"
          style={{ width: '45%' }}
        ></div>
      </div> */}
      <video
        className="top-0 w-full absolute"
        ref={videoRef}
        controls
        muted
        autoPlay
        poster="/thumb.png"
        // style={{ top: 0, opacity: loaded ? 1 : 0 }}
        onPlaying={() => setLoaded(true)}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
