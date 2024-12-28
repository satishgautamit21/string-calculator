export class StringCalculator {
  add(numbers: string): number {

    
    if (!numbers) return 0;

    let delimiter = /,|\n/;
  
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n/);
      
      if (delimiterMatch) {
        const delimiters = delimiterMatch[1]
          .match(/\[(.*?)\]/g) // Extract delimiters inside []
          ?.map(d => d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) || [];
        
        delimiter = new RegExp(delimiters.join('|'));
        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }

    const numberList = numbers.split(delimiter).map(n => parseInt(n, 10) || 0);
    
    const negatives = numberList.filter(n => n < 0);
    
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return numberList.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
}