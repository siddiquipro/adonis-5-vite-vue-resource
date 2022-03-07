import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { string } from "@ioc:Adonis/Core/Helpers";
import Application from "@ioc:Adonis/Core/Application";
import path from "path";

export default class Resource {
	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
		//get model name dynamically
		const modelName = ctx.params.resource;
		const filePath = path.join(Application.appRoot, `/app/Models/${string.capitalCase(string.singularize(modelName))}`);
		console.log(filePath);
		const Model = require(filePath);
		ctx.Model = Model.default;
		await next();
	}
}
