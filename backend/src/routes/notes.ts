import express from "express";
import * as NoteController from "../controller/notes";

const router = express.Router();

router.get("/", NoteController.getNotes);

router.get("/:noteId", NoteController.getNote);

router.post("/createNote", NoteController.createNote);

router.patch("/:noteId", NoteController.updateNote);

router.delete("/:noteId", NoteController.deleteNote);

export default router;