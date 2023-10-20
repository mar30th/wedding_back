import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

@Injectable()
export class GalleryService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getGallery() {
    try {
      const data = await this.prisma.gallery.findMany();
      return data;
    } catch (error) {
      throw new HttpException('Failed', 400);
    }
  }

  async getShowcase() {
    try {
      const data = await this.prisma.showcase.findMany();
      return data;
    } catch (error) {
      throw new HttpException('Failed', 400);
    }
  }

  async getFading() {
    try {
      const data = await this.prisma.fading_img.findMany();
      return data;
    } catch (err) {
      throw new HttpException('Failed', 400);
    }
  }

  async postGallery(gallery_img: Express.Multer.File) {
    try {
      let image = '/public/gallery_img/' + gallery_img.filename;
      const data = await this.prisma.gallery.create({
        data: {
          link: image,
        },
      });
      return { success: true, message: 'success', data };
    } catch (err) {
      throw new HttpException('Failed', 400);
    }
  }
}
