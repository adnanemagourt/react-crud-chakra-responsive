import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../styles/Button';
import { AppContext } from '../../Context/context';

const HeroSection = () => {
    const {name, title, image} = useContext(AppContext);
    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="hero-top-data">THIS IS ME</p>
                    <h1 className="hero-heading">{title}</h1>
                    <p className="hero-para">
                        {name}, Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis hendrerit dolor. Curabitur vel elit ut enim cursus auctor.
                    </p>
                    <Button className="btn hireme-btn">
                        <NavLink to="/contact">Hire Me</NavLink>
                    </Button>
                </div>
                <div className="section-hero-image">
                    <picture>
                        <img src={image} alt="" className='hero-img' />
                    </picture>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 4.8rem;
    }
  }
    `;

export default HeroSection