/****
 * 1. install jsonwebtoken.
 * 2. require kore jwt.sign(payload, secret, {expiresIn}) korte hobe.
 * 3. token ta ke client side a pathte hobe
 */

/***
 * how to store token in the client side
 * 1. memory ( any js variable) --> ok type
 * 2. Local storage // not secure --> ok type (XSS -> cross-site scripting )
 * 3. Cookie: http only
 */

/***
 * 1. set cookie with httpOnly. for development secure: false.
 *
 * 2. cors
 * app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);
 *
 * 3. client side axios settings
 * in axios set { withCredentials: true }
 */

/**
 * 1. to send cookie form the client side make sure added withCredentials true for the api call using axios .
 * 2. use cookie parser as middleware.
 */
