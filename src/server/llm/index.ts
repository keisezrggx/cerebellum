export type TextGenerationRequest = {
  system: string;
  prompt: string;
};

export type TextGenerationResult = {
  text: string;
  model: string;
};

export interface LanguageModel {
  generate(request: TextGenerationRequest): Promise<TextGenerationResult>;
}