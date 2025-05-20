import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { accommodationService } from '../services/accommodationService'
import { Tag } from '../components/tag'
import { RatingStars } from '../components/rating-stars'
import { Dropdown } from '../components/dropdown'
import { Gallery } from '../components/gallery'
import './accommodation.scss'

export const Accommodation = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLogement = async () => {
      try {
        const data = await accommodationService.getById(id)
        if (!data) {
          navigate('/not-found')
          return
        }
        setLogement(data)
      } catch (error) {
        navigate('/not-found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchLogement()
  }, [id, navigate])

  if (isLoading) return <div>Chargement...</div>
  if (!logement) return null

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