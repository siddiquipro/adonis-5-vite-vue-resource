import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import ResourceController from "./ResourceController";
import Application from "@ioc:Adonis/Core/Application";

export default class BaseController extends ResourceController {
	public async www({ view }: HttpContextContract) {
		let manifest = null;
		if (Application.nodeEnvironment === "development") {
			try {
				const manPath = Application.publicPath("manifest.json");
				manifest = require(manPath);
			} catch (error) {
				console.log("Issues with manifest file", error);
			}
		}
		return view.render("welcome", { manifest });
	}

	public async notFound({ request, response }: HttpContextContract) {
		return response.status(404).send({ error: "NOT_FOUND", msg: `The api endpoint ${request.url()} does not exist` });
	}
}
