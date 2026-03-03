interface MockAxiosInstance {
  get: jest.Mock;
  post: jest.Mock;
  default: { adapter: object; headers: { common: object } };
  interceptors: {
    request: { use: jest.Mock; eject: jest.Mock };
    response: { use: jest.Mock; eject: jest.Mock };
  };
  create: jest.Mock<MockAxiosInstance, []>;
}

const mockAxios: MockAxiosInstance = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),

  default: { adapter: {}, headers: { common: {} } },
  interceptors: {
    request: { use: jest.fn(), eject: jest.fn() },
    response: { use: jest.fn(), eject: jest.fn() },
  },

  create: jest.fn(),
};

mockAxios.create.mockReturnValue(mockAxios);

export default mockAxios;
