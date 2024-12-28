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
    
    return numberList.reduce((sum, n) => sum + n, 0);
  }
}