"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
const ImageApiCall_1 = require("../api/ImageApiCall");
const createImage = async (req, res) => {
    const prompt = req.body.prompt;
    const numImages = req.body.num_images;
    if (prompt.length === 0 || numImages < 1 || numImages > 10) {
        res.status(400).json({
            error: 'Bad Request'
        });
    }
    else {
        (0, ImageApiCall_1.createImageFromOpenAi)(prompt, Number(numImages))
            .then((data) => {
            console.log('please', data);
        })
            .catch((err) => {
            console.log(err);
        });
    }
};
exports.createImage = createImage;
