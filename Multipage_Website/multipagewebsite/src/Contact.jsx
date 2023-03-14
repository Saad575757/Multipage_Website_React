import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='contact'>Feel Free to Contact us</h2>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28926.947692843925!2d67.04710211151341!3d25.004585218549476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e112e6f90d%3A0xd206289c85cea5bc!2sPower%20House%20Chowrangi%20Station%20-%20BRT!5e0!3m2!1sen!2s!4v1678621632030!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action='#' method='POST' className='contact-input'>
            <input type='text' name='username' placeholder='username' autoComplete='off' required />
            <input type='email' name='Email' placeholder='Email' autoComplete='off' required />
            <textarea name='message' cols='30' rows='6' autoComplete='off' placeholder='Message' required />
            <input type='submit' value='send' className='button' />
          </form>
        </div>
      </div>
      </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0 5rem 0;
  .map{
    margin-top: 5rem;
    text-align: center;
  }
  .container{
    text-align: center;
    margin-top: 5rem;
    justify-content: center;
  }
  .contact-form{
    max-width: 50rem;
    width: auto;
    margin-left: 25%;
  }
  .contact-input{
    display: flex;
    flex-direction: column;
    input[type="submit"]{
      cursor: pointer;
      transition: all 0.2s;

      &:hover{
        background-color: ${({theme})=>theme.colors.white};
        border: 1px solid ${({theme})=>theme.colors.btn};
        color: ${({theme})=>theme.colors.btn};
        transform: scale(0.9);
      }
    }
  }
  .button{
    margin-left: 30%;
  }

`;

export default Contact;