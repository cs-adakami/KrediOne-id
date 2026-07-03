import { contactConfig } from '../config/contact';
export default function Header(){
  return (
    <div className='header'>
      <div className='logo'></div>
      <h1>{contactConfig.serviceName}</h1>
    </div>
  );
}
