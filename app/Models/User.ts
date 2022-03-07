import { DateTime } from "luxon";
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";

import Post from "App/Models/Post";

export default class User extends BaseModel {
	@hasMany(() => Post)
	public posts: HasMany<typeof Post>;

	@column({ isPrimary: true })
	public id: number;

	@column()
	public name: string;

	@column()
	public email: string;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
