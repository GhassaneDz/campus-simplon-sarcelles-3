/**
 * @namespace myApp
 */
(function app() {
  ("use strict");

  /**
   * Represents a factory owned by Beans
   * @memberof myApp
   * @constructor
   * @throws Will throw an error if not instanciated with new keyword
   * @param {*} p custom value for connstruct configuration
   * @returns {object} an instance of the Beans construction "class"
   * @author ga guillaume@owlab.io
   */
  const BeansConstruction = function BeansConstruction(p) {
    if (!(this instanceof BeansConstruction))
      throw new Error("warning : new keyword required");

    this.name = "Beans";
    this.num = 99;
    this.street = "green";
    this.city = "Shalton";
    this.zipcode = "72991";
    this.custom = p;
    // console.log("this@Beans =>", this);
    // une fonction appelée en forme construct retourne toujours l'instance courante
  };

  // méthodes d'instance ...
  BeansConstruction.prototype.print = function print() {
    return `${this.name} ${this.num} ${this.street} ${this.city} ${
      this.zipcode
    }`;
  };
  // liées au constructeur BeansConstruction via son prototype
  BeansConstruction.prototype.toPDF = function toPDF() {
    // your code here...
  };

  /**
   * Represents a factory owned by Beans
   * @memberof myApp
   * @returns {object} a singleton object representing the Jims factory
   * @author ga guillaume@owlab.io
   */
  const factoryJims = function factoryJims() {
    return {
      name: "Jims",
      num: 103,
      street: "green",
      city: "Shalton",
      zipcode: "72990",
      print: () => {
        // this ici fait référence à l'objet retourné ci-dessus
        return `${this.name} ${this.num} ${this.street}, street ${
          this.city
        } ${this.zipcode}`;
      }
    };
  };

  const fb = new BeansConstruction("yo");
  // const fb2 = BeansConstruction("yo too");
  console.log("Beans --->", fb);
  console.log(fb.print());

  const fj = factoryJims();
  console.log("Jims --->", fj);
  console.log(fj1.print());

 

}());
