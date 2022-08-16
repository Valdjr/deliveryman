import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateUseCaseController {
    async handle(request: Request, response: Response) {
        const {id_deliveryman} = request.body
        const {id} = request.params
        const updateEndDateUseCase = new UpdateEndDateUseCase()
        const delivery = await updateEndDateUseCase.execute({
            id_delivery: id, id_deliveryman
        })

        return response.json(delivery)
    }
}