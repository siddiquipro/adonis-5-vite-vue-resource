import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ResourceController {
	public async index({ request, Model }: HttpContextContract) {
		const all = request.all();
		console.log(all);
		const qry = Model.query();
		if (all.with) {
			let vals = all.with.split(",");
			for (let i = 0; i < vals.length; i++) {
				qry.preload(vals[i]);
			}
		}
		return await qry;
		// return await await Model.query().preload("posts");
	}

	public async store({}: HttpContextContract) {}

	public async show({}: HttpContextContract) {}

	public async edit({}: HttpContextContract) {}

	public async update({}: HttpContextContract) {}

	public async destroy({}: HttpContextContract) {}
}
