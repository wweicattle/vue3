var ib={sd:343,sf:434,df:{sdf:454}}
var obj = new Proxy(ib, {
    get: function (target, propKey, receiver) {
      console.log(`getting ${propKey}!`);
      return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log(target);
    //   console.log(`setting ${propKey}!`);
    //   return Reflect.set(target, propKey, value, receiver);
    }
  });
  obj.df.sdf=435453535
console.log(obj);
//   obj.rer=343545;
//   console.log(ib);
//   console.log(obj.rer);
//   console.log(ib.rer);