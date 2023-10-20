/// <reference types="multer" />
export declare class GalleryService {
    private prisma;
    constructor();
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
}
