import { Form } from './style';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

export const FormContact = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('portfolio_lari', 'form_portfolio_lari', e.target, 'user_Rtk4ZFWu0RDUgC6G4ZMPa')
      .then((result) => {
        toast.success('return "Obrigada pelo contato, em breve retornarei!"')
      }, (error) => {
        toast.error('Algo deu errado!')
      });
      e.target.reset();
  };
  
  return (
        <Form onSubmit={sendEmail}>
        <header>Por favor, preencha os dados!</header>
        <label className='label'for="name" >
          Nome completo:
        </label>
        <input type="text" placeholder="Nome" name="name" required />
        <label className='label' for="email">
          Digite seu email:
        </label>
        <input type="email" placeholder="Email" name="email" required />
        <label for="Mensagem,">
          Mensagem
        </label>
        <textarea
          placeholder="Mensagem"
          class="input-model"
          name="message"
        ></textarea>
        <button type='submit'>
          Enviar
        </button>
        </Form>
 
    )
}