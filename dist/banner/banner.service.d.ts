export declare class BannerService {
    private prisma;
    constructor();
    getBanner(): Promise<{
        banner_id: number;
        LINK: string;
    }[]>;
}
