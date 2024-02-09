import express from "express";
import * as NoteController from "../controller/notes";

const router = express.Router();

router.get("/", NoteController.getNotes);

router.get("/:noteId", NoteController.getNote);

router.post("/createNote", NoteController.createNote);


// router.post("/updateNote", NoteController.updateNote);

export default router;