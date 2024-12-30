type PerformRequestParams = {
  query: string;
  variables?: Record<string, unknown>;
  includeDrafts?: boolean;
};

export const performRequest = async ({ query, variables = {}, includeDrafts = false }: PerformRequestParams) => {
  const response = await fetch("https://graphql.datocms.com/", {
      headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
          ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      },
      method: "POST",
      body: JSON.stringify({ query, variables }),
  });
  
  const responseBody = await response.json();
  
  if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
  }
  
  return responseBody;
}