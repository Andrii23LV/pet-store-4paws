import  fb  from '../styles/images/social/fb.svg';
import  ig  from '../styles/images/social/instagram.svg';
import  tg  from '../styles/images/social/tg.svg';
import  youtube  from '../styles/images/social/youtube.svg';
import  twitter  from '../styles/images/social/twitter.svg';
import  phone  from '../styles/images/phone.svg';
import  mail  from '../styles/images/mail.svg';
import '../styles/footer.css'

export function Footer() {
  return (
    <section className='footer'>
        <div className='footer-wrap'>
            <div className='footer-titles'>
                <h2>Our social medias</h2>
                <h2>Contacts</h2>
            </div>
            <div className='footer-links'>
                <ul>
                    <li><img src={ig}></img><a href='#'>Instagram</a></li>
                    <li><img src={tg}></img><a href='#'>Telegram</a></li>
                    <li><img src={youtube}></img><a href='#'>Youtube</a></li>
                    <li><img src={twitter}></img><a href='#'>Twitter</a></li>
                    <li><img src={fb}></img><a href='#'>Facebook</a></li>
                </ul>
                <ul>
                    <li><img src={phone}></img><a href='#'>+38-123-456-78-90</a></li>
                    <li><img src={phone}></img><a href='#'>+38-123-456-78-99</a></li>
                    <li><img src={mail}></img><a href='#'>petstore@store.pet</a></li>
                </ul>
            </div>
            <h1>FourPaws Store</h1>
            <h3>Copyright © 2022</h3>
        </div>
    </section>
  )
}
