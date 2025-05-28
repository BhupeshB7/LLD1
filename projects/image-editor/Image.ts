export class Image {
  constructor(
    private name: string,
    private metadata: string,
    private content: string
  ) {}

  getName(): string {
    return this.name;
  }

  getMetadata(): string {
    return this.metadata;
  }

  getContent(): string {
    return this.content;
  }

  setName(name: string): void {
    this.name = name;
  }

  setMetadata(metadata: string): void {
    this.metadata = metadata;
  }

  setContent(content: string): void {
    this.content = content;
  }
}
