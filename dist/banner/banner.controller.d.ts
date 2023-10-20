import { BannerService } from './banner.service';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    getBanner(): Promise<{
        banner_id: number;
        LINK: string;
    }[]>;
}
