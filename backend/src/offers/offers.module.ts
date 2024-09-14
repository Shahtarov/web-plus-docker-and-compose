import { Wish } from './../wishes/entities/wish.entity';
import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { Offer } from './entities/offer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishesModule } from 'src/wishes/wishes.module';

@Module({
  imports: [TypeOrmModule.forFeature([Offer, Wish]), WishesModule],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
