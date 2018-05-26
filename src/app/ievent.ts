export interface Ievent {

        id: number,
        name: string,
        date: string,
        time: string,
        Registration: number,
        imageUrl: string,
        location: {
          address: string,
          city: string,
          country: string
        }
      
}
