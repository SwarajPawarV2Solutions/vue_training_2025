interface Named {
    readonly name: string;
}

// we have split interface because if we want name on some pages or greet method on some pages.

interface Greetable extends Named{
    greet(phrase: string): void
}

class Person implements Greetable {
  name: string;
  age = 25;
  
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
    
}

  constructor(n: string){
    this.name = n;
  }
}