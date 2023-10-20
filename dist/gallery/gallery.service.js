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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let GalleryService = class GalleryService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async getGallery() {
        try {
            const data = await this.prisma.gallery.findMany();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed', 400);
        }
    }
    async getShowcase() {
        try {
            const data = await this.prisma.showcase.findMany();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed', 400);
        }
    }
    async getFading() {
        try {
            const data = await this.prisma.fading_img.findMany();
            return data;
        }
        catch (err) {
            throw new common_1.HttpException('Failed', 400);
        }
    }
    async postGallery(gallery_img) {
        try {
            let image = '/public/gallery_img/' + gallery_img.filename;
            const data = await this.prisma.gallery.create({
                data: {
                    link: image,
                },
            });
            return { success: true, message: 'success', data };
        }
        catch (err) {
            throw new common_1.HttpException('Failed', 400);
        }
    }
};
exports.GalleryService = GalleryService;
exports.GalleryService = GalleryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GalleryService);
//# sourceMappingURL=gallery.service.js.map