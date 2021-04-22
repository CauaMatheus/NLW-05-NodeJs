import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByUsernameUseCase } from './FindByUsernameUseCase';

class FindByUsernameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const findByUsernameUseCase = container.resolve(FindByUsernameUseCase);
    const setting = await findByUsernameUseCase.execute({ username });

    return response.json(setting);
  }
}

export { FindByUsernameController };
