interface User{
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(CouponName: string, value: number): number
}

const swaraj: User = {
    dbId: 11,
    email: "swaraj@gmail.com",
    userId: 1,
    startTrial: () => {
      return "Trial Started"
    },

    getCoupon :  (name: "Swaraj10", off: 10) => {
        return 10
    }
   
}
swaraj.userId = 2