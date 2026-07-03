import { contactConfig } from '../config/contact';
export default function FloatingWhatsApp(){
  const url = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`;
  return <a className='wa' href={url} target='_blank'>WhatsApp</a>;
}
