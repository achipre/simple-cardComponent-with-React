import { useState } from "react"

export const Card = ({ children, twitterId, inicialIsFollowing }) => {

  const [isFollowing, setIsFollower]  =  useState(inicialIsFollowing)
  const toggleFollower = () => {
    setIsFollower(!isFollowing)
  }
  const texto = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
    ? 'card-button is-follow'
    : 'card-button'
  const imageSrc = `https://unavatar.io/${twitterId}`
  return (
    <article className='card'>
      <header className='card-header'>
        <img className='card-img' src={imageSrc} alt={children} />
      </header>
      <section className='card-info'>
        <h1 className='card-name'>{children}</h1>
        <p className='card-twitterId'>@{twitterId}</p>
      </section>
      <aside>
        <button className={buttonClassName} onClick={toggleFollower}>
          <span className="card-follow">{texto}</span>
          <span className="card-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  )
}
