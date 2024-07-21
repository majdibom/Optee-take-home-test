import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  test.each([
    ['Doliprane', 10, 20, 9, 19],
    ['Doliprane', 10, 0, 9, 0],
    ['Regular Drug', 0, 20, -1, 18],
    ['Herbal Tea', 10, 10, 9, 11],
    ['Herbal Tea', 0, 10, -1, 12],
    ['Fervex', 10, 20, 9, 22],
    ['Fervex', 5, 20, 4, 23],
    ['Fervex', 0, 20, -1, 0],
    ['Magic Pill', 10, 20, 10, 20],
    ['Dafalgan', 10, 20, 9, 18],
    ['Dafalgan', 0, 20, -1, 16],
  ])('should update drug "%s" with expiresIn %i and benefit %i to expiresIn %i and benefit %i', (name, expiresIn, benefit, expectedExpiresIn, expectedBenefit) => {
    const drugs = [new Drug(name, expiresIn, benefit)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    expect(drugs[0].expiresIn).toBe(expectedExpiresIn);
    expect(drugs[0].benefit).toBe(expectedBenefit);
  });

  it('should not increase the benefit of any drug above 50', () => {
    const drugs = [new Drug('Herbal Tea', 10, 50), new Drug('Fervex', 5, 50)];
    const pharmacy = new Pharmacy(drugs);
    pharmacy.updateBenefitValue();
    expect(drugs[0].benefit).toBe(50);
    expect(drugs[1].benefit).toBe(50);
  });
});
