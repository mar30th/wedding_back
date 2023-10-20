import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { GalleryService } from './gallery.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as sharp from 'sharp';
import * as fs from 'fs';



@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get('image')
  async getGallery(){
    return this.galleryService.getGallery()
  }

  @Get('/showcase')
  async getShowcase(){
    return this.galleryService.getShowcase()
  }

  @Get('/fading')
  async getFading() {
    return this.galleryService.getFading()
  }

  @UseInterceptors(FileInterceptor("gallery_img", {
    storage: diskStorage({
      destination: process.cwd() + "/public/gallery_img",
      filename: (req, file, callback) => callback(null, file.originalname)
    })
  }))
  @Post('/upload-gallery')
  async postGallery(@UploadedFile() gallery_img: Express.Multer.File) {
    return this.galleryService.postGallery(gallery_img)
  }

  @UseInterceptors(
    FilesInterceptor('ipg_files', 40), 
  )
  @Post('/convert-to-webp')
  async convertToWebp(@UploadedFiles() ipg_files) {
    const webpPromises = ipg_files.map(async (ipg_file) => {
      const jpgBuffer = fs.readFileSync(ipg_file.path);
      const webpData = await sharp(jpgBuffer).webp({ quality: 80 }).toBuffer();
      // fs.unlinkSync(ipg_file.path);
      return webpData;
    });
  
    const webpDataArray = await Promise.all(webpPromises);
  
    return { message: 'success', webpDataArray };
  }
  
}