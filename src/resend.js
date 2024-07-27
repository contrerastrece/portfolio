import { Resend } from 'resend';

const apiKey = import.meta.env.VITE_RESEND_API_KEY;

const resend = new Resend(apiKey);

export default resend;
