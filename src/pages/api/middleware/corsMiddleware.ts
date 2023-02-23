import cors from 'cors'

const corsMiddleware = cors({
  origin: 'https://picture-perfect-two.vercel.app/', // Allow requests only from this origin
  credentials: true, // Allow cookies and authentication headers
});

export { corsMiddleware }