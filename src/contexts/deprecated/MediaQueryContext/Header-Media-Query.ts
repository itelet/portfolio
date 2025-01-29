import contextValues from './context-values.json';
import { ContextItem, Data, MediaQueries } from './types';

const typedContextValues: Data = contextValues;

function getMediaQuerySizeMap(
  firstKey: keyof Data,
  predicates: MediaQueries
): ContextItem | null | undefined {
  const context = typedContextValues[firstKey];
  if (!context) return null;

  for (const [key, value] of Object.entries(predicates)) {
    if (value === true && context[key]) {
      return context[key];
    }
  }

  return null;
}

export { getMediaQuerySizeMap };
