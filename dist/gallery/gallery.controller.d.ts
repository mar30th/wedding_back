/// <reference types="multer" />
import { GalleryService } from './gallery.service';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    getGallery(): Promise<{
        img_id: number;
        link: string;
    }[]>;
    getShowcase(): Promise<{
        showcase_id: number;
        link: string;
    }[]>;
    getFading(): Promise<{
        fading_id: number;
        link: string;
    }[]>;
    postGallery(gallery_img: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
        data: {
            img_id: number;
            link: string;
        };
    }>;
    convertToWebp(ipg_files: any): Promise<{
        message: string;
        webpDataArray: any[];
    }>;
}
