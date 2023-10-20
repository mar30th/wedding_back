import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './gallery/gallery.module';
import { AuthModule } from './auth/auth.module';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [GalleryModule, AuthModule, BannerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
