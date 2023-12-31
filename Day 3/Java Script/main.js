class Figura {
  constructor(nazwa) {
    this.nazwa = nazwa;
  }

  obliczPolePowierzchni() {
    return 0;
  }
}

class Kolo extends Figura {
  constructor(promien) {
    super('Koło');
    this.promien = promien;
  }

  obliczPolePowierzchni() {
    return Math.PI * Math.pow(this.promien, 2);
  }
}

class Prostokat extends Figura {
  constructor(szerokosc, wysokosc) {
    super('Prostokąt');
    this.szerokosc = szerokosc;
    this.wysokosc = wysokosc;
  }

  obliczPolePowierzchni() {
    return this.szerokosc * this.wysokosc;
  }
}

const kolo = new Kolo(5);
console.log(`${kolo.nazwa} o promieniu ${kolo.promien} ma pole powierzchni ${kolo.obliczPolePowierzchni().toFixed(2)}`);

const prostokat = new Prostokat(3, 7);
console.log(`${prostokat.nazwa} o szerokości ${prostokat.szerokosc} i wysokości ${prostokat.wysokosc} ma pole powierzchni ${prostokat.obliczPolePowierzchni()}`);
