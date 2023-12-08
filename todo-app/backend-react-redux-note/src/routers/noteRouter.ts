import { Router } from "express";
import { 
    create, 
    findNotes, 
    findSingleNote, 
    removeSingleNote, 
    updateSingleNote 
} from "../controllers/noteController";

const router = Router();

router.post('/create', create)
router.patch("/:noteId",updateSingleNote)
router.delete("/:noteId", removeSingleNote)
router.get("/:id", findSingleNote)
router.get("/", findNotes)

export default router;