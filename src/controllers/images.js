"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = exports.createImage = void 0;
const ImageApiCall_1 = require("../api/ImageApiCall");
const Images_1 = require("../model/Images");
const createImage = async (req, res) => {
    const prompt = req.body.prompt;
    const numImages = req.body.num_images;
    const email = req.body.email;
    if (prompt.length === 0 || numImages < 1 || numImages > 10) {
        res.status(400).json({
            error: 'Bad Request'
        });
    }
    else {
        (0, ImageApiCall_1.createImageFromOpenAi)(prompt, Number(numImages))
            .then(async (data) => {
            if (typeof email === 'string') {
                console.log(email, data);
                await Images_1.ImageModel.create({
                    email,
                    prompt,
                    images: data,
                    createdAt: new Date()
                })
                    .then(() => {
                    res.status(201).json({
                        success: 'Images Generated',
                        images: data
                    });
                })
                    .catch(() => {
                    res.status(500).json({
                        error: 'An error occurred'
                    });
                });
            }
            else {
                res.status(201).json({
                    success: 'Images Generated',
                    images: data
                });
            }
        })
            .catch((err) => {
            res.status(500).json({
                error: 'An error occurred',
                message: err.message
            });
        });
    }
};
exports.createImage = createImage;
const getImages = async (req, res) => {
    const email = req.params.email;
    const images = await Images_1.ImageModel.find({
        email
    });
    res.status(200).json({
        images
    });
};
exports.getImages = getImages;
