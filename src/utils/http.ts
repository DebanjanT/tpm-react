export type HttpClientProps = {
  baseUrl: string;
  headers?: Record<string, string>;
};

class Client {
  private props: HttpClientProps;

  constructor(props: HttpClientProps) {
    this.props = {
      ...props,
      headers: props.headers || {},
    };
  }

  addHeader(key: string, value: string) {
    this.props.headers![key] = value;
    return this; // Enable method chaining
  }

  async login(username: string, password: string) {
    try {
      // using fetch instead of axios
      const response = await fetch(`${this.props.baseUrl}/secure/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...this.props.headers,
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Extract server response if available
        throw new Error(
          `${response.status} ${response.statusText} - ${
            errorMessage || "Unknown error"
          }`
        );
      }

      // throw error if status (failed)net::ERR_CONNECTION_REFUSED

      return response.json();
    } catch (error) {
      if (
        error instanceof TypeError &&
        error.message.includes("Failed to fetch")
      ) {
        throw new Error("Network error: Unable to connect to the server.");
      }
      throw error; // Re-throw other unexpected errors
    }
  }
}

export default Client;
