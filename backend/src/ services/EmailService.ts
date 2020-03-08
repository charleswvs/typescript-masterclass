interface IMailTo{
  name: string;
  email: string;
}

interface IMailMessage{
  subject: string;
  body: string;
  attachment?: string[];
}

interface IMessageDto{
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService{
  sendMail(request: IMessageDto): void;
}

class EmailService implements IEmailService{
  sendMail({to, message}: IMessageDto){
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;