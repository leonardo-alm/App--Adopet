export interface IType {
  "name": string;
  "coats": string[],
  "colors": string[],
  "genders": string[],
  "_links": {
    "self": { "href": string; },
    "breeds": { "href": string; }
  }
}