export class UtilFunction {
  /**
   * Converts a full date string to MM/YY
   * @param input ISO Date string
   * @returns short month and year
   */
  static dateToCardValidThrough = (input: string): string => {
    const today = input ? new Date(input) : new Date();
    const year = today.getFullYear().toString().substring(-2);

    let month = (today.getMonth() + 1).toString();
    if (month.length < 2) month = `0${month.toString()}`;

    return `${month}/${year}`;
  };

  static formatCurrency = (input: number): string => {
    const USDFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: Math.trunc(Math.abs(input)).toFixed().length,
    });
    return USDFormat.format(input);
  };

  static maskCardNumber = (input: number): string => {
    if (!input) return "0000 **** **** 0000";
    const cNumber = input
      .toString()
      .split("")
      .map((x, i) => {
        return i >= 4 && i <= 11 ? "*" : x;
      });
    return cNumber.join("");
  };

  static formatCardNumber = (input: string): string => {
    if (!input) return "0000 **** **** 0000";
    const cNumber = input.split("").map((x, i) => {
      return (i + 1) % 4 === 0 ? x + " " : x;
    });
    return cNumber.join("");
  };
}
