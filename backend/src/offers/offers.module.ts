import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OffersService } from "./offers.service";
import { OffersController } from "./offers.controller";
import { Offer } from "./entities/offer.entity";
import { WishesModule } from "./../wishes/wishes.module";
import { Wish } from "./../wishes/entities/wish.entity";

@Module({
	controllers: [OffersController],
	providers: [OffersService],
	imports: [TypeOrmModule.forFeature([Offer, Wish]), WishesModule],
	exports: [OffersService]
})
export class OffersModule {}
