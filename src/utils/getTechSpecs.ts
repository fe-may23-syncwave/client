import { ProductWithDetails } from '../types/Product';

export function getTechSpecs(productType: string, prod: ProductWithDetails) {
  if (productType === 'phones') {
    const specs = Object.entries(prod).slice(-7, -1);

    if (prod.cell) {
      const cells = prod.cell
        .split('')
        .filter((ch) => !'"[]'.includes(ch))
        .join('');

      specs.push(['Cell', cells]);
    }

    return specs;
  }

  if (productType === 'accessories') {
    const specs = [
      ['Color', prod.color],
      ['Material', 'silicone'],
      ['Warranty', '30 days'],
      ['Made in', 'USA'],
    ];

    return specs;
  }

  if (productType === 'tablets') {
    const specs = [
      ['Screen', prod.screen],
      ['Resolution', prod.resolution],
      ['Processor', prod.processor],
      ['RAM', prod.ram],
    ];

    return specs;
  }

  return [];
}
