import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListMessagesByUserIdUseCase } from './ListMessagesByUserIdUseCase';

class ListMessagesByUserIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const listMessagesByUserIdUseCase = container.resolve(ListMessagesByUserIdUseCase);
    const messages = await listMessagesByUserIdUseCase.execute({ user_id });

    return response.json(messages);
  }
}

export { ListMessagesByUserIdController };
