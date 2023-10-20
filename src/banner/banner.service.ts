import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannerService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getBanner() {
    try {
      const data = this.prisma.banner.findMany();
      return data;
    } catch (err) {
      throw new HttpException('Failed', 400);
    }
  }
}
