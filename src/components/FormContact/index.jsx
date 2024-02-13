import { Form } from './style';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export const FormContact = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_lari', 'form_portfolio_lari', e.target, 'user_Rtk4ZFWu0RDUgC6G4ZMPa')
      .then((result) => {
        toast.success('return "Thanks for reaching out! I will get back to you shortly')
      }, (error) => {
        toast.error('Something went wrong =/')
      });
      e.target.reset();
  };
  
  return (
        <Form onSubmit={sendEmail}>
        <h2 className="sendMsg">Or send me a message directly through here!</h2>
        <label className='label'for="name" >
          Full Name:
        </label>
        <input type="text" placeholder="Nome" name="name" required />
        <label className='label' for="email">
          Email:
        </label>
        <input type="email" placeholder="Email" name="email" required />
        <label for="Mensagem,">
          Message
        </label>
        <textarea
          placeholder="Mensagem"
          class="input-model"
          name="message"
        ></textarea>
        <button type='submit'>
          Send
        </button>
        </Form>
 
    )
}