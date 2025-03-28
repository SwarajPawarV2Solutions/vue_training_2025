//In TypeScript, generics are a way to define flexible, reusable functions, classes, or interfaces that can work with any data type while maintaining type safety. Rather than specifying concrete types, generics use placeholders (like T or U) that are replaced with specific types when the function, class, or interface is used, allowing the same code to work with different types.

// This enables you to write more reusable and type-safe code.

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
  return val
}

function identityTwo(val: any): any{
  return val
}

function identityThree<Type>(val: Type): Type{
  return val
}

function identityfour<T>(val: T): T{
  return val
}

identityfour(3)
identityfour("Hello")


// creating own Generics 
interface Bottle {
    brand: string,
    type: number
}

// identityfour<Bottle>({})