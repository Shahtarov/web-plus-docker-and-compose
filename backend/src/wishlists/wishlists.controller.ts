import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UseGuards
} from "@nestjs/common";
import { WishlistsService } from "./wishlists.service";
import { CreateWishlistDto } from "./dto/create-wishlist.dto";
import { UpdateWishlistDto } from "./dto/update-wishlist.dto";
import { JwtGuard } from "./../auth/guards/jwt.guard";
import { ReqUser } from "./../users/users.decorator";
import { User } from "./../users/entities/user.entity";

@UseGuards(JwtGuard)
@Controller("wishlistlists")
export class WishlistsController {
	constructor(private readonly wishlistsService: WishlistsService) {}

	@Post()
	async create(
		@ReqUser() user: User,
		@Body() createWishlistDto: CreateWishlistDto
	) {
		return await this.wishlistsService.create(user.id, createWishlistDto);
	}

	@Get()
	findAll() {
		return this.wishlistsService.findAll();
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.wishlistsService.findOneById(+id);
	}

	@Patch(":id")
	update(
		@Param("id") id: string,
		@ReqUser() user: User,
		@Body() updateWishlistDto: UpdateWishlistDto
	) {
		return this.wishlistsService.updateOne(+id, user.id, updateWishlistDto);
	}

	@Delete(":id")
	remove(@Param("id") id: string, @ReqUser() user: User) {
		return this.wishlistsService.removeOne(+id, user.id);
	}
}
