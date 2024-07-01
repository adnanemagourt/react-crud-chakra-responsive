import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../../styles/Button';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      {/* <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div className='contact-short-btn'>
            <NavLink to="/contact">
              <Button className='btn'>Contact Us</Button>
            </NavLink>
          </div>

        </div>
      </section> */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Adnane AIT MAGOURT</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis hendrerit dolor.</p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" required autoComplete='off' placeholder='Email' id="" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://linkedin.com/in/adnane-ait-magourt"
                target='_blank'>
                  <FaLinkedinIn className='icons' />
                </a>
              </div>
              <div>
                <a href="https://github.com/adnanemagourt"
                target='_blank'>
                  <FaGithub className='icons' />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Contact us</h3>
            <h3>+212 600 000 000</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Adnane AIT MAGOURT. All rights reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>



    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    margin-top: 10rem;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    padding: 4rem 1rem 9rem 1rem;

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }

  }

@media(max-width: ${({ theme }) => theme.media.mobile}){
  .contact-short{
    width: 95vw;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .contact-short-btn{
      justify-self: flex-start;
    }
  }

}

`;

export default Footer