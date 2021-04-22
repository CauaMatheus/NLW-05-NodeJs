import { Socket } from 'socket.io';
import { container } from 'tsyringe';

import { CreateConnectionUseCase } from './CreateConnectionUseCase';

class CreateConnectionController {
  async handle(socket: Socket): Promise<void> {
    socket.on('client_first_access', (params) => {
      const { email, text } = params;
      const socket_id = socket.id;

      const createConnectionUseCase = container.resolve(CreateConnectionUseCase);
      createConnectionUseCase.execute({ email, text, socket_id });
    });
  }
}

export { CreateConnectionController };
