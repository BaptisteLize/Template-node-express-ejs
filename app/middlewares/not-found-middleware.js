const notFoundMiddleware = (req,res) => {
  res.status(404).send("404 - Page Not Found");
}

export default notFoundMiddleware;