## Meteor Transcompiler

Simple package for helping transcompiling below listed on client side:
- Sass
- Less
- Coffeescript

It is used by nucleuside:live-update package for preprocessing above listed on client side so it can live-update them without going to server (saves time).

## Usage
You need to initialize the component you require before using it. Only when you initialize the component it's compiler is loaded on the client side.

* **Sass**
  - NucleusTranscompiler.initialize_sass()
  - Then use `NucleusTranscompiler.Sass` as you would use the Sass compiler added by hand
  
* **Less**
  - NucleusTranscompiler.initialize_less()
  - Then use `NucleusTranscompiler.less` as you would use the less compiler added by hand

* **Coffeescript**
  - NucleusTranscompiler.initialize_coffeescript()
  - Then use `NucleusTranscompiler.CoffeeScript` as you would use the CoffeeScript compiler added by hand
