export type SearchRequest = {
  datasetId: string;
  query: string;
  limit: number;
};

export type SearchResult = {
  chunkId: string;
  content: string;
  score: number;
};

export interface Retriever {
  search(request: SearchRequest): Promise<SearchResult[]>;
}