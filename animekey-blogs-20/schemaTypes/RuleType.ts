// schemaTypes/RuleType.ts

export type RuleType = {
  required: () => RuleType
  min: (min: number) => RuleType
  max: (max: number) => RuleType
  length: (len: number) => RuleType
  uri: (options?: { allowRelative?: boolean; scheme?: string[] }) => RuleType
  warning: (msg: string) => RuleType
  error: (msg: string) => RuleType
  custom: (fn: (value: any, context: any) => boolean | string) => RuleType
}
