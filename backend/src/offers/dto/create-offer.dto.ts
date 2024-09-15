import { IsBoolean, IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateOfferDto {
	@IsNumber()
	@IsNotEmpty()
	itemId: number;

	@IsPositive()
	@IsNotEmpty()
	amount: number;

	@IsBoolean()
	hidden: boolean;
}
