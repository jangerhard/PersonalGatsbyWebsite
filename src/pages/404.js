import React from 'react'
import CardPage from "../components/Pages/CardPage";

const NotFoundPage = () => (
  <CardPage
      imgLink={"https://upload.wikimedia.org/wikipedia/commons/0/0d/Tumbeasts_sign1.png"}
      text={"You just hit a route that doesn't exist... the sadness."}
  />
);

export default NotFoundPage
