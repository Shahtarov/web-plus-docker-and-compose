import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	UseGuards,
	Delete
} from "@nestjs/common";
import { OffersService } from "./offers.service";
import { CreateOfferDto } from "./dto/create-offer.dto";
import { ReqUser } from "./../users/users.decorator";
import { User } from "./../users/entities/user.entity";
import { JwtGuard } from "./../auth/guards/jwt.guard";

@UseGuards(JwtGuard)
@Controller("offers")
export class OffersController {
	constructor(private readonly offersService: OffersService) {}

	@Post()
	async create(@ReqUser() user: User, @Body() createOfferDto: CreateOfferDto) {
		await this.offersService.create(user, createOfferDto);
		return {};
	}

	@Get()
	findAll() {
		return this.offersService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.offersService.findOne(+id);
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.offersService.removeOne(+id);
	}
}
