interface IResponse {
  status: string;
}

export class GetHealthService {
  execute(): IResponse {
    return {
      status: 'api-password-validator up!',
    };
  }
}
