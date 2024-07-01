import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Feel free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.5167720233057!2d-7.939699325363395!3d32.21724931238394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdaf7b69a4863dc9%3A0x761c6e59360b5b42!2sUM6P%20College%20of%20Computing!5e0!3m2!1sfr!2sma!4v1718798697467!5m2!1sfr!2sma"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mzbnnnwn" method='POST' className='contact-inputs'>
            <input type="text" name="username" id="" placeholder='username' autoComplete='off' required />
            <input type="email" name="Email" id="" placeholder='Email' autoComplete='off' required />
            <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.container{
  margin-top: 6rem;
  text-align: center;

  .contact-form{
    max-width: 50rem;
    margin: auto;
  
    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;