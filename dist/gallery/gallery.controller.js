"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryController = void 0;
const common_1 = require("@nestjs/common");
const gallery_service_1 = require("./gallery.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const sharp = require("sharp");
const fs = require("fs");
let GalleryController = class GalleryController {
    constructor(galleryService) {
        this.galleryService = galleryService;
    }
    async getGallery() {
        return this.galleryService.getGallery();
    }
    async getShowcase() {
        return this.galleryService.getShowcase();
    }
    async getFading() {
        return this.galleryService.getFading();
    }
    async postGallery(gallery_img) {
        return this.galleryService.postGallery(gallery_img);
    }
    async convertToWebp(ipg_files) {
        const webpPromises = ipg_files.map(async (ipg_file) => {
            const jpgBuffer = fs.readFileSync(ipg_file.path);
            const webpData = await sharp(jpgBuffer).webp({ quality: 80 }).toBuffer();
            return webpData;
        });
        const webpDataArray = await Promise.all(webpPromises);
        return { message: 'success', webpDataArray };
    }
};
exports.GalleryController = GalleryController;
__decorate([
    (0, common_1.Get)('image'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getGallery", null);
__decorate([
    (0, common_1.Get)('/showcase'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getShowcase", null);
__decorate([
    (0, common_1.Get)('/fading'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "getFading", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("gallery_img", {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + "/public/gallery_img",
            filename: (req, file, callback) => callback(null, file.originalname)
        })
    })),
    (0, common_1.Post)('/upload-gallery'),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "postGallery", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('ipg_files', 40)),
    (0, common_1.Post)('/convert-to-webp'),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GalleryController.prototype, "convertToWebp", null);
exports.GalleryController = GalleryController = __decorate([
    (0, common_1.Controller)('gallery'),
    __metadata("design:paramtypes", [gallery_service_1.GalleryService])
], GalleryController);
//# sourceMappingURL=gallery.controller.js.map