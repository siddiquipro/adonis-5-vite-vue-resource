import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import User from "App/Models/User";

export default class Post extends BaseModel {
	@belongsTo(() => User)
	public user: BelongsTo<typeof User>;

	@column()
	public userId: number | string;

	@column()
	public title: string;

	@column()
	public description: string;

	@column({ isPrimary: true })
	public id: number;

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime;

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime;
}
