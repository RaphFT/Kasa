import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import { Tag } from '../components/tag'
import { RatingStars } from '../components/rating-stars'
import { Dropdown } from '../components/dropdown'
import { Gallery } from '../components/gallery'
import './accommodation.scss'

export const Accommodation = () => {
  const { id } = useParams()
  const logement = data.find(l => l.id === id)
  if (!logement) return <section className="accommodation"><h1>Logement introuvable</h1></section>

  return (
    <section className="accommodation">
      <div className="accommodation__image-wrapper">
        <Gallery images={logement.pictures || [logement.cover]} alt={logement.title} />
      </div>
      <div className="accommodation__infos">
        <div className="accommodation__main">
          <h1 className="accommodation__title">{logement.title}</h1>
          <p className="accommodation__location">{logement.location}</p>
          <div className="accommodation__tags">
            {logement.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>
          <div className="accommodation__row">
            <RatingStars rating={logement.rating} />
            <div className="accommodation__host-row">
              <span className="accommodation__host-name">
                {logement.host.name.split(' ').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && <br />}
                  </React.Fragment>
                ))}
              </span>
              <span className="accommodation__host-picture" />
            </div>
          </div>
        </div>
      </div>
      <div className="accommodation__dropdowns">
        <Dropdown title="Description">{logement.description}</Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map(e => <li key={e}>{e}</li>)}
          </ul>
        </Dropdown>
      </div>
    </section>
  )
} 