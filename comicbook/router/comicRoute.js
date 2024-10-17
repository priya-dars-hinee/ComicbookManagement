import express from "express";

import {createcomicbook,getbook,updatecomic,getbooks,deletebook} from "../controller/comicController.js";
const router=express.Router();

router.post('/comic',createcomicbook)
router.get('/comics',getbooks);
router.get("/comic/:id",getbook)
router.delete("/comic/:id",deletebook)
router.put('/comic/:id',updatecomic)


export default router;