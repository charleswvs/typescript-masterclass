import {Request, Response } from 'express';
import EmailService from '../ services/EmailService';

const users = [
  {name: 'Charles', email: "charles@email.com"},
]
export default {
  async index(req: Request, res: Response){
    return res.json(users);
  },

  async create(req: Request, res: Response){
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
      name: "Charles",
      email: "charles@email.com"
    },
      message: {
      subject: "Bem vindo", body: "Seja bem vindo"
      }
    });

    res.send()
  }
}