interface IBody {
  sticker: string;
  quantity: string;
  note: string;
}
class HttpClient {
  constructor(private baseUrl: string) {}

  async get(path: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}${path}`);
    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }
    throw new Error(body);
  }

  async post(url: string, body: IBody) {
    await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async delete(url: string) {
    await fetch(`${this.baseUrl}${url}`, {
      method: 'DELETE',
    });
  }
}

export { HttpClient };
