import { contactConfig } from '../config/contact';
export default function Footer(){
  return <div className='footer'>{contactConfig.footerText}</div>;
}
