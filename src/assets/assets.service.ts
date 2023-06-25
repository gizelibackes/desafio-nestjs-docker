import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
//import { Observable } from 'rxjs';
//import { Asset } from '@prisma/client';
// import { Asset as AssetSchema } from './asset.schema';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.asset.findMany();
  }

  create(data: { id: string; symbol: string }) {
    return this.prismaService.asset.create({
      data,
    });
  }
}
