import { css, CSSObject, Interpolation } from 'styled-components';

function mapValues<T, U>(
  obj: Record<string, T>,
  mapper: (value: T, key: string, obj: Record<string, T>) => U,
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const [key, value] of Object.entries(obj)) {
    result[key] = mapper(value, key, obj);
  }
  return result;
}

type DeviceType = 'desktop' | 'tablet' | 'phone';

const sizes: Record<DeviceType, number> = {
  desktop: 1200,
  tablet: 840,
  phone: 600,
};

type MediaFunction = (
  first: CSSObject | TemplateStringsArray,
  ...interpolations: Interpolation<object>[]
) => ReturnType<typeof css>;

const media = mapValues(
  sizes,
  (value) =>
    (...args: Parameters<MediaFunction>) => css`
      @media (max-width: ${value}px) {
        ${css(...args)}
      }
    `,
);

export { media };
