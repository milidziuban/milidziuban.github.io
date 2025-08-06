'use client'

import { useEffect } from 'react'

export default function TikTokEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex justify-center my-12">
       
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@proyectauxui/video/7531458793549352197"
        data-video-id="7531458793549352197"
        style={{ maxWidth: 605, minWidth: 325 }}
        >
        <section>
          <a
            target="_blank"
            title="@proyectauxui"
            href="https://www.tiktok.com/@proyectauxui?refer=embed"
          >
            @proyectauxui
          </a>{' '}
          Te muestro mi proceso de diseño UX/UI.
          <a
            target="_blank"
            title="#uxui"
            href="https://www.tiktok.com/tag/uxui?refer=embed"
          >
            #uxui
          </a>{' '}
          <a
            target="_blank"
            title="#figma"
            href="https://www.tiktok.com/tag/figma?refer=embed"
          >
            #figma
          </a>
        </section>
      </blockquote>
    </div>
  )
}
