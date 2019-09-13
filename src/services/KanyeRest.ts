export class KanyeRest {

  public getQuote(): Promise<any> {
    return fetch('https://api.kanye.rest/')
      .then((response) => {
        return response.json();
      })
      .catch((error) => { throw new Error('Kanye Rests'); });
  }

}
