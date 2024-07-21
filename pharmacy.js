export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      if (drug.name !== 'Magic Pill') {
        this.updateExpiresIn(drug);
        this.updateBenefit(drug);
        if (drug.expiresIn < 0) {
          this.handleExpiredDrug(drug);
        }
      }
    });

    return this.drugs;
  }

  updateExpiresIn(drug) {
    drug.expiresIn -= 1;
  }

  updateBenefit(drug) {
    switch (drug.name) {
      case 'Herbal Tea':
        this.increaseBenefit(drug, 1);
        break;
      case 'Fervex':
        this.updateFervex(drug);
        break;
      case 'Dafalgan':
        this.decreaseBenefit(drug, 2);
        break;
      default:
        this.decreaseBenefit(drug, 1);
    }
  }

  updateFervex(drug) {
    if (drug.expiresIn < 5) {
      this.increaseBenefit(drug, 3);
    } else if (drug.expiresIn < 10) {
      this.increaseBenefit(drug, 2);
    } else {
      this.increaseBenefit(drug, 1);
    }
  }

  handleExpiredDrug(drug) {
    switch (drug.name) {
      case 'Herbal Tea':
        this.increaseBenefit(drug, 1);
        break;
      case 'Fervex':
        drug.benefit = 0;
        break;
      case 'Dafalgan':
        this.decreaseBenefit(drug, 2);
        break;
      default:
        this.decreaseBenefit(drug, 1);
    }
  }

  increaseBenefit(drug, value) {
    drug.benefit = Math.min(50, drug.benefit + value);
  }

  decreaseBenefit(drug, value) {
    drug.benefit = Math.max(0, drug.benefit - value);
  }
}
