import { Router } from "express";
import Place from "../models/Place";

const router = Router();

router.get("/", (req, res) => {
  Place.find((err, items) => {
    res.send(items);
  });
});

router.get("/:id", (req, res) => {
  Place.findById(req.params.id, (err, item) => {
    if (!item) {
      return res.status(404).send("Document not found!");
    }

    res.send(item);
  });
});

router.post("/", (req, res) => {
  const place = new Place({
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
  });

  place.save(function (err, item) {
    res.send(item);
  });
});

router.put("/:id", (req, res) => {
  const place = new Place({
    name: req.body.name,
    lat: req.body.lat,
    lng: req.body.lng,
  });

  Place.findByIdAndUpdate(req.params.id, place, (err, item) => {
    if (!item) {
      return res.status(404).send("Document not found!");
    }

    res.send(item);
  });
});

router.delete("/:id", (req, res) => {
  Place.findByIdAndRemove(req.params.id, (err, item) => {
    if (!item) {
      return res.status(404).send("Document not found!");
    }

    if (err) {
      return res.send("Deletion error!");
    }

    res.status(200).send("Deleted successfully!");
  });
});

export default router;
