import { handleAuth } from '@auth0/nextjs-auth0';

export default handleAuth();

// This automatically handles the following routes:
//  - /api/auth/login
//  - /api/auth/logout
//  - /api/auth/callback
//  - /api/auth/me
