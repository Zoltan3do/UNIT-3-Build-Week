import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";


const AdvertisingSide = () => {
  const [ads, setAds] = useState([]);
  const [randomAd, setRandomAd] = useState(null);

  // Funzione per fare fetch del file JSON
  const fetchAds = async () => {
    try {
      const response = await fetch("/advertising.json"); // Percorso del file JSON
      const data = await response.json();
      setAds(data);
    } catch (error) {
      console.error("Errore nel recupero dati json", error);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  useEffect(() => {
    if (ads.length > 0) {
      const randomIndex = Math.floor(Math.random() * ads.length);
      setRandomAd(ads[randomIndex]);
    }
  }, [ads]);

  if (!randomAd) return null;

  return (
    <Card className="mb-3">
      <Card.Img
        variant="top"
        src={randomAd.logoUrl}
        alt={randomAd.company}
        style={{ width: "100px", margin: "0 auto", paddingTop: "10px" }}
      />
      <Card.Body>
        <Card.Title>{randomAd.company}</Card.Title>
        <Card.Text>{randomAd.message}</Card.Text>
        <Button variant="outline-primary">{randomAd.cta}</Button>
      </Card.Body>
    </Card>
  );
};

export default AdvertisingSide;
