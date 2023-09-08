export type CssSpecResult = {
  humanizedSize: string;
  humanizedGzipSize: string;
  rules: {
    total: number,
    size: {
      graph: number[],
      max: number;
      average: number
    }
  }
  selectors: {
    total:number;
    type:number;
    class:number;
    id:number;
    specificity: {
      max:number;
      average:number;
    }
  }
  declaration: {
    "total": number,
    "unique": number,
    "uniqueToTotalRatio": number,
  }
  mediaQueries: {
    "total": number,
    "unique": number,
  }
}
