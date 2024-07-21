class Drug {
  constructor(public name: string, public expiresIn: number, public benefit: number) {}
}

class Pharmacy {
  constructor(public drugs: Drug[] = []) {}

  updateBenefitValue(): Drug[] {
    for (const drug of this.drugs) {
      this.updateDrug(drug);
    }
    return this.drugs;
  }

  private updateDrug(drug: Drug): void {
    switch (drug.name) {
      case 'Herbal Tea':
        this.updateHerbalTea(drug);
        break;
      case 'Fervex':
        this.updateFervex(drug);
        break;
      case 'Magic Pill':
        break; // Magic Pill does not change
      case 'Dafalgan':
        this.updateDafalgan(drug);
        break;
      default:
        this.updateRegularDrug(drug);
        break;
    }
  }

  private updateHerbalTea(drug: Drug): void {
    this.increaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1);
    drug.expiresIn -= 1;
  }

  private updateFervex(drug: Drug): void {
    if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    } else if (drug.expiresIn <= 5) {
      this.increaseBenefit(drug, 3);
    } else if (drug.expiresIn <= 10) {
      this.increaseBenefit(drug, 2);
    } else {
      this.increaseBenefit(drug, 1);
    }
    drug.expiresIn -= 1;
  }

  private updateDafalgan(drug: Drug): void {
    this.decreaseBenefit(drug, drug.expiresIn <= 0 ? 4 : 2);
    drug.expiresIn -= 1;
  }

  private updateRegularDrug(drug: Drug): void {
    this.decreaseBenefit(drug, drug.expiresIn <= 0 ? 2 : 1);
    drug.expiresIn -= 1;
  }

  private increaseBenefit(drug: Drug, value: number): void {
    drug.benefit = Math.min(50, drug.benefit + value);
  }

  private decreaseBenefit(drug: Drug, value: number): void {
    drug.benefit = Math.max(0, drug.benefit - value);
  }
}

export { Drug, Pharmacy };
