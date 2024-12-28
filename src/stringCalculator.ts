export class StringCalculator {
    add(numbers: string): number {
      if (!numbers) return 0;

      let delimiter = /,|\n/;
    
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }
    
    const numberList = numbers.split(delimiter).map(n => parseInt(n, 10) || 0);
    
    return numberList.reduce((sum, n) => sum + n, 0);
  }
}