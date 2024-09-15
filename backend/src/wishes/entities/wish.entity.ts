import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Length, IsUrl, IsPositive, IsNumber } from "class-validator";
import { User } from "../../users/entities/user.entity";
import { Offer } from "../../offers/entities/offer.entity";
import { DefaultEntity } from "../../common/entity/default.entity";

@Entity()
export class Wish extends DefaultEntity {
	@Column()
	@Length(1, 250)
	name: string;

	@Column()
	@IsUrl()
	link: string;

	@Column()
	@IsUrl()
	image: string;

	@Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
	@IsNumber()
	price: number;

	@Column({ nullable: true })
	@IsNumber()
	raised: number;

	@Column({ default: "" })
	@Length(1, 1024)
	description: string;

	@ManyToOne(() => User, (user) => user.wishes)
	owner: User;

	@OneToMany(() => Offer, (offer) => offer.item)
	offers: Offer[];

	@Column({ default: 0 })
	@IsPositive()
	copied: number;
}
