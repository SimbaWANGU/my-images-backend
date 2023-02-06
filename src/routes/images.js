"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = require("express");
const images_1 = require("../controllers/images");
const imagesRouter = (0, express_1.Router)();
exports.imagesRouter = imagesRouter;
imagesRouter.post('/create', (req, res) => {
    (0, images_1.createImage)(req, res)
        .then(() => { })
        .catch(() => { });
});
imagesRouter.get('/:email', (req, res) => {
    (0, images_1.getImages)(req, res)
        .then(() => { })
        .catch(() => { });
});
