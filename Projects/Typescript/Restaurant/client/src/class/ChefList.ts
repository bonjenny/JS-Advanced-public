import Chef from "./Chef";

export default class ChefList {
  chefs: Chef[];
  findChefAsync = () => {
    return new Promise<Chef>(
      function (this: any, resolve: any) {
        // this?
        setInterval(_findChef(this.chefs, resolve), 100);
      }.bind(this)
    );
  };
  constructor(list: Chef[]) {
    this.chefs = list;
  }
}

function _findChef(chefs: Chef[], resolve: any) {
  return () => {
    chefs.forEach((chef) => {
      if (chef.isAvailable()) return resolve(chef);
    });
  };
}
