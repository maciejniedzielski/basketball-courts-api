import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const router = Router();

let places = [{ id: uuidv4(), name: "Kołobrzeska", lat: 50, lng: 1 }];

router.get("/", (req, res) => {
  return res.send(places);
});

router.get("/:id", (req, res) => {
  const place = places.find((place) => place.id === req.params.id);

  return res.send(place);
});

router.post("/", (req, res) => {
  const place = {
    id: uuidv4(),
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
  };

  places.push(place);

  return res.send(place);
});

router.delete("/:id", (req, res) => {
  places = places.filter((place) => place.id !== req.params.id);
  return res.send();
});

export default router;
