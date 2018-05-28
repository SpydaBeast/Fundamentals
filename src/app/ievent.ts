export interface Ievent {

        id: number,
        name: string,
        date: string,
        time: string,
        registration: number,
        imageUrl: string,
        location: {
          address: string,
          city: string,
          country: string
        }
      
}
