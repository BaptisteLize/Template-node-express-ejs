const sessionMiddleware = session({
  /* store */
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 24 * 60 * 60 * 1000 // 1 jour (en millisecondes)
  }
});

export default sessionMiddleware;