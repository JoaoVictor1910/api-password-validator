import { Injectable } from '@nestjs/common';

interface IResponse {
  status: string;
}

@Injectable()
export class GetHealthService {
  execute(): IResponse {
    return {
      status: 'api-password-validator up!',
    };
  }
}
