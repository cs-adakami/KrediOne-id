import { contactConfig } from '../config/contact';
export default function Hero(){
  return (
    <div className='hero'>
      <h2>{contactConfig.pageTitle}</h2>
      <p>{contactConfig.pageSubtitle}</p>
    </div>
  );
}
