export class Address {
  zipcode: string;
  address: string;
  number: string;
  neibourhood: string;
  complementary: string;
  reference: string;
  city: string;
  state: string;
  country: string;
  constructor(data: any) {
    this.zipcode = data.zipcode || '';
    this.address = data.address || '';
    this.number = data.number || '';
    this.neibourhood = data.neibourhood || '';
    this.complementary = data.complementary || '';
    this.reference = data.reference || '';
    this.city = data.city || '';
    this.state = data.state || '';
    this.country = data.country || '';
  }
}
